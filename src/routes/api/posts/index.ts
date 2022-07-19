import { compile } from "$lib/markdown";

/** @type {import('./__types/index).RequestHandler} */
export const GET = async ({}) => {
    return {
        status: 200,
        // gets all the posts that exist. If none exist, an empty array is returned.
        body: await Promise.all(
            Object.entries(
                import.meta.glob("../../../posts/*.md", { as: "raw" })
            )
                .map(async ([path, file]) => {
                    let split = path.split("/");
                    return [split[split.length - 1].slice(0, -3), await file()];
                })
                .map(async (pair) => {
                    let [slug, file] = await pair;
                    return await compile(file, slug);
                })
        ),
    };
};
