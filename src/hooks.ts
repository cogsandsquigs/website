import { validate, v4 as uuidv4 } from "uuid";
import { parse, serialize } from "cookie";
import { db } from "$lib/blog/database";

export async function handle({ event, resolve }) {
    if (
        event.url.pathname.startsWith("/api/posts/") &&
        event.url.pathname.split("/").length === 3
    ) {
        const slug = event.url.pathname.slice(11);
        if (!(await slugs()).includes(slug)) {
            return new Response(`Post not found: ${slug}`, {
                status: 404,
            });
        }
    }

    const cookies = parse(event.request.headers.get("cookie") || "");

    try {
        event.locals.user = JSON.parse(cookies.user) || null;
    } catch (e) {
        event.locals.user = null;
    }

    if (
        event.locals.user === null ||
        event.locals.user === undefined ||
        !validate(event.locals.user.uuid)
    ) {
        event.locals.user = {
            uuid: uuidv4(),
        };

        db.newUser(event.locals.user.uuid);
    }

    const response = await resolve(event);

    response.headers.set(
        "set-cookie",
        serialize("user", JSON.stringify(event.locals.user), {
            path: "/",
            httpOnly: true,
            expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 365),
        })
    );

    return response;
}

/** @type {import('@sveltejs/kit').GetSession} */
export async function getSession(event) {
    return event.locals.user;
}

async function slugs() {
    const paths = import.meta.glob("$posts/*.md");
    let slugs: string[] = [];

    for (let path in paths) {
        slugs.push(path.slice(11, path.indexOf(".md")));
    }

    return slugs;
}
