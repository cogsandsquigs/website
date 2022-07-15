import { dateOptions } from "$lib/info";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc.js";
import timezone from "dayjs/plugin/timezone.js";

dayjs.extend(utc);
dayjs.extend(timezone);

function dateSort(a, b) {
    return (
        new Date(b.metadata.date).getTime() -
        new Date(a.metadata.date).getTime()
    );
}

function scorePostSimilarity(post1, post2) {
    let score = 0;

    for (const tag1 of post1.metadata.tags) {
        for (const tag2 of post2.metadata.tags) {
            if (tag1 === tag2) {
                score++;
            }
        }
    }

    return score;
}

export async function posts() {
    // grab all of the post files
    const files = import.meta.glob("$posts/*.md");

    // holds all the posts
    let posts = [];

    // puts all the posts in the pages array
    for (let file in files) {
        let p: any = await files[file]();
        posts.push({
            ...{
                ...p.metadata,
                slug: file.slice(11, file.indexOf(".md")),
                date: dayjs.tz(p.metadata.date, dateOptions.timeZone).toDate(),
            },
            // This is soon to be deprecated, but it's here for backwards compatibility
            metadata: {
                ...p.metadata,
                slug: file.slice(11, file.indexOf(".md")),
                date: dayjs.tz(p.metadata.date, dateOptions.timeZone).toDate(),
            },
            renderer: p.default,
        });
    }

    // Newest first
    posts.sort(dateSort);

    // Adds the 3 most recommended posts (without their own recommendations) to the post metadata
    for (let i = 0; i < posts.length; i++) {
        let post = posts[i];
        let others = posts.slice(0, i).concat(posts.slice(i + 1));
        post.recommendations = others
            .sort((a, b) => {
                return (
                    scorePostSimilarity(post, b) - scorePostSimilarity(post, a)
                );
            })
            .slice(0, 3)
            .map((p) => {
                return {
                    metadata: {
                        ...p.metadata,
                        recommendations: [],
                    },
                };
            })
            .sort(dateSort);

        posts[i] = post;

        post.metadata.recommendations = post.recommendations;
    }

    return posts;
}
