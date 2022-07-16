import { db } from "$lib/blog/database";

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function POST({ params, request, locals }) {
    const slug = params.slug;
    const body = await request.json();

    if (body.liked === undefined) {
        return {
            status: 400,
            body: {
                error: "Missing like parameter",
            },
        };
    }

    try {
        return {
            status: 200,
            body: {
                likes: await db.updatePostLikes(
                    slug,
                    locals.user.uuid,
                    body.liked
                ),
            },
        };
    } catch (error) {
        return {
            status: 500,
            error,
        };
    }
}
