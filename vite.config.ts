import { sveltekit } from "@sveltejs/kit/vite";

const PatchSSRNoExternalPlugin = {
    name: "vite-plugin-patch-ssr-noexternal",
    enforce: "post",
    config(cfg) {
        if (!cfg.ssr?.noExternal) return;
        cfg.ssr.noExternal = cfg.ssr.noExternal.map((x) =>
            typeof x !== "string" || x.includes("*") || x.endsWith("/**")
                ? x
                : `${x}${!x.endsWith("/") ? "/" : ""}**`
        );
    },
};

/** @type {import('vite').UserConfig} */
const config = {
    plugins: [sveltekit()],

    legacy: { buildSsrCjsExternalHeuristics: true },

    server: {
        port: 3000,
    },

    assetsInclude: ["**/*.md"],

    resolve: {
        alias: {
            $lib: "/src/lib",
            $styles: "/src/lib/styles",
            $components: "/src/lib/components",
            $posts: "/src/posts",
            $assets: "/src/lib/assets",
        },
    },
};

export default config;
