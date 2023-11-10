import { getCollection, type CollectionEntry } from "astro:content";

/**
 * Gets all the blog posts, ordered by date.
 * @returns the blog posts, ordered from most to least recent.
 */
export const getBlogPosts = async (): Promise<CollectionEntry<"blog">[]> => {
	return await getCollection("blog")
		.then((posts) => posts.filter((post) => !post.data.draft))
		.then((posts) => posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf()));
};

/**
 * Gets all the project posts, ordered by date.
 * @returns the project posts, ordered from most to least recent.
 */
export const getProjects = async (): Promise<CollectionEntry<"projects">[]> => {
	return await getCollection("projects")
		.then((projects) => projects.filter((project) => !project.data.draft))
		.then((posts) => posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf()));
};
