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

<div class="mt-4">
    {@html data.html}
</div>

{#if data.repo_link}
    <p>
        Link to the repository <a href={data.repo_link}>here</a>.
    </p>
{/if}
