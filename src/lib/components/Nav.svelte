<script lang="ts">
	import config from "$lib/config";
</script>

<nav>
	<div>
		<a class="text-2xl font-bold no-underline bg-none" href="/">{config.title}</a>
	</div>

	<ul class="flex p-0 m-0 list-none">
		{#each config.nav_menu as nav_item}
			<li class="mr-6">
				<a href={nav_item.url}>{nav_item.name}</a>
			</li>
		{/each}
	</ul>
</nav>
