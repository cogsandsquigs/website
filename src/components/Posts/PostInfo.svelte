<script lang="ts">
	import Tag from "$components/Tag.svelte";
	import config from "$config";
	import type { CollectionEntry } from "astro:content";

	export let post: CollectionEntry<"blog">;
</script>

{#if post.data.description}
	<h3 class="my-0 mr-3 text-lg font-bold opacity-75">
		{post.data.description}
	</h3>
{/if}

<div class="opacity-75 space-y-1">
	<time>
		<!-- @ts-ignore -->
		Posted on {post.data.date.toLocaleDateString("en-us", config.languages.en.date_format)}
	</time>

	{#if post.data.series}
		<p>
			This article is part of the
			<a class="font-bold" href={`/series/${post.data.series}`}>{post.data.series}</a> series
			<!-- TODO: add series title like in hugo? -->
		</p>
	{/if}

	{#if post.data.tags}
		<p class="whitespace-pre-line">
			{#each post.data.tags as tag}
				<Tag {tag} />
			{/each}
		</p>
	{/if}
</div>
