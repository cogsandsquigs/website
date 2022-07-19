import { compile } from "$lib/markdown";
import { read } from "to-vfile";
import type { VFile } from "vfile";

/** @type {import('./__types/[slug]').RequestHandler}*/
export const GET = async ({ params }) => {
    const { slug } = params;
    let post: any;

    post = await import(`../../../posts/${slug}.md?raw`);

    return {
        status: 200,
        body: await compile(post.default, slug),
    };
};
