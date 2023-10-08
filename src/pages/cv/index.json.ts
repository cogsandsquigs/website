// This file is the endpoint for the raw JSON cv schema generating all this.

import cv from "$content/cv/cv.json";
import type { APIRoute } from "astro";

/**
 * The raw JSON cv, as a static endpoint.
 * @returns The raw JSON cv.
 */
export const get: APIRoute = async () => {
	return {
		body: JSON.stringify(cv)
	};
};
