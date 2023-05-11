import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";
const clientId = process.env.TINA_CLIENT_ID ?? null;
const token = process.env.TINA_AUTH_TOKEN ?? null;

export default defineConfig({
	branch,
	clientId, // Get this from tina.io
	token, // Get this from tina.io

	build: {
		outputFolder: "admin",
		publicFolder: "public"
	},

	media: {
		tina: {
			mediaRoot: "",
			publicFolder: "public"
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
