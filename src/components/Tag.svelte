<script lang="ts">
	export let tag: string;
</script>

<a
	class="tag text-primary font-bold border-primary rounded-full decoration-none border-[1px] break-words px-2 mr-2 no-underline"
	href={`/tags/${tag}`}>{tag}</a
>
