<script lang="ts">
	import type { Page } from "$lib/pages/page";
	export let data: { page: Page };
</script>

{@html data.page.content}
