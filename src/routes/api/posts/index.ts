import { getAllPosts } from "./_lib";

/** @type {import('./__types/index).RequestHandler} */
export const GET = async ({}) => {
    const posts = await getAllPosts();

    return {
        status: 200,
        body: posts,
    };
};
