import { compile } from "$lib/markdown";

/** @type {import('./__types/[slug]').RequestHandler}*/
export const GET = async ({ params }) => {
    const { slug } = params;
    let post: any;

    try {
        post = await import(`../../../posts/${slug}.md?raw`);
    } catch (e) {
        return {
            status: 404,
            body: {
                error: e,
            },
        };
    }

    return {
        status: 200,
        body: await compile(post.default, slug),
    };
};
