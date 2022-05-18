import { defineMDSveXConfig as defineConfig } from "mdsvex"
//import rehypeKatexSvelte from "rehype-katex-svelte"
//import remarkMath from "remark-math"

export default {
	extensions: [".md"],

	smartypants: {
		quotes: false,
		ellipses: false,
		dashes: "oldschool",
	},

	layout: {
		posts: "./src/posts/layout.svelte",
	},

	//remarkPlugins: [remarkMath],

	//rehypePlugins: [rehypeKatexSvelte],
}
