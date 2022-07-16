<script lang="ts" context="module">
    export const load = async ({ params, fetch, session }) => {
        const slug = params.slug;

        if (!(await slugs()).includes(slug)) {
            return {
                status: 404,
                error: `Post not found: ${slug}`,
            };
        }

        return {
            status: 200,
            props: {
                ...(await fetch(`/api/posts/${slug}`)
                    .then((res) => res.json())
                    .then((data) => data)),
                render: (await import(`../posts/${slug}.md`)).default, // we do this here so we can still use mdsvex stuff yay 🎉
                liked: await fetch(`/api/users/${session.uuid}`)
                    .then((res) => res.json())
                    .then((data) => data.likes.includes(slug)),
            },
        };
    };

    async function slugs() {
        const paths = import.meta.glob("$posts/*.md");
        let slugs: string[] = [];

        for (let path in paths) {
            slugs.push(path.slice(11, path.indexOf(".md")));
        }

        return slugs;
    }
</script>

<script lang="ts">
    import { dateOptions, locale } from "$lib/info";
    import { RssIcon } from "@rgossiaux/svelte-heroicons/solid";
    import "$styles/one-dark-code.css"; // TODO: make css only import one-dark-code css when used
    import type { Post } from "$lib/types";

    export let title: string;
    export let description: string;
    export let date: Date;
    export let slug: string;
    export let tags: string[];
    export let recommendations: Post[];
    export let liked: boolean;
    export let likes: number;
    export let views: number;
    export let render: string;

    const handleLikeButtonClick = async () => {
        liked = !liked;
        likes = liked ? likes + 1 : likes - 1;
        await fetch(`/api/posts/${slug}/like`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ liked }),
        });
    };
</script>

<div class="flex justify-between items-start">
    <h1 class="m-0">
        <a href="/{slug}">{title}</a>
    </h1>
    <a href="/rss.xml"><RssIcon class="icon" /></a>
</div>

<h3>{description}</h3>

<div class="flex items-center pb-2">
    <p class="m-0">
        Posted on {new Date(date).toLocaleDateString(locale, dateOptions)}
    </p>
    <span class="p-2">•</span>
    <p class="m-0">
        {views}
        {#if views == 1}
            view
        {:else}
            views
        {/if}
    </p>
    <span class="p-2">•</span>
    <p class="m-0">
        {likes}
        {#if likes == 1}
            like
        {:else}
            likes
        {/if}
    </p>
</div>

{#if tags != undefined && tags.length > 0}
    <p class="m-0 p-0">
        Tags:
        {#each tags as tag, index}
            {#if index > 0}
                , <a href={"/tags/" + tag}>{tag}</a>
            {:else}
                <a href={"/tags/" + tag}>{tag}</a>
            {/if}
        {/each}
    </p>
{/if}

<hr class="mt-2 mb-6" />

<!--
  post.renderer gets us the renderer.
  This way we can render the post's
  mdsvex content!
 -->
<svelte:component this={render} {title} />

<button on:click={handleLikeButtonClick}>
    {#if !liked}
        Like this post
    {:else}
        Unlike this post
    {/if}
</button>

{#if recommendations != null && recommendations.length > 0}
    <hr class="mt-2 mb-6" />
    <h3>You might like:</h3>
    <ul>
        {#each recommendations as post}
            <li>
                <a href="/{post.slug}">{post.title}</a>
            </li>
        {/each}
    </ul>
{/if}
