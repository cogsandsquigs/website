<script lang="ts">
	import PostInfo from "$components/PostInfo.svelte";
	import config from "$config";
	import type { Page } from "$lib/pages";

	export let posts: Page[] = [];
</script>

<ul class="p-0 m-0 list-none not-prose">
	{#each posts as post, index}
		{#if index > 0}
			<hr class="my-10 mx-10" />
		{/if}

		<li>
			<div class="mb-4">
				<h2 class="mr-3 text-2xl font-bold">
					<a class="no-underline bg-none" href={post.path}>{post.title}</a>
				</h2>

				<PostInfo {post} />
			</div>

			<div>
				<p class="mb-4 line-clamp-3">
					<!-- TODO: get raw text somehow? -->
					<svelte:component this={post.content} />
				</p>

				<a href={post.path}>
					{config.languages.en.read_more ?? "Read more"} ->
				</a>
			</div>
		</li>
	{/each}
</ul>
