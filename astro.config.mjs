import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
	// The URL of my website
	site: "https://cogsandsquigs.dev",

	// Integrations / plugins that make my website work better
	integrations: [
		sitemap(), // Generates a sitemap.xml file for SEO
	],
});
