// This file is the endpoint for the raw JSON resume schema generating all this.

import resume from "$content/resume/resume.json";
import type { APIRoute } from "astro";

/**
 * The raw JSON resume, as a static endpoint.
 * @returns The raw JSON resume.
 */
export const get: APIRoute = async () => {
	return {
		body: JSON.stringify(resume)
	};
};
