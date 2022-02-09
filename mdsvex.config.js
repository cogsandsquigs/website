import { defineMDSveXConfig as defineConfig } from "mdsvex";
import rehypeKatexSvelte from "rehype-katex-svelte";

const config = defineConfig({
  extensions: [".svelte.md", ".md", ".svx"],

  smartypants: {
    dashes: "oldschool",
  },

  layout: {
			posts: "./src/routes/posts/__layout.svelte"
			//projects: "./src/routes/projects/layout.svelte"
	},

  remarkPlugins: [],
  
  rehypePlugins: [
    rehypeKatexSvelte,
  ],
});

export default config;
