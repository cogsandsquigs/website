import adapter from "@sveltejs/adapter-static";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: [".svelte", ".md"],

  kit: {
    // Default SvelteKit options
    target: "#svelte",
    adapter: adapter(),
  },
};

export default config;
