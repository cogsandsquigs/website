<script lang="ts">
	import { persistentCount } from "./_stores";

	const handleClick = () => {
		persistentCount.set($persistentCount + 1);
	};

	const reset = () => {
		persistentCount.set(0);
	};
</script>

<button on:click={handleClick}>
	persistent clicks: {$persistentCount}
</button>

<button on:click={reset}> Reset persistent clicks to 0 </button>
