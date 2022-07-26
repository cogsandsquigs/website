import adapter from "@sveltejs/adapter-auto";
import preprocess from "svelte-preprocess";

/** @type {import('@sveltejs/kit').Config} */
const config = {
    extensions: [".svelte"],
    kit: {
        // Default SvelteKit options
        // target: "#svelte",
        adapter: adapter(),

        browser: {
            hydrate: true,
            router: false,
        },

        prerender: {
            default: false,
        },
    },

    preprocess: [preprocess({ postcss: true })],
};

export default config;
