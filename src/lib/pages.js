export const pages = async () => {
	const modules = import.meta.glob("../routes/*.md")

	const pages = []

	await Promise.all(
		Object.entries(modules).map(async ([slug, module]) => {
			const { metadata } = await module()
			slug = slug.slice(10, -3) //remove trailing path and .md from file name
			if (slug != "index") {
				pages.push({ slug, ...metadata })
			}
		}),
	)

	return pages
}
