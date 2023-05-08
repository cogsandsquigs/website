<script lang="ts">
	import PostList from "$lib/components/PostList.svelte";
	import type { PageData } from "./$types";

	export let data: PageData;
</script>

<h1>Tag: {data.tag}</h1>

<PostList posts={data.posts} />
