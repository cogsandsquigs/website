<script lang="ts">
	import config from "$config";
	import PostList from "$lib/components/PostList.svelte";
	import type { PageData } from "./$types";

	export let data: PageData;
</script>

<h1>{data.page.meta.title}</h1>

{@html data.page.content}

<!-- The 3 most recent posts -->
<PostList posts={data.recent_posts} />

<!-- Link to the posts page to view more posts! -->

<br />

<a href="/posts">
	{config.languages.en.menu_more ?? "Show more"} ->
</a>
