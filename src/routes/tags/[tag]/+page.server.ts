import { posts } from "$lib/posts";

import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ params }) => {
    let posts = await posts().then((posts) =>
        posts.filter((p) => p.frontmatter.tags.includes(params.tag))
    );

    return {
        title: params.tag,
        posts: posts,
    };
};
