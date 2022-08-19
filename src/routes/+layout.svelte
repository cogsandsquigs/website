<script lang="ts">
    // CSS imports
    import "victormono";
    import "$lib/styles/main.css";

    import Header from "$lib/components/Header.svelte";
    // import Footer from "$lib/components/Footer.svelte";
</script>

<svelte:head>
    <!-- Prism theme CSS -->
    <link rel="stylesheet" href="/prism/andromeda.css" />
    <!-- Katex CSS -->
    <link rel="stylesheet" href="/katex/katex.min.css" />
</svelte:head>

<Header />

<div class="min-h-[83.9vh] h-fit mx-auto max-w-prose px-2">
    <slot />
</div>

<!-- <Footer /> -->
