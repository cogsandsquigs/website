import { getPost } from "./_lib";

/** @type {import('./__types/[slug]').RequestHandler}*/
export const GET = async ({ params }) => {
    const { slug } = params;
    const post = await getPost(slug);

    if (!post) {
        return {
            status: 404,
            error: new Error(`Post with slug ${slug} not found`),
        };
    }
};
