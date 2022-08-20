<script lang="ts">
    import PageHead from "$lib/components/PageHead.svelte";
    import PageList from "$lib/components/PageList.svelte";
    import type { PageServerData } from "./$types";

    export let data: PageServerData;
</script>

<PageHead
    title="projects"
    description="My collection of projects that I've done over the years"
/>

<h1 class="mb-2">projects</h1>
<h2 class="m-0 mb-9">
    My collection of projects that I've done over the years
</h2>

<PageList pages={data.projects} />
