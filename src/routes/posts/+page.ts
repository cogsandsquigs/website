import { deserialize_from_json, type Page } from "$lib/pages";

// Load the page component
export const load = async ({ fetch }): Promise<{ posts: Page[] }> => {
	// Fetch all the posts.
	const response = await fetch(`/api/posts.json`);
	const posts = await response.json();

	return {
		posts: posts
			// Deserialize everything fully.
			.map(deserialize_from_json)
	};
};
