import { deserialize_from_json, type Page } from "$lib/pages";
import type { PageLoad } from "./$types";

// Load all the tags!
export const load: PageLoad = async ({ fetch }): Promise<{ tags: string[] }> => {
	// Fetch all the posts.
	const response = await fetch(`/api/posts.json`);
	const tags = await response
		.json()
		// Deserialize everything fully.
		.then((posts) => posts.map(deserialize_from_json))
		// Only get the tags.
		.then((posts) => posts.map((post: Page) => post.tags))
		// Flatten the tags.
		.then((tags) => tags.flat());

	return { tags };
};
