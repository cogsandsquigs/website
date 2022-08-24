import { all } from "$lib/all";
import type { PageLoad } from "./$types";

export const prerender = true;

export const load: PageLoad = async ({ params }) => {
    let filteredPosts = await all().then((pages) => {
        return pages.filter((page) => {
            console.log(
                page.frontmatter.title,
                page.frontmatter.tags.includes(params.tag)
            );
            return page.frontmatter.tags.includes(params.tag);
        });
    });

    return {
        title: params.tag,
        posts: filteredPosts,
    };
};
