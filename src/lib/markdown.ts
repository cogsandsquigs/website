import { unified } from "unified";
import type { VFile } from "vfile";
import remarkParse from "remark-parse";
import remarkFrontmatter from "remark-frontmatter";
import remarkParseFrontmatter from "remark-parse-frontmatter";
import remarkMath from "remark-math";
import remarkRehype from "remark-rehype";
import rehypePrism from "rehype-prism-plus";
import rehypeKatex from "rehype-katex";
import rehypeStringify from "rehype-stringify";

export const render = (markdown: string): VFile => {
    return unified()
        .use(remarkParse)
        .use(remarkFrontmatter)
        .use(remarkParseFrontmatter)
        .use(remarkMath)
        .use(remarkRehype)
        .use(rehypePrism, {
            showLineNumbers: true,
        })
        .use(rehypeKatex)
        .use(rehypeStringify)
        .processSync(markdown);
};
