import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig, searchForWorkspaceRoot } from "vite";
import { ViteToml } from "vite-plugin-toml";

export default defineConfig({
	plugins: [sveltekit(), ViteToml()],

	assetsInclude: ["**/*.md", "**/*.toml"],

	server: {
		fs: {
			allow: [
				// search up for workspace root
				searchForWorkspaceRoot(process.cwd()),
				// your custom rules
				// Allow access to site config.
				"site.config.ts"
			]
		}
	}
});
