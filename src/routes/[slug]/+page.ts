import { page_from_import, type Page } from "$lib/pages";

// Load the page component
export const load = async ({ params: { slug } }): Promise<Page> => {
	return await page_from_import(slug);
};
