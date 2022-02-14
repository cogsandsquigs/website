import { pages } from "$lib/pages"

export const get = async () => {
	return {
		status: 200,
		body: await pages(),
	}
}
