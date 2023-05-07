<script>
	import config from "$lib/config";
</script>

<footer class="py-4 w-full text-center">
	<span>
		{config.copyright
			.replace("{author}", config.author)
			.replace("{year}", new Date().getFullYear().toString())}
	</span>
</footer>
