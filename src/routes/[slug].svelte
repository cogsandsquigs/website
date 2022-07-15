<script lang="ts" context="module">
    import { posts } from "$lib/posts";
    import { session } from "$app/stores";

    export const load = async ({ session, params, fetch }) => {
        const slug = params.slug;
        // gets the post with the matching slug
        let post = (await posts()).filter(
            (page) => page.metadata.slug === slug
        )[0];

        if (post === undefined) {
            // if there is none, then return an error
            return {
                status: 404,
                error: "Blog post not found! Try looking for another, would ya?",
            };
        }

        console.log(session.user.uuid);

        return {
            status: 200,
            props: {
                ...post.metadata,
                post: post,
                /*
                views: await db.getPostViews(slug),
                liked: (await db.getUserLikes(session.user.uuid)).includes(
                    slug
                ),
                likes: await db.getPostLikes(slug),
                */
            },
        };
    };
</script>

<script lang="ts">
    import PostList from "$components/PostList.svelte";
    import { dateOptions, locale } from "$lib/info";
    import { RssIcon } from "@rgossiaux/svelte-heroicons/solid";
    import "$styles/one-dark-code.css"; // TODO: make css only import one-dark-code css when used

    export let title: string;
    export let description: string;
    export let date;
    export let slug;
    export let tags;
    export let recommendations;
    export let liked;
    export let likes;
    export let views;
    export let post: any;

    const handleLikeButtonClick = () => {
        console.log("changed");
        liked = !liked;
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
<svelte:component this={post.renderer} {...post.metadata} />

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
    <PostList posts={recommendations} size="sm" />
{/if}
