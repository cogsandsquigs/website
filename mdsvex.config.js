import Andromeda from "./src/lib/styles/shiki/andromeda.json" assert { type: "json" };
import rehypeKatexSvelte from "rehype-katex-svelte";
import remarkMath from "remark-math";
import shiki from "shiki";

const highlighter = async (code, lang) => {
    let highlighted = await shiki
        .getHighlighter({
            theme: Andromeda,
        })
        .then((highlighter) =>
            highlighter.codeToHtml(code, {
                lang: lang,
            })
        );

    return `{@html \`${highlighted}\` }`;
};

/** @type {import('mdsvex').MdsvexOptions} */
export default {
    extensions: [".md"],

    highlight: {
        highlighter,
    },

    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatexSvelte],
};
