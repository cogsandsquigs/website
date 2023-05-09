import { error } from "@sveltejs/kit";
import dayjs, { type Dayjs } from "dayjs";

export type Page = {
	/**
	 * The path to the page.
	 */
	path: string;

	/**
	 * The content of the page, as a renderable Svelte component. Note that
	 * there may be no content, like if we are fetching the post from an API
	 * endpoint.
	 */
	content: string;

	/**
	 * Metadata about the page.
	 */
	meta: {
		// The title of the page.
		title: string;

		// The description of the page.
		description: string;

		// The date it was published.
		date: Dayjs;

		// The tags associated with the page.
		tags: string[];

		// The series associated with the page.
		series: string;
	};
};

// Helper function to fully deserialize a page from JSON.
export const deserialize_from_json = (page: any): Page => {
	return { ...page, date: dayjs(page.date) };
};

// Imports all the posts dynamically from the `content` directory, and returns them as an array of `Page` objects.
export const posts_from_import = async (): Promise<Page[]> => {
	let posts_imports: any;

	// Import the .md file using glob import.
	try {
		posts_imports = import.meta.glob("../../content/posts/**/*.md");
	} catch (e) {
		// If it doesn't exist, use the 404 page.
		throw error(404, `Directory does not exist!`);
	}

	const pages = await Promise.all(Object.entries(posts_imports).map(load_page));

	return pages;
};

// Imports all the pages dynamically from the `content` directory, and returns them as an array of `Page` objects.
export const pages_from_import = async (): Promise<Page[]> => {
	let posts_imports: any;

	// Import the .md file using glob import.
	try {
		posts_imports = import.meta.glob("../../content/*.md");
	} catch (e) {
		// If it doesn't exist, use the 404 page.
		throw error(404, `Directory does not exist!`);
	}

	const pages = await Promise.all(Object.entries(posts_imports).map(load_page));

	return pages;
};

// Import a post dynamically from the `content` directory, and return it as a `Page` object.
export const post_from_import = async (path: string): Promise<Page> => {
	return load_page([path, () => import(`../../content/posts/${path}.md`)]);
};

// Import a page dynamically from the `content` directory, and return it as a `Page` object.
export const page_from_import = async (path: string): Promise<Page> => {
	return load_page([path, () => import(`../../content/${path}.md`)]);
};

/**
 * Helper function to load data from an imported page.
 * @param path The path to the page.
 * @param resolver The resolver function to import the page.
 * @returns The page as a `Page` object.
 */
const load_page = async ([path, resolver]: [string, unknown]): Promise<Page> => {
	// If the path is from a glob import, so it is not pre-trimmed, trim it.
	if (/\.\.\/\.\.\/content\/.*\.md/.test(path)) {
		path = path.slice(14, -3);
	}

	// Import the .md file using the `slug` from the URL
	try {
		let { default: content, metadata } = await (resolver as any)(); // gets the page from the content directory

		return {
			// The path to the page.
			path: "/" + path,

			// The content of the page, as a renderable Svelte component.
			content: "test",

			// Metadata about the page.
			meta: {
				// Load all the metadata!
				...metadata,

				// Override some things, like tags and series with defaults if they don't exist.
				date: dayjs(metadata.date ?? new Date()),
				tags: metadata.tags ?? [],
				series: metadata.series == "" || !metadata.series ? null : metadata.series
			}
		};
	} catch (err: any) {
		// If the file is not found, then return 404.
		if (err.message.includes("Unknown variable dynamic import")) {
			throw error(404, `Page '${path}' does not exist!`);
		}
		// Otherwise, return a 500 error.
		else {
			throw error(500, err.message);
		}
	}
};
