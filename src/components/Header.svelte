<script>
	import Nav from "$components/Nav.svelte";
	import Socials from "$components/Socials.svelte";
	import config from "$config";
</script>

<header class="w-full mt-4 not-prose">
	<a class="text-2xl font-bold no-underline bg-none" href="/">{config.title}</a>

	<div class="flex justify-between">
		<Nav />
		<Socials />
	</div>
</header>
