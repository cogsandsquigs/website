export const pages = async () => {
	const modules = import.meta.glob("../routes/*.md")

	let pages = []

	let index = undefined

	await Promise.all(
		Object.entries(modules).map(async ([slug, module]) => {
			const { metadata } = await module()

			slug = slug.slice(10, -3) //remove trailing path and .md from file name

			if (slug !== "index") {
				pages.push({ slug, ...metadata })
			} else {
				index = { ...{ slug: "" }, ...metadata }
			}
		}),
	)

	pages.unshift(index)

	return pages
}
