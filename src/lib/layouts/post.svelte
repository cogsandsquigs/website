<script lang="ts">
    import { title as sitetitle } from "$lib/info";

    export let title;
</script>

<svelte:head>
    <title>{sitetitle + " - " + title}</title>
    <meta property="og:title" content={sitetitle + " - " + title} />
</svelte:head>

<slot />
