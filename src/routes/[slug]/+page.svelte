<script lang="ts">
    import type { PageData } from "./$types";

    export let data: PageData;
</script>

<svelte:head>
    <title>Cogs and Squigs - {data.title}</title>
    <meta property="og:title" content="Cogs and Squigs - {data.title}" />
</svelte:head>

<h1>{data.title}</h1>

{@html data.html}
