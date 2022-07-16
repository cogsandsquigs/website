import { db } from "$lib/database";
import type { Post } from "$lib/types";
import { getPost } from "./[slug]";

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function GET({}) {
    let posts: Post[] = [];

    for (let path in import.meta.glob("$posts/*.md")) {
        try {
            posts.push(await getPost(path.slice(11, path.indexOf(".md"))));
        } catch (error) {
            try {
                db.newPost(path.slice(11, path.indexOf(".md")));
                posts.push(await getPost(path.slice(11, path.indexOf(".md"))));
            } catch (error) {
                return {
                    status: 500,
                    error,
                };
            }
        }
    }

    return {
        status: 200,
        body: posts,
    };
}
