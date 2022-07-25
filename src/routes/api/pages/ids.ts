import { Notion } from "$lib/notion";

/** @type {import('./__types/pages').RequestHandler}*/
export const GET = async () => {
    let ids = (
        await Notion.databases.query({
            database_id: "ea38bd5a70c64151897767a0a3f759a0",
            sorts: [
                {
                    timestamp: "created_time",
                    direction: "descending",
                }
            ]
        })
    ).results.map(({ id }) => id);

    console.log(ids);

    return {
        status: 200,
        body: ids,
    }
}