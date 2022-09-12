import { error } from "@sveltejs/kit";
import { pages } from "$lib/pages";
import type { PageLoad } from "./$types";

export let csr = false;

export const load: PageLoad = async ({ url, params }) => {
    let page = await pages().then((ps) =>
        ps.find((p) => p.slug === params.slug)
    );

    if (!page) {
        throw error(404, `Not found: ${url.pathname}`);
    }

    csr = page.csr || false;

    return {
        render: page.render,
        title: page.title,
        description: page.description || "A page on Cogs and Squigs",
    };
};
