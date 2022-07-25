<script lang="ts">
    import { title, subtitle } from "$lib/info";
    import type { Post } from "$lib/types";

    export let html;
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

{@html html}

<!-- TODO: Remove if/when notion-page-to-html supports databases -->
<h3 class="m-0">Recent posts:</h3>
<ul class="m-0">
    {#each posts as post}
        <li><a href={`/blog/${post.slug}`}>{post.title}</a></li>
    {/each}
</ul>
