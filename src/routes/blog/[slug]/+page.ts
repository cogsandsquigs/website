import { error } from "@sveltejs/kit";
import { posts } from "$lib/posts";
import type { PageLoad } from "./$types";

export const prerender = true;

export const load: PageLoad = async ({ url, params }) => {
    let page = await posts().then((ps) =>
        ps.find((p) => p.slug === params.slug)
    );

    if (!page) {
        throw error(404, `Not found: ${url.pathname}`);
    }

    return {
        title: page.frontmatter.title,
        date: page.frontmatter.date,
        description: page.frontmatter.description,
        tags: page.frontmatter.tags,
        render: page.render,
    };
};
