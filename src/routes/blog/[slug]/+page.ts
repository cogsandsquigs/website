import { error } from '@sveltejs/kit';
import { posts } from "$lib/posts";

/** @type {import('./$types').PageLoad} */
export const load = async ({ url, params }) => {
    let page = await posts().then((ps) =>
        ps.find((p) => p.slug === params.slug)
    );

    if (!page) {
        throw error(404, `Not found: ${url.pathname}`);
    }

    return {
        title: page.frontmatter.title,
        date: page.frontmatter.date,
        html: page.md,
    };
};
