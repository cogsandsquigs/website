<script lang="ts">
	import Tag from "$components/Tag.svelte";
	import config from "$config";
	import type { CollectionEntry } from "astro:content";

	export let project: CollectionEntry<"projects">;
</script>

{#if project.data.description}
	<h3 class="my-0 mr-3 text-lg font-bold opacity-75">
		{project.data.description}
	</h3>
{/if}

<div class="opacity-75 space-y-1">
	<time>
		<!-- @ts-ignore -->
		Posted on {project.data.date.toLocaleDateString("en-us", config.languages.en.date_format)}
	</time>

	-

	<a href={project.data.git}>Git Repository</a>

	{#if project.data.tags}
		<p class="whitespace-pre-line">
			{#each project.data.tags as tag}
				<Tag {tag} />
			{/each}
		</p>
	{/if}
</div>
