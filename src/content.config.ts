import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blog = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./content/blog" }),
    // type: "content",
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

const projects = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./content/projects" }),
    // Type-check frontmatter using a schema
    schema: z.object({
        draft: z.boolean(),
        title: z.string(),
        description: z.string(),
        date: z.coerce.date(),
        taxonomies: z.object({
            tags: z.array(z.string()),
            series: z.coerce.string().optional(),
        }),
        extra: z.object({
            git: z.coerce.string().optional(),
        }),
    }),
});

const pages = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./content/pages" }),
    // Type-check frontmatter using a schema
    schema: z.object({
        draft: z.boolean().default(false),
        title: z.string(),
        description: z.string(),
    }),
});

export const collections = { blog, pages, projects };
