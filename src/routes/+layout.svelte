<script lang="ts">
    import "$lib/styles/main.scss";

    import Particles from "svelte-particles";
    import {
        particlesConfig,
        onParticlesLoaded,
        particlesInit,
    } from "$lib/tsparticles";
    import Header from "$lib/components/Header.svelte";
    // import Footer from "$lib/components/Footer.svelte";
</script>

<Particles
    id="tsparticles"
    options={particlesConfig}
    on:particlesLoaded={onParticlesLoaded}
    {particlesInit}
/>

<Header />

<svelte:head>
    <meta name="author" content="Ian Pratt" />
</svelte:head>

<div
    class="min-h-[83.9vh] h-fit mx-auto max-w-prose px-2 bg-primary rounded-md"
>
    <slot />
</div>
