<script lang="ts">
    import { title } from "$lib/info";

    export let slug;
    export let html;
</script>

<svelte:head>
    <title>{title + " - " + slug}</title>
    <meta property="og:title" content={title + " - " + slug} />
</svelte:head>

{@html html}
