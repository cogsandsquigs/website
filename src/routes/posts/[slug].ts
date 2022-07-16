import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

/** @type {import('./__types/[slug]').RequestHandler} */
export const GET = async ({ params }) => {
    const post = await prisma.post.findUnique({ where: { slug: params.slug } });

    // if the post doesn't exist, return 404
    if (post === null) {
        return {
            status: 404,
        };
    }

    return {
        status: 200,
        body: post,
    };
};
