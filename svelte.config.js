import adapter from "@sveltejs/adapter-static";
import preprocess from "svelte-preprocess";
import { mdsvex } from "mdsvex";
import mdsvexConfig from "./mdsvex.config.js";

/** @type {import('@sveltejs/kit').Config} */
export default {
    extensions: [".svelte", ".md"],

    preprocess: [
        preprocess({
            postcss: true,
        }),
        mdsvex(mdsvexConfig),
    ],

    kit: {
        adapter: adapter(),

        prerender: {
            default: true,
            crawl: true,
            enabled: true,
            entries: ["*"],
            onError: "fail",
        },

        browser: {
            hydrate: true,
            router: false,
        },
    },
};
