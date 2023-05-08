import { defineMDSveXConfig as defineConfig } from "mdsvex";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeKatex from "rehype-katex-svelte";
import rehypeSlug from "rehype-slug";
import remarkMath from "remark-math";

const config = defineConfig({
	extensions: [".svelte.md", ".md", ".svx"],

	smartypants: {
		dashes: "oldschool"
	},

	// Plugins to pass to remark before rehype.
	remarkPlugins: [remarkMath],

	// Plugins to pass to rehype after remark.
	rehypePlugins: [rehypeKatex, rehypeSlug, rehypeAutolinkHeadings]
});

export default config;
