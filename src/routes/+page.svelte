<script lang="ts">
	import PostList from "$lib/components/PostList.svelte";
	import config from "$config";
	import type { PageData } from "./$types";

	export let data: PageData;
</script>

<h1>{data.page.title}</h1>

<svelte:component this={data.page.content} />

<!-- The 3 most recent posts -->
<PostList posts={data.recent_posts} />

<!-- Link to the posts page to view more posts! -->

<br />

<a href="/posts">
	{config.languages.en.menu_more ?? "Show more"} ->
</a>
