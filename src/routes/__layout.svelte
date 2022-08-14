<script lang="ts">
    import "$lib/styles/main.css";
    import "victormono";

    import Header from "$lib/components/Header.svelte";
    import Footer from "$lib/components/Footer.svelte";
</script>

<Header />

<div class="min-h-[86vh] h-fit mx-auto max-w-prose px-2">
    <slot />
</div>

<Footer />
