import { CollectionEntry, getCollection } from "astro:content";

/**
 * Gets all the blog posts, ordered by date.
 * @returns the blog posts, ordered from most to least recent.
 */
export const getBlogPosts = async (): Promise<CollectionEntry<"blog">[]> => {
	return await getCollection("blog").then((posts) =>
		posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf())
	);
};
