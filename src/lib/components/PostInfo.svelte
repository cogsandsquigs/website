<script lang="ts">
	import type { Page } from "$lib/pages";

	export let post: Page;
</script>

{#if post.description}
	<h3 class="my-0 mr-3 text-lg font-bold opacity-75">
		{post.description}
	</h3>
{/if}

<div class="opacity-75">
	<time> Posted on {post.date.format("MMMM D, YYYY")} </time>

	{#if post.series}
		<p class="m-0">
			This article is part of the
			<a class="font-bold" href={`/series/${post.series}`}>{post.series}</a> series
			<!-- TODO: add series title like in hugo? -->
		</p>
	{/if}

	{#if post.tags}
		<p class="m-0">
			Tags:
			{#each post.tags as tag}
				<a class="font-bold mr-3" href={`/tags/${tag}`}>#{tag}</a>
			{/each}
		</p>
	{/if}
</div>
