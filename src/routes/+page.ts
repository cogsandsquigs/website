import { page_from_import, deserialize_from_json, type Page } from "$lib/pages";

// Load the page component
export const load = async ({ fetch }): Promise<{ page: Page; recent_posts: Page[] }> => {
	// Fetch all the posts.
	const response = await fetch(`/api/posts.json`);
	const posts = await response.json();

	return {
		// The page itself.
		page: await page_from_import("index"),

		// The 3 most recent posts.
		recent_posts: posts
			// Deserialize everything fully.
			.map(deserialize_from_json)
			// Most recent 3 posts.
			.slice(0, 3)
	};
};
