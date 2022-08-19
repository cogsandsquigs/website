<script lang="ts">
    import PageList from "$lib/components/PageList.svelte";

    import type { PageData } from "./$types";

    export let data: PageData;
</script>

<svelte:head>
    <title>Cogs and Squigs - blog</title>
    <meta property="og:title" content="Cogs and Squigs - blog" />
</svelte:head>

<h1>blog</h1>

<PageList pages={data.posts} />
