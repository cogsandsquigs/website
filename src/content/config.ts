// // 1. Import utilities from `astro:content`
// import { z, defineCollection } from 'astro:content';
// // 2. Define a schema for each collection you'd like to validate.
// const blogCollection = defineCollection({
//   schema: z.object({
//     title: z.string(),
//     tags: z.array(z.string()),
//     image: z.string().optional(),
//   }),
// });
// // 3. Export a single `collections` object to register your collection(s)
// export const collections = {
//   'blog': blogCollection,
// };

import { z, defineCollection } from "astro:content";

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

// Export all the defined collections.
export const collections = {
	pages: pageCollection,
	blog: blogCollection
};
