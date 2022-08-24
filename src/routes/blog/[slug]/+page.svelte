<script lang="ts">
    import PageHead from "$lib/components/PageHead.svelte";
    import PageIntro from "$lib/components/PageIntro.svelte";
    import type { PageData } from "./$types";

    export let data: PageData;
</script>

<PageHead title={data.title} description={data.description} />

<PageIntro
    title={data.title}
    description={data.description}
    date={data.date}
    tags={data.tags}
/>

<svelte:component this={data.render} />
