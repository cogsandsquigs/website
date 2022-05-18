import { mdsvex } from "mdsvex"
import mdsvexconfig from "./mdsvex.config.js"
import adapter from "@sveltejs/adapter-vercel" //"sveltejs-adapter-ipfs"; //"@sveltejs/adapter-static";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: [".svelte", ...mdsvexconfig.extensions],
	//extensions: [".svelte", ".md"],

	kit: {
		// Default SvelteKit options
		// target: "#svelte",
		adapter: adapter(),
	},

	preprocess: [mdsvex(mdsvexconfig)],
}

export default config
