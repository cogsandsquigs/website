<script lang="ts">
	// API for this came from https://docs.iconify.design/api/svg.html

	/**
	 * The icon set this icon belongs to.
	 */
	export let set: string;

	/**
	 * The name of the icon.
	 */
	export let name: string;

	/**
	 * The color of the icon.
	 */
	export let color: string | undefined = undefined;
	color = color ? color : "";

	/**
	 * The width of the icon. Numbers without units are treaded as pixel measurements.
	 */
	export let width: string | number | undefined = undefined;
	width = width ? width : "";

	/**
	 * The height of the icon. Numbers without units are treated as pixel measurements.
	 */
	export let height: string | number | undefined = undefined;
	height = height ? height : "";

	/**
	 * Any optional CSS classes passed to the icon.
	 */
	export let styles: string = "";
</script>

<img
	class={styles}
	src={`https://api.iconify.design/${set}/${name}.svg?color=${color}&width=${width}&height=${height}`}
	alt={`The ${name} icon from the ${set} icon set.`}
/>
