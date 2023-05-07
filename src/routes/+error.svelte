<script lang="ts">
	import { page } from "$app/stores";
	import config from "$lib/config";
</script>

<h1>Error: {$page.status}</h1>

<p>
	{#if $page.error}
		{config.languages.en.error_404_message ?? "Message: " + $page.error.message}
	{:else}
		Unknown error!
	{/if}
</p>

<!-- TODO: Add output log somewhere? -->

<p>
	<a href="/">{config.languages.en.error_404_back_button_label ?? "Back to home"} -></a>
</p>
