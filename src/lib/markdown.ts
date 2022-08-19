import { unified } from "unified";
import type { Compatible, VFile } from "vfile";
import remarkParse from "remark-parse";
import remarkFrontmatter from "remark-frontmatter";
import remarkParseFrontmatter from "remark-parse-frontmatter";
import remarkMath from "remark-math";
import remarkRehype from "remark-rehype";
import rehypeShiki from "@leafac/rehype-shiki";
import rehypeKatex from "rehype-katex";
import rehypeStringify from "rehype-stringify";
import shiki from "shiki";
import Andromeda from "$lib/shiki/andromeda-italic-color-theme.json";

export const render = async (markdown: Compatible): Promise<VFile> => {
    return await unified()
        .use(remarkParse)
        .use(remarkFrontmatter)
        .use(remarkParseFrontmatter)
        .use(remarkMath)
        .use(remarkRehype)
        .use(rehypeShiki, {
            highlighter: await shiki
                .getHighlighter({
                    theme: Andromeda
                })
        })
        .use(rehypeKatex)
        .use(rehypeStringify)
        .process(markdown);
};
