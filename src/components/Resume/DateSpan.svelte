<script lang="ts">
	import dayjs from "dayjs";

	/**
	 * The start date of the work.
	 */
	export let startDate: any;

	/**
	 * @optional The end date of the work.
	 */
	export let endDate: any | undefined;

	const DATE_FORMAT = "MMMM D, YYYY";
</script>

<p class="mb-0 opacity-75">
	{dayjs(startDate).format(DATE_FORMAT)}
	{#if endDate}
		->
		{dayjs(endDate).format(DATE_FORMAT)}
	{/if}
</p>
