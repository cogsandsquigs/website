import svelte from "@astrojs/svelte";
import { defineConfig } from "astro/config";
import rehypeKatex from "rehype-katex";
import rehypeSlug from "rehype-slug";
import remarkMath from "remark-math";
import remarkSmartypants from "remark-smartypants";
import shikiTheme from "./src/styles/code-theme.shiki.json";

// https://astro.build/config
export default defineConfig({
	// Note that tailwind is being used, even without the tailwindcss integration. I
	// find it easier to manage everything when it all goes through one place (in this case,
	// PostCSS), not as separate vendor-dependent integrations.
	integrations: [
		// Add support for Svelte components.
		svelte()
	],

	markdown: {
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

			// Renders math with KaTeX.
			[
				rehypeKatex,
				{
					// ... other Katex Options
					macros: {
						"\\E": "\\mathbb{E}",
						"\\C": "\\mathbb{C}",
						"\\R": "\\mathbb{R}",
						"\\N": "\\mathbb{N}",
						"\\Q": "\\mathbb{Q}",
						"\\bigO": "\\mathcal{O}",
						"\\abs": "|#1|",
						"\\set": "\\{ #1 \\}",
						"\\indep": "{\\perp\\mkern-9.5mu\\perp}",
						"\\nindep": "{\\not\\!\\perp\\!\\!\\!\\perp}",
						"\\latex": "\\LaTeX",
						"\\katex": "\\KaTeX"
					}
				}
			]
		]
	}
});
