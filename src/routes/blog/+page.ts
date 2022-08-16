import { posts } from "$lib/posts";

export const load = async () => {
    return {
        posts: await posts()
    };
};
