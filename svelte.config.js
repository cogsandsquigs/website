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

        csp: {
            mode: "auto",
            directives: {
                "object-src": ["none"],
                'script-src': ['self'],
                // "style-src": ["self", "data:"],
                // "font-src": ["self", "data:"],
            }
        },

        inlineStyleThreshold: 60000, // Inline critical page styles
    },
};
