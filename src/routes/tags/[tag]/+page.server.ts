import { posts } from "$lib/posts";

import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ params }) => {
    let filteredPosts = await posts().then((posts) =>
        posts.filter((post) => post.frontmatter.tags.includes(params.tag))
    );

    return {
        title: params.tag,
        posts: filteredPosts,
    };
};
