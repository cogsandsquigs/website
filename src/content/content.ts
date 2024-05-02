// 1. Import utilities from `astro:content`
import { defineCollection, z } from "astro:content";

// 2. Define your collection(s)
const pageCollection = defineCollection({
	type: "content", // v2.5.0 and later
	schema: z.object({
		title: z.optional(z.string()),
	}),
});

const blogCollection = defineCollection({
	type: "content", // v2.5.0 and later
	schema: z.object({
		draft: z.boolean(),
		title: z.string(),
		description: z.string(),
		date: z.date(),
		taxonomies: z.object({
			tags: z.string().array(),
			series: z.optional(z.string()),
		}),
	}),
});

const projectCollection = defineCollection({
	type: "content", // v2.5.0 and later
	schema: z.object({
		draft: z.boolean(),
		title: z.string(),
		description: z.string(),
		date: z.date(),
		extra: z.object({
			git: z.string(),
		}),
		taxonomies: z.object({
			tags: z.string().array(),
		}),
	}),
});

// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
	pages: pageCollection,
	blog: blogCollection,
	projects: projectCollection,
};
