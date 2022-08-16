import { posts as ps } from "$lib/posts";

/** @type {import('./$types').PageLoad} */
export const load = async ({ params }) => {
    let posts = await ps().then((ps) =>
        ps.filter((p) => p.frontmatter.tags.includes(params.tag))
    );

    return {
        title: params.tag,
        posts: posts,
    };
};
