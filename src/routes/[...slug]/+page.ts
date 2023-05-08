import { page_from_import, type Page } from "$lib/pages";

// Load the page component
export const load = async ({ params: { slug } }): Promise<Page> => {
	// If it's blank (requesting the root of the site), use the index page.
	if (slug == "") {
		slug = "index";
	}

	return page_from_import(slug);
};
