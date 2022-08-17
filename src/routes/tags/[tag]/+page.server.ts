import { posts as ps } from "$lib/posts";

import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ params }) => {
    let posts = await ps().then((ps) =>
        ps.filter((p) => p.frontmatter.tags.includes(params.tag))
    );

    return {
        title: params.tag,
        posts: posts,
    };
};
