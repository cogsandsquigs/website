<script>
	import { count } from "./stores";

	function handleClick() {
		count.set($count + 1);
	}
</script>

<button on:click={handleClick}>
	clicks: {$count}
</button>
