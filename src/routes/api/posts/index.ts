import { compile } from "$lib/markdown";
import { read } from "to-vfile";
import glob from "glob";

/** @type {import('./__types/index).RequestHandler} */
export const GET = async ({}) => {
    return {
        status: 200,
        // gets all the posts that exist. If none exist, an empty array is returned.
        body: await Promise.all(
            glob
                .sync("src/posts/*.md")
                .map(async (path) => await read(path, { encoding: "utf-8" }))
                .map(async (file) => compile(await file))
        )
            // sort by date
            .then((posts) =>
                posts.sort((a, b) => b.createdAt.unix() - a.createdAt.unix())
            ),
    };
};
