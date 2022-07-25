import { Client } from "@notionhq/client"

export const Notion = new Client({
    auth: import.meta.env.VITE_NOTION_TOKEN,
})