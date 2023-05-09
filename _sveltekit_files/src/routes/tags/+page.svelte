<script lang="ts">
	import type { PageData } from "./$types";

	export let data: PageData;
</script>

<h1>All tags</h1>

<ul>
	{#each data.tags as tag}
		<li>
			<h2>
				<a href="/tags/{tag}">#{tag}</a>
			</h2>
		</li>
	{/each}
</ul>
