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

        // This is the path to the folder where static assets are held, so that Tina knows to put the admin files there.
        publicFolder: "public",
    },

    media: {
        tina: {
            // Different from the other `publicFolder`, as this is the path to the assets folder where
            // images/other media are held.
            publicFolder: "src/assets",
            mediaRoot: "",
        },
    },

    schema: {
        collections: [
            {
                name: "blog",
                label: "Blog",
                path: "content/blog",
                match: {
                    include: "**/*",
                    exclude: "_index.md",
                },
                format: "md",
                fields: [
                    {
                        type: "boolean",
                        name: "draft",
                        label: "Draft",
                        required: true,
                    },
                    {
                        type: "string",
                        name: "title",
                        label: "Title",
                        isTitle: true,
                        required: true,
                    },
                    {
                        type: "string",
                        name: "description",
                        label: "Description",
                        required: true,
                    },
                    {
                        type: "datetime",
                        name: "date",
                        label: "Date Posted",
                        required: true,
                    },
                    {
                        type: "object",
                        name: "taxonomies",
                        label: "Taxonomies",
                        fields: [
                            {
                                type: "string",
                                list: true,
                                name: "tags",
                                label: "Tags",
                                required: true,
                            },
                            {
                                type: "string",
                                name: "series",
                                label: "Series",
                                required: false,
                            },
                        ],
                    },
                    {
                        type: "rich-text",
                        name: "body",
                        label: "Body",
                        isBody: true,
                    },
                ],
            },
            {
                name: "projects",
                label: "Projects",
                path: "content/projects",
                match: {
                    include: "**/*",
                    exclude: "_index.md",
                },
                format: "md",
                fields: [
                    {
                        type: "boolean",
                        name: "draft",
                        label: "Draft",
                        required: true,
                    },
                    {
                        type: "string",
                        name: "title",
                        label: "Title",
                        isTitle: true,
                        required: true,
                    },
                    {
                        type: "string",
                        name: "description",
                        label: "Description",
                        required: true,
                    },
                    {
                        type: "datetime",
                        name: "date",
                        label: "Date Created",
                        required: true,
                    },
                    {
                        type: "object",
                        name: "extra",
                        label: "Extra",
                        fields: [
                            {
                                type: "string",
                                list: true,
                                name: "git",
                                label: "Repository Link",
                                required: true,
                            },
                        ],
                    },
                    {
                        type: "object",
                        name: "taxonomies",
                        label: "Taxonomies",
                        fields: [
                            {
                                type: "string",
                                list: true,
                                name: "tags",
                                label: "Tags",
                                required: true,
                            },
                        ],
                    },
                    {
                        type: "rich-text",
                        name: "body",
                        label: "Body",
                        isBody: true,
                    },
                ],
            },
            {
                name: "pages",
                label: "Pages",
                path: "content/pages",
                match: {
                    include: "*",
                },
                format: "md",
                fields: [
                    {
                        type: "string",
                        name: "title",
                        label: "Title",
                        required: false,
                    },
                    {
                        type: "rich-text",
                        name: "body",
                        label: "Body",
                        isBody: true,
                    },
                ],
            },
        ],
    },
});
