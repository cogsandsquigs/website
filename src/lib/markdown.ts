import { unified } from "unified";
import type { VFile } from "vfile";
import remarkParse from "remark-parse";
import remarkFrontmatter from "remark-frontmatter";
import remarkParseFrontmatter from "remark-parse-frontmatter";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";

export const render = (markdown: string): VFile => {
    return unified()
        .use(remarkParse)
        .use(remarkFrontmatter)
        .use(remarkParseFrontmatter)
        .use(remarkRehype)
        .use(rehypeStringify)
        .processSync(markdown);
};
