import { posts_from_import } from "$lib/pages";
import { json } from "@sveltejs/kit";
import type { RequestHandler } from "./$types";

// Make these prerenderable
export const prerender = true;

export const GET: RequestHandler = async () => {
	let posts = await posts_from_import();

	return json(
		posts
			// Get rid of content, as we don't query for that here.
			.map((post) => {
				return { ...post, content: undefined };
			})
			// Sort by date!
			.sort((a, b) => b.meta.date.valueOf() - a.meta.date.valueOf())
	);
};
