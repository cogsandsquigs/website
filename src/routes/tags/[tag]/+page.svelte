<script lang="ts">
    import PageList from "$lib/components/PageList.svelte";

    import type { PageData } from "./$types";

    export let data: PageData;
</script>

<svelte:head>
    <title>Cogs and Squigs - tag: {data.title}</title>
    <meta property="og:title" content="Cogs and Squigs - {data.title}" />
</svelte:head>

<h1>{data.title}</h1>

<PageList pages={data.posts} />
