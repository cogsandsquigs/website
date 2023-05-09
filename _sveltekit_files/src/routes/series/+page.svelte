<script lang="ts">
	import type { PageData } from "./$types";

	export let data: PageData;
</script>

<h1>All series</h1>

<ul>
	{#each data.series as series}
		<li>
			<h2>
				<a href="/series/{series}">#{series}</a>
			</h2>
		</li>
	{/each}
</ul>
