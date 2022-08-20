<script lang="ts">
    import PageHead from "$lib/components/PageHead.svelte";
    import PageList from "$lib/components/PageList.svelte";
    import type { PageData } from "./$types";

    export let data: PageData;
</script>

<PageHead
    title="blog"
    description="The random ramblings of a deranged person, from yours truly"
/>

<h1 class="mb-2">blog</h1>
<h2 class="m-0 mb-9">
    The random ramblings of a deranged person, from yours truly
</h2>

<PageList pages={data.posts} />
