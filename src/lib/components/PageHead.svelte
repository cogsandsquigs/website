<script lang="ts">
    export let title: string;
    export let description: string;
</script>

<svelte:head>
    <title>Cogs and Squigs - {title}</title>
    <meta property="og:title" content="Cogs and Squigs - {title}" />
    <meta name="description" content={description} />
    <meta property="og:description" content={description} />
</svelte:head>
