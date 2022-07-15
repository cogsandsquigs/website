import mdsvexconfig from "./mdsvex.config.js";
import { mdsvex } from "mdsvex";

import adapter from "@sveltejs/adapter-auto";
import preprocess from "svelte-preprocess";

import path from "path";

/** @type {import('@sveltejs/kit').Config} */
const config = {
    extensions: [".svelte", ...mdsvexconfig.extensions],

    kit: {
        // Default SvelteKit options
        // target: "#svelte",
        adapter: adapter(),

        alias: {
            $styles: path.resolve("src/lib/styles"),
            $components: path.resolve("src/lib/components"),
            $posts: path.resolve("src/posts"),
        },

        browser: {
            hydrate: true,
            router: false,
        },
    },

    preprocess: [
        preprocess({
            postcss: true,
        }),
        mdsvex(mdsvexconfig),
    ],
};

export default config;
