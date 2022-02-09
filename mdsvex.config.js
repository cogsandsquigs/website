import { defineMDSveXConfig as defineConfig } from "mdsvex";
import rehypeKatexSvelte from "rehype-katex-svelte";

const config = defineConfig({
  extensions: [".svelte.md", ".md", ".svx"],

  smartypants: {
    dashes: "oldschool",
  },

  remarkPlugins: [],
  rehypePlugins: [
    rehypeKatexSvelte,
  ],
});

export default config;
