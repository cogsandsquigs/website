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

    prerender: {
      default: true,
    },

    browser: {
      hydrate: true,
      router: false,
    },

    vite: {
      resolve: {
        alias: {
          $lib: path.resolve("src/lib"),
          $styles: path.resolve("src/lib/styles"),
          $components: path.resolve("src/lib/components"),
          $posts: path.resolve("src/posts")
        },
      },
    },
  },

  preprocess: [preprocess(), mdsvex(mdsvexconfig)],
};

export default config;
