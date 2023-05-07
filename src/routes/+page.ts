import { fetch_page } from "$lib/pages/page";
import type { PageLoad } from "./$types";

export const load: PageLoad = async ({ params, url }) => {
	let index_page = await fetch_page("index");

	return { page: index_page };
};
