import { db } from "$lib/database";
import { dateOptions } from "$lib/info";
import type { Post } from "$lib/types";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc.js";
import timezone from "dayjs/plugin/timezone.js";

dayjs.extend(utc);
dayjs.extend(timezone);

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function GET({ params, locals }) {
    const slug = params.slug;

    try {
        db.updatePostViews(slug, locals.user.uuid);
        return {
            status: 200,
            body: await getPost(slug),
        };
    } catch (error) {
        return {
            status: 500,
            error,
        };
    }
}

export async function getPost(slug: string): Promise<Post> {
    const paths = import.meta.glob("$posts/*.md");

    const metadata = (await paths[`/src/posts/${slug}.md`]())["metadata"];

    let post = await db.getPost(slug);

    return {
        ...metadata,
        ...post,
        date: dayjs.tz(metadata.date, dateOptions.timeZone).toDate(),
        recommendations: (
            await Promise.all(
                Object.entries(paths).map(async ([key, value]) => {
                    return {
                        ...(await value())["metadata"],
                        slug: key.slice(11, key.indexOf(".md")),
                    };
                })
            )
        )
            .map((p) => {
                return {
                    ...p,
                    date: dayjs.tz(p.date, dateOptions.timeZone).toDate(),
                };
            })
            .sort(scorePostSimilarity)
            .slice(0, 3)
            .sort(dateSort),
    };
}

function dateSort(a, b) {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
}

function scorePostSimilarity(post1, post2): number {
    let score = 0;

    for (const tag1 of post1.tags) {
        for (const tag2 of post2.tags) {
            if (tag1 === tag2) {
                score++;
            }
        }
    }

    return score;
}
