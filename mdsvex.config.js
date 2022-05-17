import { defineMDSveXConfig as defineConfig } from "mdsvex"
//import rehypeKatexSvelte from "rehype-katex-svelte"
//import remarkMath from "remark-math"

const config = defineConfig({
	extensions: [".md"],

	smartypants: {
		quotes: false,
		ellipses: false,
		dashes: "oldschool",
	},

	layout: {
		posts: "./src/posts/layout.svelte",
		//projects: "./src/routes/projects/layout.svelte",
	},

	//remarkPlugins: [remarkMath],

	//rehypePlugins: [rehypeKatexSvelte],
})

export default config
