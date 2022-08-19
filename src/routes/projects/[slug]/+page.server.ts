import { error } from "@sveltejs/kit";
import { projects } from "$lib/projects";

import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ url, params }) => {
    let page = await projects().then((ps) =>
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
        github_link: `https://github.com/cogsandsquigs/${page.frontmatter.title}`,
        html: page.md,
    };
};
