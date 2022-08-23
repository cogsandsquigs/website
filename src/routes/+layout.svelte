<script lang="ts">
    import "$lib/styles/main.scss";

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
