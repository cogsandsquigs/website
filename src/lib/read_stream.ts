/**
 * Reads a stream and interprets it as a string.
 * @param response The response recieved from the query, that contains the `ReadableStream`.
 * @returns The string read.
 */
export const read_string_stream = async (response: Response): Promise<string> => {
	if (response.status == 404) {
		throw new Error(`The stream at ${response.url} does not exist!`);
	}

	if (response.body == null) {
		throw new Error(`There is no body to read the stream from!`);
	}

	const reader = response.body.getReader();
	let read_string = "";

	while (true) {
		const { done, value } = await reader.read();

		// Process current chunk
		read_string += new TextDecoder().decode(value);

		if (done) {
			// Exit reader
			return read_string;
		}
	}
};
