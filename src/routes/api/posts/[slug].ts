import { db } from "$lib/blog/database";
import { dateOptions } from "$lib/info";
import dayjs from "dayjs";

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function GET({ params }) {
    const slug = params.slug;
    const paths = import.meta.glob("$posts/*.md");

    if (!(await slugs()).includes(slug)) {
        return {
            status: 404,
            error: `Post not found: ${slug}`,
        };
    }

    const metadata = (await paths[`/src/posts/${slug}.md`]())["metadata"];

    let post;

    try {
        post = await db.getPost(slug);
    } catch (e) {
        return {
            status: 404,
            error: `Post not found: ${slug}`,
        };
    }

    return {
        status: 200,
        body: {
            ...metadata,
            ...post,
            date: dayjs.tz(metadata.date, dateOptions.timeZone).toDate(),
        },
    };
}

export async function POST({ params, request, locals }): Promise<any> {
    const slug = params.slug;

    if (!(await slugs()).includes(slug)) {
        return {
            status: 404,
            error: `Post not found: ${slug}`,
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

async function slugs() {
    const paths = import.meta.glob("$posts/*.md");
    let slugs: string[] = [];

    for (let path in paths) {
        slugs.push(path.slice(11, path.indexOf(".md")));
    }

    return slugs;
}
