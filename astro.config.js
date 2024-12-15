import { defineConfig } from "astro/config";
// import mdx from "@astrojs/mdx";
// import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
    site: "https://cogsandsquigs.dev",
    // integrations: [mdx(), sitemap()],
    markdown: {
        shikiConfig: {
            theme: "catppuccin-mocha",
        },
    },
    vite: {
        css: {
            preprocessorOptions: {
                // NOTE: File extensions are used as keys for the option types, so if you want to use
                // `.sass` files, copy over options from the `scss` config.
                scss: {
                    api: "modern-compiler",
                },
            },
        },
    },
});
