<script lang="ts">
	import type { CollectionEntry } from "astro:content";
	import config from "$config";

	export let post: CollectionEntry<"blog">;
</script>

{#if post.data.description}
	<h3 class="my-0 mr-3 text-lg font-bold opacity-75">
		{post.data.description}
	</h3>
{/if}

<div class="opacity-75">
	<time>
		<!-- @ts-ignore -->
		Posted on {post.data.date.toLocaleDateString("en-us", config.languages.en.date_format)}
	</time>

	{#if post.data.series}
		<p class="m-0">
			This article is part of the
			<a class="font-bold" href={`/series/${post.data.series}`}>{post.data.series}</a> series
			<!-- TODO: add series title like in hugo? -->
		</p>
	{/if}

	{#if post.data.tags}
		<p class="m-0">
			Tags:
			{#each post.data.tags as tag}
				<a class="mr-3 font-bold" href={`/tags/${tag}`}>#{tag}</a>
			{/each}
		</p>
	{/if}
</div>
