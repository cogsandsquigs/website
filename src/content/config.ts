import { defineCollection, z } from "astro:content";

const blog = defineCollection({
    type: "content",
    // Type-check frontmatter using a schema
    schema: z.object({
        draft: z.boolean(),
        title: z.string(),
        description: z.string(),
        // Transform string to Date object
        date: z.coerce.date(),
        updated: z.coerce.date().optional(),
        taxonomies: z.object({
            tags: z.array(z.string()),
            series: z.coerce.string().optional(),
        }),
    }),
});

const pages = defineCollection({
    type: "content",
    // Type-check frontmatter using a schema
    schema: z.object({
        draft: z.boolean().default(false),
        title: z.string(),
        description: z.string(),
    }),
});

export const collections = { blog, pages };
