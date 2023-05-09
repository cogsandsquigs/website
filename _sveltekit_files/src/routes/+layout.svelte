<script>
	import Favicons from "$components/Favicons.svelte";
	import Footer from "$components/Footer.svelte";
	import Header from "$components/Header.svelte";
	import config from "$config";
	import "$styles/main.scss";
</script>

<!-- Add <head> tag data here -->
<svelte:head>
	<Favicons />

	<title>
		{config.title}
	</title>
</svelte:head>

<Header />

<hr class="my-4 w-full" />

<div class="flex-grow">
	<slot />
</div>

<Footer />
