import resume from "$content/resume.json";

/**
 * The raw JSON resume, as a static endpoint.
 * @returns The raw JSON resume.
 */
export const get = async () => {
	return {
		body: JSON.stringify(resume)
	};
};
