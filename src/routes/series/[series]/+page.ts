import { deserialize_from_json, type Page } from "$lib/pages";
import type { PageLoad } from "./$types";

// Load the pages with the series!
export const load: PageLoad = async ({
	fetch,
	params: { series }
}): Promise<{ series: string; posts: Page[] }> => {
	// Fetch all the posts.
	const response = await fetch(`/api/posts.json`);
	const posts = await response
		.json()
		// Deserialize everything fully.
		.then((posts) => posts.map(deserialize_from_json))
		// Only get posts with the tag
		.then((posts) => posts.filter((post: Page) => (post.series = series)));

	return { series, posts };
};
