import { unified } from "unified";
import type { Compatible, VFile } from "vfile";
import remarkParse from "remark-parse";
import remarkFrontmatter from "remark-frontmatter";
import remarkParseFrontmatter from "remark-parse-frontmatter";
import remarkMath from "remark-math";
import remarkRehype from "remark-rehype";
import rehypeRetext from "rehype-retext";
import rehypeShiki from "@leafac/rehype-shiki";
import rehypeKatex from "rehype-katex";
import rehypeStringify from "rehype-stringify";
import shiki, { type IShikiTheme } from "shiki";
import Andromeda from "$lib/styles/shiki/andromeda-italic.json";

export const render = async (markdown: Compatible): Promise<VFile> => {
    return await unified()
        .use(remarkParse)
        .use(remarkFrontmatter)
        .use(remarkParseFrontmatter)
        .use(remarkMath)
        .use(remarkRehype, { allowDangerousHTML: true } as any) // because otherwise typescript throws a hissy fit
        .use(rehypeShiki, {
            highlighter: await shiki.getHighlighter({
                theme: Andromeda as unknown as IShikiTheme, // because otherwise typescript throws a hissy fit
            }),
        })
        .use(rehypeKatex)
        .use(rehypeStringify, { allowDangerousHTML: true } as any) // because otherwise typescript throws a hissy fit
        .process(markdown);
};
