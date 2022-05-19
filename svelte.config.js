import { mdsvex } from "mdsvex";
import mdsvexconfig from "./mdsvex.config.js";
import adapter from "@sveltejs/adapter-auto";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: [".svelte", ...mdsvexconfig.extensions],

  kit: {
    // Default SvelteKit options
    // target: "#svelte",
    adapter: adapter({
      out: "build",
    }),
  },

  preprocess: [mdsvex(mdsvexconfig)],
};

export default config;
