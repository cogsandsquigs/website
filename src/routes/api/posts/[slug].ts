import { db } from "$lib/blog/database";
import { posts } from "$lib/posts";

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function GET({ params }) {
    const slug = params.slug;

    let post = (await posts()).filter((p) => p.slug === slug)[0];

    if (!post || post === undefined) {
        return {
            status: 404,
            error: `Post not found: ${slug}`,
        };
    }

    let data: any;

    try {
        data = await db.getPost(slug);
    } catch (e) {
        return {
            status: 404,
            error: `Post not found: ${slug}`,
        };
    }

    return {
        status: 200,
        body: {
            ...data,
        },
    };
}

export async function POST({ params, request, locals }): Promise<any> {
    const slug = params.slug;
    // gets the post with the matching slug
    let post = (await posts()).filter((page) => page.metadata.slug === slug)[0];

    if (post === undefined) {
        // if there is none, then return an error
        return {
            status: 404,
            error: "Blog post not found! Try looking for another, would ya?",
        };
    }

    let uuid: string = locals.user.uuid;
    let body = request.json();

    await db.updatePostLikes(slug, uuid, body.liked);
    body.viewed
        ? await db.updatePostViews(slug, uuid)
        : await db.getPostViews(slug);

    if (body) {
        return {
            status: 200,
        };
    }

    return {
        status: 400,
        error: "Invalid request body",
    };
}
