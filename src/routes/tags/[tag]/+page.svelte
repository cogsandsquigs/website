<script lang="ts">
    import Postlist from "$lib/components/Postlist.svelte";

    import type { PageData } from "./$types";

    export let data: PageData;
</script>

<svelte:head>
    <title>Cogs and Squigs - tag: {data.title}</title>
    <meta property="og:title" content="Cogs and Squigs - {data.title}" />
</svelte:head>

<h1>{data.title}</h1>

<Postlist posts={data.posts} />
