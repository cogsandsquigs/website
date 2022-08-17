<script lang="ts">
    import type { PageData } from "./$types";

    export let data: PageData;
</script>

<svelte:head>
    <title>Cogs and Squigs - tags</title>
    <og:title>Cogs and Squigs - tags</og:title>
</svelte:head>
<h1>tags</h1>

<ul>
    {#each data.tags as tag}
        <li>
            <a href={`/tags/${tag}`}>
                {tag}
            </a>
        </li>
    {/each}
</ul>
