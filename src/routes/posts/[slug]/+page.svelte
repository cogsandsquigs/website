<script lang="ts">
	import PostInfo from "$lib/components/PostInfo.svelte";
	import type { Page } from "$lib/pages";

	export let data: Page;
</script>

<h1>{data.title}</h1>

<PostInfo post={data} />

<svelte:component this={data.content} />
