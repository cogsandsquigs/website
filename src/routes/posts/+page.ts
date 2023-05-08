import { deserialize_from_json, type Page } from "$lib/pages";

import type { PageLoad } from "./$types";

// Load the posts!
export const load: PageLoad = async ({ fetch }): Promise<{ posts: Page[] }> => {
	// Fetch all the posts.
	const response = await fetch(`/api/posts.json`);
	const posts = await response
		.json()
		// Deserialize everything fully.
		.then((posts) => posts.map(deserialize_from_json));

	return { posts };
};
