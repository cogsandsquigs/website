<script lang="ts" context="module">
    export const load = async ({ fetch }) => {
        let posts = await fetch(`/api/posts`) // adding url.origin to the endpoint b/c sveltekit fetch is not allowed here.
            .then((res) => res.json())
            .then((data) => data.slice(0, 3));

        let html = await fetch("/api/pages/index")
            .then((res) => res.json())
            .then((data) => data.content);

        return {
            status: 200,
            props: {
                content: html,
                posts: posts,
            },
        };
    };
</script>

<script lang="ts">
    import { title, subtitle } from "$lib/info";
    import type { Post } from "$lib/types";

    export let content: string;
    export let posts: Post[];
</script>

<svelte:head>
    <title>{title + " - " + subtitle}</title>
    <meta property="og:title" content={title + " - " + subtitle} />
</svelte:head>

<div class="space-y-2">
    <h1 class="m-0">{title}</h1>
    <h2>{subtitle}</h2>
</div>

{@html content}

<!-- TODO: Remove if/when notion-page-to-html supports databases -->
<h3 class="m-0">Recent posts:</h3>
<ul class="m-0">
    {#each posts as post}
        <li><a href={`/blog/${post.slug}`}>{post.title}</a></li>
    {/each}
</ul>
