import type { Post } from "$lib/types";
/**
 * Gets all the posts that exist. If none exist, an empty array is returned.
 * @returns {Promise<Post[]>}
 */
export const getAllPosts = async (): Promise<Post[]> => {
    const posts = import.meta.glob("$posts/*.md");

    console.log(posts);

    return [];
};

/**
 * Get a post by slug. If the post does not exist, return null.
 * @param slug The slug of the post to get.
 * @returns {Promise<Post | null>}
 */
export const getPost = async (slug: string): Promise<Post | null> => {
    return null;
};
