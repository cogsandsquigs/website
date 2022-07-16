<script lang="ts">
    import { title, subtitle } from "$lib/info";
</script>

<svelte:head>
    <title>{title + " - " + subtitle}</title>
    <meta property="og:title" content={title + " - " + subtitle} />
</svelte:head>

<div class="space-y-2">
    <h1 class="m-0">{title}</h1>
    <h2>{subtitle}</h2>
</div>
