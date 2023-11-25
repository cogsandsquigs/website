<script lang="ts">
	import ProjectInfo from "$components/Projects/ProjectInfo.svelte";
	import config from "$config";
	import type { CollectionEntry } from "astro:content";

	export let projects: CollectionEntry<"projects">[] = [];
</script>

<ul class="p-0 m-0 list-none not-prose">
	{#each projects as project, index}
		{#if index > 0}
			<hr class="my-10 mx-10" />
		{/if}

		<li>
			<!-- General information and project listing -->
			<div class="mb-4">
				<h2 class="mr-3 text-2xl font-bold">
					<a class="no-underline bg-none" href={`/projects/${project.slug}`}>{project.data.title}</a
					>
				</h2>

				<ProjectInfo {project} />

				<a class="mt-1" href={`/projects/${project.slug}`}>
					{config.languages.en.read_more ?? "Read more"} -&gt;
				</a>
			</div>
		</li>
	{/each}
</ul>
