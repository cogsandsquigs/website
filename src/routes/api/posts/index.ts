import type { Post } from "$lib/types";
import { getPost } from "./[slug]";

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function GET({}) {
    let posts: Post[] = [];

    for (let path in import.meta.glob("$posts/*.md")) {
        posts.push(await getPost(path.slice(11, path.indexOf(".md"))));
    }

    return {
        status: 200,
        body: posts,
    };
}
