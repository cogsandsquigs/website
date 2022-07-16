import { validate, v4 as uuidv4 } from "uuid";
import { parse, serialize, type CookieSerializeOptions } from "cookie";
import { db } from "$lib/database";
import User from "@rgossiaux/svelte-heroicons/solid/User";

export async function handle({ event, resolve }) {
    // if post is not valid, return 404
    if (
        event.params.slug !== undefined &&
        !(await slugs()).includes(event.params.slug)
    ) {
        return new Response(`Post not found: ${event.params.slug}`, {
            status: 404,
        });
    }

    // if user UUID is not valid, return 404
    if (event.params.uuid !== undefined && !validate(event.params.uuid)) {
        try {
            await db.getUser(event.params.uuid);
        } catch (e) {
            return new Response(`User not found: ${event.params.uuid}`, {
                status: 404,
            });
        }
    }

    // set uuid if user does not have one
    let cookie = parse(event.headers.cookie || "");
    let uuid = validate(cookie.uuid) ? cookie.uuid : (await db.newUser()).uuid;
    event.locals.user.uuid = uuid;

    // set cookie
    let cookieOptions: CookieSerializeOptions = {
        maxAge: 1000 * 60 * 60 * 24 * 365,
        httpOnly: true,
        sameSite: "strict",
        secure: process.env.NODE_ENV === "production",
    };
    let cookieHeader = serialize("uuid", uuid, cookieOptions);

    // return response
    return new Response(resolve(), {
        headers: {
            "set-cookie": cookieHeader,
        },
    });
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
