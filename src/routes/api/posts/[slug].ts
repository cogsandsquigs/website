import { compile } from "$lib/markdown";
import { read } from "to-vfile";
import type { VFile } from "vfile";

/** @type {import('./__types/[slug]').RequestHandler}*/
export const GET = async ({ params }) => {
    const { slug } = params;
    let post: VFile;

    try {
        post = await read(`src/posts/${slug}.md`);
    } catch (e) {
        return {
            status: 404,
            error: new Error(`Post with slug ${slug} does not exist`),
        };
    }

    return {
        status: 200,
        body: await compile(post),
    };
};
