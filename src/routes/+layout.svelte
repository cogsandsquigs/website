<script>
	import Head from '$components/Head.svelte';
	import '$styles/main.scss';
</script>

<!-- Add more head data here -->
<Head/>

<!-- {{- partial "header.html" . -}} -->

<hr class="my-4 w-full" />

<div class="flex-grow">
	<slot />
</div>

<!-- {{- partial "footer.html" . -}} -->