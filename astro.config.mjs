import sitemap from "@astrojs/sitemap";
import { defineConfig, squooshImageService } from "astro/config";

// https://astro.build/config
export default defineConfig({
	// The URL of my website
	site: "https://cogsandsquigs.dev",

	// Image optimization service
	image: {
		// Use Squoosh for image optimization instead of the default Sharp service as Sharp is not available with Bun
		service: squooshImageService({
			webp: true,
		}),
	},

	markdown: {
		// Example: Switch to use prism for syntax highlighting in Markdown
		syntaxHighlight: "shiki",
		shikiConfig: {
			theme: "nord",
		},
	},

	// Integrations / plugins that make my website work better
	integrations: [
		sitemap(), // Generates a sitemap.xml file for SEO
	],
});
