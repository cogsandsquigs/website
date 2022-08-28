import { error } from "@sveltejs/kit";
import { projects } from "$lib/projects";
import type { PageLoad } from "./$types";

export const prerender = true;
export let hydrate = true;

export const load: PageLoad = async ({ url, params }) => {
    let page = await projects().then((ps) =>
        ps.find((p) => p.slug === params.slug)
    );

    if (!page) {
        throw error(404, `Not found: ${url.pathname}`);
    }

    hydrate = page.hydrate || false;

    return {
        title: page.title,
        date: page.date,
        description: page.description,
        tags: page.tags,
        repo_link: page.repo_link,
        render: page.render,
    };
};
