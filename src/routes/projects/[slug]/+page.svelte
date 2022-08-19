<script lang="ts">
    import PageIntro from "$lib/components/PageIntro.svelte";
    import type { PageData } from "./$types";

    export let data: PageData;
</script>

<svelte:head>
    <title>Cogs and Squigs - {data.title}</title>
    <meta property="og:title" content="Cogs and Squigs - {data.title}" />
</svelte:head>

<PageIntro
    title={data.title}
    description={data.description}
    date={data.date}
    tags={data.tags}
/>

<div class="mt-4">
    {@html data.html}
</div>
