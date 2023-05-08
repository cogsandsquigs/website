<script lang="ts">
	import PostList from "$lib/components/PostList.svelte";
	import type { Page } from "$lib/pages";

	export let data: { posts: Page[] };
</script>

<h1>Blog</h1>

<PostList posts={data.posts} />
