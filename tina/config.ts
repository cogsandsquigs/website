import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD ?? process.env.VERCEL_GIT_COMMIT_REF ?? "main";
const clientId = process.env.TINA_CLIENT_ID ?? null;
const token = process.env.TINA_AUTH_TOKEN ?? null;

export default defineConfig({
	branch,
	clientId, // Get this from tina.io
	token, // Get this from tina.io

	build: {
		// This is the page that Tina will render for editing. This page will be at `<url>/admin`,
		// so that's where to go for edits :3.
		outputFolder: "admin",

		// This is the path to the public folder, so that Tina knows to put the admin files there.
		publicFolder: "public"
	},

	media: {
		tina: {
			// Different from the other `publicFolder`, as this is the path to the assets folder in
			// Astro, not the public folder in the Tina build.
			publicFolder: "src/assets",
			mediaRoot: ""
		}
	},

	schema: {
		collections: [
			// TODO: get it to match MDX?
			{
				name: "blog",
				label: "Blog",
				path: "src/content/blog",
				match: {
					include: "**/*"
				},
				format: "md",
				fields: [
					{
						type: "string",
						name: "title",
						label: "Title",
						isTitle: true,
						required: true
					},
					{
						type: "datetime",
						name: "date",
						label: "Date Posted",
						required: true
					},
					{
						type: "string",
						list: true,
						name: "tags",
						label: "Tags",
						required: true
					},
					{
						type: "string",
						name: "series",
						label: "Series",
						required: false
					},
					{
						type: "rich-text",
						name: "body",
						label: "Body",
						isBody: true
					}
				]
			},
			{
				name: "pages",
				label: "Pages",
				path: "src/content/pages",
				match: {
					include: "**/*"
				},
				format: "md",
				fields: [
					{
						type: "string",
						name: "title",
						label: "Title",
						required: false
					},
					{
						type: "rich-text",
						name: "body",
						label: "Body",
						isBody: true
					}
				]
			}
		]
	}
});
