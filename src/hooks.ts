import { validate, v4 as uuidv4 } from "uuid";
import { parse, serialize } from "cookie";

export async function handle({ event, resolve }) {
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
    return {
        user: event.locals.user,
    };
}
