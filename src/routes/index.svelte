<script lang="ts" context="module">
    export const load = async ({ fetch }) => {
        let request = await fetch("/api/posts");
        return {
            status: request.status,
            error: request.error,
            props: { posts: (await request.json()).slice(0, 3) },
        };
    };
</script>

<script lang="ts">
    import { title, subtitle } from "$lib/info";
    import type { Post } from "$lib/types";

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
<p>Hello, and welcome to my website, my little slice of the blogosphere!</p>
<h3>Recent posts:</h3>
<ul>
    {#each posts as post}
        <li><a href={`/blog/${post.slug}`}>{post.title}</a></li>
    {/each}
</ul>
