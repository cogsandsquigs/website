import { all } from "$lib/all";
import type { PageLoad } from "./$types";

export const load: PageLoad = async ({ params }) => {
    let filteredPosts = await all().then((pages) =>
        pages.filter((page) => page.tags?.includes(params.tag)) || false
    );
    return {
        title: params.tag,
        posts: filteredPosts,
    };
};
