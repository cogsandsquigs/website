import { sveltekit } from "@sveltejs/kit/vite";

/** @type {import('vite').UserConfig} */
const config = {
    plugins: [sveltekit()],
    legacy: { buildSsrCjsExternalHeuristics: true },
};

export default config;
