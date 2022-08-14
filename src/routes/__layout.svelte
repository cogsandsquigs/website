<script lang="ts">
    import "$lib/styles/main.css";
    import "victormono";

    import Header from "$lib/components/Header.svelte";
</script>

<Header />

<div class="min-h-[86vh] h-fit mx-auto max-w-prose px-2">
    <slot />
</div>

<hr class="bottom-0 m-0 mb-2" />

<footer class="flex bottom-0 justify-center mb-2 w-full text-xs" />
