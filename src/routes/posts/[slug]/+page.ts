import { page_from_import, type Page, post_from_import } from "$lib/pages";

// Load the page component
export const load = async ({ params: { slug } }): Promise<Page> => {
	return await post_from_import(slug);
};
