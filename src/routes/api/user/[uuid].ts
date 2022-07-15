import { db } from "$lib/blog/database";
import type { User } from "@prisma/client";
import { validate, v4 as uuidv4 } from "uuid";

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function GET({ params }) {
    const uuid = params.uuid;

    if (!validate(uuid)) {
        return {
            status: 400,
            error: "Invalid UUID",
        };
    }

    let user: User;
    try {
        user = await db.getUser(uuid);
    } catch (e) {
        return {
            status: 404,
            error: "User not found",
        };
    }

    return {
        status: 200,
        body: await db.getUser(uuid),
    };
}
