<script lang="ts">
	import config from "$config";
</script>

<nav>
	<ul class="flex p-0 m-0 list-none">
		{#each config.languages.en.menu.main as nav_item}
			<li class="mr-6">
				<a href={nav_item.url}>{nav_item.name}</a>
			</li>
		{/each}
	</ul>
</nav>
