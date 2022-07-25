<script lang="ts" context="module">
    import { Notion } from "$lib/notion";
    import { APIErrorCode } from "@notionhq/client";

    export const load = async ({ params }) => {
        let page: any;

        console.log("heyo!");

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
    };
</script>
