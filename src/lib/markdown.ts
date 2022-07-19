import type { Post } from "$lib/types";
import type { Compatible } from "to-vfile";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkFrontmatter from "remark-frontmatter";
import remarkParseFrontmatter from "remark-parse-frontmatter";
import remarkTOC from "remark-toc";
import remarkGFM from "remark-gfm";
import remarkMath from "remark-math";
import remarkRehype from "remark-rehype";
import rehypePrism from "rehype-prism-plus";
import rehypeMathjax from "rehype-mathjax";
import rehypeStringify from "rehype-stringify";
import { timeZone } from "$lib/info";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc.js";
import tz from "dayjs/plugin/timezone.js";

dayjs.extend(utc);
dayjs.extend(tz);

/**
 * Compiles a post using unified, remark, and rehype.
 * Throws if frontmatter is incorrect, or for any other reason.
 * @param file The vfile to use
 * @param slug The slug of the file
 * @returns {Promise<Post>}
 */
export const compile = async (
    file: Compatible,
    slug: string
): Promise<Post> => {
    const parsed = await unified()
        .use(remarkParse)
        .use(remarkFrontmatter)
        .use(remarkParseFrontmatter, {
            properties: {
                title: { type: "string", required: true },
                description: { type: "string", required: true },
                date: { type: "string", required: true },
                tags: { type: "array", required: true },
            },
        })
        .use(remarkGFM)
        .use(remarkTOC)
        .use(remarkMath)
        .use(remarkRehype)
        .use(rehypePrism)
        .use(rehypeMathjax, {
            tex: {
                packages: ["base"],
                inlineMath: [
                    ["$", "$"],
                    ["\\(", "\\)"],
                ],
                displayMath: [
                    ["$$", "$$"],
                    ["\\[", "\\]"],
                ],
                processEscapes: true,
                tagIndent: "0em",
            },
        })
        .use(rehypeStringify)
        .process(file);

    const post = await parsed;
    const frontmatter = post.data.frontmatter as any;

    return {
        slug: slug,
        createdAt: dayjs.tz(frontmatter.date, timeZone).toDate(),
        title: frontmatter.title,
        description: frontmatter.description,
        content: post.value.toString(),
        tags: frontmatter.tags,
    };
};
