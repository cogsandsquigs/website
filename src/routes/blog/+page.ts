import { posts as ps } from "$lib/posts";

export const load = async () => {
    return {
    posts: await ps(),
};
};
