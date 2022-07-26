import { Notion } from "$lib/notion";

/** @type {import('./__types/ids').RequestHandler}*/
export const GET = async () => {
    let ids = (
        await Notion.databases.query({
            database_id: "f03b1f24dc6641c49838f77ffee53390",
            sorts: [
                {
                    timestamp: "created_time",
                    direction: "descending",
                },
            ],
        })
    ).results.map(({ id }) => id);

    return {
        status: 200,
        body: ids,
    };
};
