import { pages_from_import } from "$lib/pages";
import { json } from "@sveltejs/kit";
import type { RequestHandler } from "./$types";

// Make these prerenderable
export const prerender = true;

export const GET: RequestHandler = async () => {
	let pages = await pages_from_import();

	return json(
		pages
			// Get rid of content, as we don't query for that here.
			.map((page) => {
				return { ...page, content: undefined };
			})
			// Sort by date!
			.sort((a, b) => b.meta.date.valueOf() - a.meta.date.valueOf())
	);
};
