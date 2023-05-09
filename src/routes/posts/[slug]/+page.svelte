<script lang="ts">
	import PostInfo from "$lib/components/PostInfo.svelte";
	import type { PageData } from "./$types";

	export let data: PageData;
</script>

<h1>{data.meta.title}</h1>

<PostInfo post={data} />

{@html data.content}
