import adapter from "@sveltejs/adapter-static";
import { vitePreprocess } from "@sveltejs/kit/vite";
import { mdsvex } from "mdsvex";
import preprocess from "svelte-preprocess";
import mdsvexConfig from "./mdsvex.config.js";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: [".svelte", ...mdsvexConfig.extensions],

	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: [
		mdsvex(mdsvexConfig),
		vitePreprocess(),
		preprocess({
			postcss: true
		})
	],

	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter(),

		// Aliases to different parts of the project can be added here.
		alias: {
			// Configuration aliasing.
			$config: "./site.config.ts",

			// Aliasing to the content.
			$content: "./content",

			// This is the default, but adding it here for completeness.
			$lib: "./src/lib",

			// This links to components used throughout the site.
			$components: "./src/lib/components",

			// This links to the styles used throughout the site.
			$styles: "./src/lib/styles"
		}
	}
};

export default config;
