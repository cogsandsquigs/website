<script lang="ts">
	/**
	 * The icon set this icon belongs to.
	 */
	export let set: string;

	/**
	 * The name of the icon.
	 */
	export let name: string;

	/**
	 * The width of the icon.
	 */
	export let width: string | number | undefined = "1em";

	/**
	 * The height of the icon.
	 */
	export let height: string | number | undefined = width;

	/**
	 * Any optional CSS classes passed to the icon.
	 */
	export let classes: string = "";

	if (!width && !height) {
	}
</script>

<img
	class={classes}
	src={`https://api.iconify.design/${set}/${name}.svg`}
	alt={`The ${name} icon from the ${set} icon set.`}
/>
