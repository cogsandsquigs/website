<script lang="ts">
	import { count } from "./stores";

	const handleClick = () => {
		count.set($count + 1);
	};
</script>

<button on:click={handleClick}>
	clicks: {$count}
</button>
