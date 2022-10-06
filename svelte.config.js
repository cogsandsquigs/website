import adapter from "@sveltejs/adapter-vercel";
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
        adapter: adapter({
            // default options are shown. On some platforms
            // these options are set automatically — see below
            pages: "build",
            assets: "build",
            fallback: true,
            precompress: false,
        }),

        prerender: {
            crawl: true,
            enabled: true,
            entries: ["*"],
            onError: "fail",
        },

        csp: {
            mode: "auto",
            directives: {
                "object-src": ["none"],
                "script-src": ["self"],
                // "style-src": ["self", "data:"],
                // "font-src": ["self", "data:"],
            },
        },

        inlineStyleThreshold: 60000, // Inline critical page styles
    },
};
