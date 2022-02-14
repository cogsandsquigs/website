import { projects } from "$lib/projects"

export const get = async () => {
	return {
		status: 200,
		body: await projects(),
	}
}
