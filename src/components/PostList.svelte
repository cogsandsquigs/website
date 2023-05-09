<script lang="ts">
	import PostInfo from "$components/PostInfo.svelte";
	import config from "$config";
	import type { CollectionEntry } from "astro:content";

	export let posts: CollectionEntry<"blog">[] = [];
</script>

<ul class="p-0 m-0 list-none not-prose">
	{#each posts as post, index}
		{#if index > 0}
			<hr class="my-10 mx-10" />
		{/if}

		<li>
			<!-- General information and post listing -->
			<div class="mb-4">
				<h2 class="mr-3 text-2xl font-bold">
					<a class="no-underline bg-none" href={post.slug}>{post.data.title}</a>
				</h2>

				<PostInfo {post} />
			</div>

			<div>
				<!-- The preview for the post -->
				<p class="mb-4 line-clamp-3">
					<!-- TODO: get post preview -->
				</p>

				<a href={post.slug}>
					{config.languages.en.read_more ?? "Read more"} ->
				</a>
			</div>
		</li>
	{/each}
</ul>
