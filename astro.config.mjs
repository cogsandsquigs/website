import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import svelte from "@astrojs/svelte";
import remarkBibliography from "@cogsandsquigs/remark-bibliography";
import { defineConfig } from "astro/config";
import rehypeMathJax from "rehype-mathjax/chtml";
import rehypeSlug from "rehype-slug";
import remarkDirective from "remark-directive";
import remarkMath from "remark-math";
import remarkSmartypants from "remark-smartypants";
import config from "./site.config";
import shikiTheme from "./src/styles/code-theme.shiki.json";

// https://astro.build/config
export default defineConfig({
	// The URL of my website, for the sitemap
	site: config.site_url,

	// Configure the output build directory to be /build
	outDir: "./build",

	// Note that tailwind is being used, even without the tailwindcss integration. I
	// find it easier to manage everything when it all goes through one place (in this case,
	// PostCSS), not as separate vendor-dependent integrations.
	integrations: [
		// Add support for Svelte components.
		svelte(),

		// Generate a sitemap.
		sitemap(),

		// Use MDX for markdown.
		mdx({
			// Don't build any draft posts.
			draft: false
		})
	],

	// Markdown configuration and settings.
	markdown: {
		// Don't build any draft posts.
		draft: false,

		// Use Shiki highlighting for code.
		syntaxHighlight: "shiki",

		// Options for Shiki
		shikiConfig: {
			// Choose from Shiki's built-in themes (or add your own)
			// https://github.com/shikijs/shiki/blob/main/docs/themes.md
			theme: shikiTheme,

			// Add custom languages
			// Note: Shiki has countless langs built-in, including .astro!
			// https://github.com/shikijs/shiki/blob/main/docs/languages.md
			langs: [],

			// Enable word wrap to prevent horizontal scrolling
			wrap: true
		},

		// Smartypants is configured as a separate remark plugin for *maximum* control.
		smartypants: false,

		// Allow github-flavored markdown!
		gfm: true,

		// Allow for default plugins to be included.
		extendDefaultPlugins: true,

		// Remark plugins. These run before the markdown is compiled to HTML.
		remarkPlugins: [
			// Add directives to markdown.
			remarkDirective,

			// Add bibliography support
			remarkBibliography,

			// Adds math support to markdown.
			remarkMath,

			// Turn -- and --- into en- and em-dashes respectively.
			[
				remarkSmartypants,
				// ONLY allow oldschool en- and em-dashes, nothing else!
				{
					dashes: "oldschool",
					quotes: false,
					elipses: false,
					backticks: false
				}
			]
		],

		// Allow smartypants and GFM
		// Rehype plugins. These run after the markdown is compiled to HTML.
		rehypePlugins: [
			// Adds heading slug IDs to heading sections.
			rehypeSlug,
			// Adds links back to heading sections.
			// TODO: make link dissapear (maybe except on hover?)
			// [rehypeAutolinkHeadings, { behavior: "wrap" }],

			// Renders math with MathJax.
			[
				rehypeMathJax,
				{
					// CHTML options.
					chtml: {
						fontURL: "https://cdn.jsdelivr.net/npm/mathjax@3.2.2/es5/output/chtml/fonts/woff-v2"
					},

					// TeX options.
					tex: {
						// extensions to use
						packages: {
							"[+]": [
								// Stuff like `align` and `aligned`
								"ams",
								// Derivatives, curl, divergence, jacobians, etc.
								"physics"
							]
						},

						// start/end delimiter pairs for in-line math
						inlineMath: [
							["$", "$"],
							["\\(", "\\)"]
						],

						// start/end delimiter pairs for display math
						displayMath: [
							["$$", "$$"],
							["\\[", "\\]"]
						]
					}
				}
			]
		]
	}
});
