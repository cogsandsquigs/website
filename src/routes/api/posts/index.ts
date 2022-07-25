import { getAllPosts } from "$lib/notion";

/** @type {import('./__types/index).RequestHandler} */
export const GET = async ({}) => {
    return {
        status: 200,
        // gets all the posts that exist. If none exist, an empty array is returned.
        body: await getAllPosts(),
    };
};
