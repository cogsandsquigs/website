function dateSort(a, b) {
	// have to use getTime to satisfy typescript
	// And if i make this file a js file, the endpoint is not detected since
	// it's a typescript svelte project
	return new Date(b.created).getTime() - new Date(a.created).getTime();
}

export const get = async () => {
	const modules = import.meta.glob('./*.md');

	const posts = [];


	await Promise.all(
		Object.entries(modules).map(async ([_, module]) => {
			const { metadata } = await module();

			posts.push(metadata)
		})
	);

	// Newest first
	posts.sort(dateSort);

	return {posts: posts};
}