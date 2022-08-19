<script lang="ts">
    import type { PageData } from "./$types";

    export let data: PageData;
</script>

<svelte:head>
    <title>Cogs and Squigs - tags</title>
    <meta property="og:title" content="Cogs and Squigs - tags" />
</svelte:head>
<h1>tags</h1>

<ul>
    {#each data.tags as tag}
        <li>
            <a href={`/blog/tags/${tag}`}>
                {tag}
            </a>
        </li>
    {/each}
</ul>
