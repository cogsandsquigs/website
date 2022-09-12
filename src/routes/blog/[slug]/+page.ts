import { error } from "@sveltejs/kit";
import { posts } from "$lib/posts";
import type { PageLoad } from "./$types";

export let csr = false;

export const load: PageLoad = async ({ url, params }) => {
    let page = await posts().then((ps) =>
        ps.find((p) => p.slug === params.slug)
    );

    if (!page) {
        throw error(404, `Not found: ${url.pathname}`);
    }

    csr = page.csr || false;

    return {
        title: page.title,
        date: page.date,
        description: page.description,
        tags: page.tags,
        render: page.render,
    };
};
