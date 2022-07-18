import type { Post } from "$lib/types";
import { read } from "to-vfile"
import { readFile } from "fs/promises";
import glob from "glob";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkFrontmatter from "remark-frontmatter";
import remarkParseFrontmatter from "remark-parse-frontmatter";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";
/**
 * Gets all the posts that exist. If none exist, an empty array is returned.
 * @returns {Promise<Post[]>}
 */
export const getAllPosts = async (): Promise<Post[]> => {
    return await Promise.all(glob.sync("src/posts/*.md")
        .map(async (path) => await read(path, { encoding: "utf-8" }))
        .map(async (file) => compilePost(await file)));
}

/**
 * Get a post by slug. If the post does not exist, return null.
 * Throws if any error occurs during parsing.
 * @param slug The slug of the post to get.
 * @returns {Promise<Post | null>}
 */
export const getPost = async (slug: string): Promise<Post | null> => {
    let file;

    try {
        file = await read(`src/posts/${slug}.md`)
    } catch (e) {
        return null
    }

    return compilePost(file)
};

/**
 * Compiles a post using unified, remark, and rehype.
 * Throws if frontmatter is incorrect, or for any other reason.
 * @param file The vfile to use
 * @returns {Promise<Post>}
 */
export const compilePost = async (file): Promise<Post> => {
    const parsed = await unified()
        .use(remarkParse)
        .use(remarkFrontmatter)
        .use(remarkParseFrontmatter, {
            properties: {
                title: { type: "string", required: true },
                description: { type: "string", required: true },
                date: { type: "string", required: true },
                tags: { type: "array", required: true },
            }
        })
        .use(remarkRehype)
        .use(rehypeStringify)
        .process(await file)

    const post = await parsed
    const frontmatter = (post.data.frontmatter as any)

    return {
        slug: post.path.slice(10, -3),
        createdAt: new Date(frontmatter.date),
        title: frontmatter.title,
        description: frontmatter.description,
        content: post.value.toString(),
        tags: frontmatter.tags
    }
}
