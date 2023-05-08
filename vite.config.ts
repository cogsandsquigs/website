import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig, searchForWorkspaceRoot } from "vite";

export default defineConfig({
	plugins: [sveltekit()],

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
