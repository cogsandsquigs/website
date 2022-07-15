import { sveltekit } from "@sveltejs/kit/vite";

/** @type {import('vite').UserConfig} */
const config = {
    plugins: [sveltekit()],
    legacy: { buildSsrCjsExternalHeuristics: true },
    server: {
        port: 3000,
        open: true,
    },
};

export default config;
