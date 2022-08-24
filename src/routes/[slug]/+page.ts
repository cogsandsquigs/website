import { error } from "@sveltejs/kit";
import { pages } from "$lib/pages";
import type { PageLoad } from "./$types";

export const prerender = true;

export const load: PageLoad = async ({ url, params }) => {
    let page = await pages().then((ps) =>
        ps.find((p) => p.slug === params.slug)
    );

    if (!page) {
        throw error(404, `Not found: ${url.pathname}`);
    }

    return {
        render: page.render,
        title: page.frontmatter.title,
        description:
            page.frontmatter.description || "A page on Cogs and Squigs",
    };
};
