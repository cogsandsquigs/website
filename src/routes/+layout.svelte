<script lang="ts">
    import "$lib/styles/main.scss";

    import { loadFull } from "tsparticles";
    import Particles from "svelte-particles";
    import Header from "$lib/components/Header.svelte";
    // import Footer from "$lib/components/Footer.svelte";

    let particlesConfig = {
        particles: {
            color: {
                value: "#000",
            },
            links: {
                enable: true,
                color: "#000",
            },
            move: {
                enable: true,
            },
        },
    };

    let onParticlesLoaded = (event: any) => {
        const particlesContainer = event.detail.particles;

        // you can use particlesContainer to call all the Container class
        // (from the core library) methods like play, pause, refresh, start, stop
    };

    let particlesInit = async (engine: any) => {
        // you can use main to customize the tsParticles instance adding presets or custom shapes
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(engine);
    };
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

<div class="min-h-[83.9vh] h-fit mx-auto max-w-prose px-2">
    <slot />
</div>

<!-- <Footer /> -->
