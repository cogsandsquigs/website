import { Notion } from "$lib/notion";

/** @type {import('./__types/slugs').RequestHandler}*/
export const GET = async () => {
    let slugs = await Promise.all(
        (
            await Notion.databases.query({
                database_id: "f03b1f24dc6641c49838f77ffee53390",
                sorts: [
                    {
                        timestamp: "created_time",
                        direction: "descending",
                    },
                ],
            })
        ).results
            .map(({ id }) => id)
            .map(
                async (id) =>
                    await Notion.pages.properties
                        .retrieve({
                            page_id: id,
                            property_id: "E%5Dlu",
                        })
                        .then((property) => (property as any).formula.string)
            )
    );

    return {
        status: 200,
        body: slugs,
    };
};
