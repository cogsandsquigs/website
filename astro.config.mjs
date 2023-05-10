import svelte from "@astrojs/svelte";
import { defineConfig } from "astro/config";
import rehypeKatex from "rehype-katex";
import rehypeSlug from "rehype-slug";
import remarkMath from "remark-math";

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
		extendDefaultPlugins: true,

		// Turn -- and --- into en- and em-dashes respectively.
		smartypants: true,

		// Remark plugins. These run before the markdown is compiled to HTML.
		remarkPlugins: [
			// Adds math support to markdown.
			remarkMath
		],

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
