import { loadFull } from "tsparticles";
import { colors } from "$lib/styles/tailwind/extend.json";
import type {
    Engine,
    RecursivePartial,
    IOptions,
    IAnimatableColor,
} from "tsparticles-engine";

export const particlesConfig: RecursivePartial<IOptions> = {
    particles: {
        color: {
            value: colors.secondary,
        },
        links: {
            enable: true,
            color: colors.secondary,
        },
        move: {
            enable: true,
        },
    },
    interactivity: {
        detect_on: "window",
        events: {
            onHover: {
                mode: ["grab", "bubble"],
                enable: true,
            },
        },
        modes: {
            grab: {
                distance: 200,
            },
            bubble: {
                size: 10,
            },
        },
    },
};

export const onParticlesLoaded = (event: any) => {
    const particlesContainer = event.detail.particles;

    // you can use particlesContainer to call all the Container class
    // (from the core library) methods like play, pause, refresh, start, stop
};

export const particlesInit = async (engine: Engine) => {
    // you can use main to customize the tsParticles instance adding presets or custom shapes
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
};
