<script lang="ts">
    import PageHead from "$lib/components/PageHead.svelte";
    import type { PageData } from "./$types";

    export let data: PageData;
</script>

<PageHead title={data.title} description={data.description} />

<h1 class="mb-2">{data.title}</h1>
<h2 class="m-0 mb-9">{data.description}</h2>

{@html data.html}
