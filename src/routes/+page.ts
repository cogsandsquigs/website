import { page_from_import, posts_from_import, type Page } from "$lib/pages";

// Load the page component
export const load = async (): Promise<{ page: Page; recent_posts: Page[] }> => {
	return {
		// The page itself.
		page: await page_from_import("index"),

		// The 3 most recent posts.
		recent_posts: (await posts_from_import()).slice(0, 3)
	};
};
