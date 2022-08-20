<script lang="ts">
    // CSS imports
    import "victormono";
    import "$lib/styles/main.css";
    import "$lib/styles/katex/katex.min.css";

    import Header from "$lib/components/Header.svelte";
    // import Footer from "$lib/components/Footer.svelte";
</script>

<Header />

<svelte:head>
    <meta name="author" content="Ian Pratt" />
</svelte:head>

<div class="min-h-[83.9vh] h-fit mx-auto max-w-prose px-2">
    <slot />
</div>

<!-- <Footer /> -->
