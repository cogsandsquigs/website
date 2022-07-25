import { getPost } from "$lib/notion";

/** @type {import('./__types/[slug]').RequestHandler}*/
export const GET = async ({ params }) => {
    let post = await getPost(params.slug);

    if (!post) {
        return {
            status: 404,
            error: `Not found: /blog/${params.slug}`,
        };
    }

    return {
        status: 200,
        body: post,
    };
};
