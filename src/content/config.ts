import { defineCollection, z } from "astro:content";

// Define the pages schema for main pages.
const pageCollection = defineCollection({
	schema: z.object({
		// The title of the page in question.
		title: z.optional(z.string())
	})
});

// Define the blog schema for posts.
const blogCollection = defineCollection({
	schema: z.object({
		// Whether or not the file is a draft.
		draft: z.boolean(),

		// The title of the page in question.
		title: z.string(),

		// A (short) description of the page.
		description: z.string(),

		// The date the post was made.
		date: z.coerce.date(),

		// Tags for the post.
		tags: z.array(z.string()),

		// An optional series that the post may belong to.
		series: z.optional(z.string())
	})
});

// Define the blog schema for posts.
const projectCollection = defineCollection({
	schema: z.object({
		// Whether or not the file is a draft.
		draft: z.boolean(),

		// The title of the page in question.
		title: z.string(),

		// A (short) description of the page.
		description: z.string(),

		// A link to the github page.
		github: z.string()
	})
});

// Export all the defined collections.
export const collections = {
	pages: pageCollection,
	blog: blogCollection,
	projects: projectCollection
};
