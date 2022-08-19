<script lang="ts">
    import PageList from "$lib/components/PageList.svelte";
    import type { PageServerData } from "./$types";

    export let data: PageServerData;
</script>

<svelte:head>
    <title>Cogs and Squigs - projects</title>
    <meta property="og:title" content="Cogs and Squigs - projects" />
</svelte:head>

<h1>projects</h1>

<PageList pages={data.projects} />
