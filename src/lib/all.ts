import { posts } from "$lib/posts";
import { projects } from "$lib/projects";
import type { Page } from "$lib/types";

/**
 * Get all the stuff (projects, posts, etc) and return them.
 */
export const all = async (): Promise<Page[]> => {
    return await posts()
        .then(async (posts) => {
            posts.push(...(await projects()));
            return posts;
        })
        .then((items) =>
            items.sort((a, b) => {
                return (
                    new Date(b.frontmatter.date).valueOf() -
                    new Date(a.frontmatter.date).valueOf()
                );
            })
        );
};
