import { defineConfig } from "astro/config";
import svelte from "@astrojs/svelte";
import tailwind from "@astrojs/tailwind";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
// https://astro.build/config
export default defineConfig({
	integrations: [svelte(), tailwind()],
	markdown: {
		// Turn -- and --- into en- and em-dashes respectively.
		smartypants: true,

		// Remark plugins. These run before the markdown is compiled to HTML.
		remarkPlugins: [remarkMath],

		// Rehype plugins. These run after the markdown is compiled to HTML.
		rehypePlugins: [
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
