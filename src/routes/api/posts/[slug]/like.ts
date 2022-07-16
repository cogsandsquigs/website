import { db } from "$lib/blog/database";

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function POST({ params, request, locals }) {
    const slug = params.slug;
    const body = request.json();

    try {
        db.updatePostLikes(slug, locals.user.uuid, body.like);
    } catch (error) {
        return {
            status: 500,
            error,
        };
    }
}
