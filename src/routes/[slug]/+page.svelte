<script lang="ts">
	import type { Page } from "$lib/pages";

	export let data: Page;
</script>

<h1>{data.title}</h1>

<svelte:component this={data.content} />
