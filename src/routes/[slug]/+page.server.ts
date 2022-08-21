import { error } from "@sveltejs/kit";
import { pages } from "$lib/pages";

import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ url, params }) => {
    let page = await pages().then((ps) =>
        ps.find((p) => p.slug === params.slug)
    );

    if (!page) {
        throw error(404, `Not found: ${url.pathname}`);
    }

    return {
        title: page.frontmatter.title,
        description:
            page.frontmatter.description || "A page on Cogs and Squigs",
        html: page.md,
    };
};
