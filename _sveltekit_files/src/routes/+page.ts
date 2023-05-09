import { page_from_import, deserialize_from_json, type Page } from "$lib/pages";
import type { PageLoad } from "./$types";

// Load the page component
export const load: PageLoad = async ({ fetch }): Promise<{ page: Page; recent_posts: Page[] }> => {
	// Fetch all the posts.
	const response = await fetch(`/api/posts.json`);
	const recent_posts = await response
		.json()
		// Deserialize everything fully.
		.then((posts) => posts.map(deserialize_from_json))
		// Most recent 3 posts.
		.then((posts) => posts.slice(0, 3));

	return {
		// The page itself.
		page: await page_from_import("index"),

		// The 3 most recent posts.
		recent_posts
	};
};
