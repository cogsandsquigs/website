/**
 * Reads a stream and interprets it as a string.
 * @param response The response recieved from the query, that contains the `ReadableStream`.
 * @returns The string read.
 */
export const read_string_stream = async (response: Response): Promise<string> => {
	if (response.status == 404) {
		throw new Error(`The stream at ${response.url} does not exist!`);
	}

	return null;
};
