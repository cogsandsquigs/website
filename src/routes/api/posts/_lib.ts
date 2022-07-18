import type { Post } from "$lib/types";
import { read } from "to-vfile";
import glob from "glob";
import { compile } from "$lib/markdown";

/**
 * Gets all the posts that exist. If none exist, an empty array is returned.
 * @returns {Promise<Post[]>}
 */
export const getAllPosts = async (): Promise<Post[]> => {
    return await Promise.all(
        glob
            .sync("src/posts/*.md")
            .map(async (path) => await read(path, { encoding: "utf-8" }))
            .map(async (file) => compile(await file))
    );
};

/**
 * Get a post by slug. If the post does not exist, return null.
 * Throws if any error occurs during parsing.
 * @param slug The slug of the post to get.
 * @returns {Promise<Post | null>}
 */
export const getPost = async (slug: string): Promise<Post | null> => {
    let file;

    try {
        file = await read(`src/posts/${slug}.md`);
    } catch (e) {
        return null;
    }

    return compile(file);
};
