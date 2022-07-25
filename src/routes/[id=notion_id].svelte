<script lang="ts" context="module">
    import { Notion } from "$lib/notion";
    import { APIErrorCode } from "@notionhq/client";

    export const load = async ({ params }) => {
        let page: any;

        try {
            page = await Notion.pages.retrieve({ page_id: params.id });
        } catch (error) {
            if (error.code === APIErrorCode.ObjectNotFound) {
                return {
                    status: 404,
                    error: `Not found: /${params.id}`,
                };
            } else {
                return {
                    status: 500,
                    error: error,
                };
            }
        }

        if (
            Object.entries(page.properties).filter(([key]) => key === "slug")
                .length !== 0
        ) {
            return {
                status: 301,
                redirect: `/${
                    (
                        (await Notion.pages.properties.retrieve({
                            page_id: page.id,
                            property_id: "RAnF",
                        })) as any
                    ).results[0].rich_text.text.content
                }`,
            };
        } else {
            return {
                status: 301,
                redirect: `/notion/${page.id}`,
            };
        }
    };
</script>
