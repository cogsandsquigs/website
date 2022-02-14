function dateSort(a, b) {
	return new Date(b.date).getTime() - new Date(a.date).getTime()
}

export const posts = async () => {
	const modules = import.meta.glob("../routes/blog/*.md")

	const posts = []

	await Promise.all(
		Object.entries(modules).map(async ([slug, module]) => {
			const { metadata } = await module()
			slug = slug.slice(15, -3) //remove trailing path and .md from file name

			posts.push({ slug, ...metadata })
		}),
	)

	// Newest first
	posts.sort(dateSort)

	return posts
}
