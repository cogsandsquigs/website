import remarkMath from "remark-math";
import rehypeKatexSvelte from "rehype-katex-svelte";

/** @type {import('mdsvex').MdsvexOptions} */
export default {
    extensions: [".md"],

    remarkPlugins: [remarkMath],

    rehypePlugins: [rehypeKatexSvelte],
};
