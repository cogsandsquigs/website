<script lang="ts">
    import type { PageData } from "./$types";

    export let data: PageData;
    let katexLink: any;
</script>

<!-- Include KaTex scripts, as they are used in these pages -->
<svelte:head>
    <title>Cogs and Squigs - {data.title}</title>
    <meta property="og:title" content="Cogs and Squigs - {data.title}" />
</svelte:head>

<h1 class="m-0">{data.title}</h1>
<h3 class="m-0">Created on {data.date}</h3>

<div class="mt-4">
    {@html data.html}
</div>
