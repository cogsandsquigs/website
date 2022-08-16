<script lang="ts">
    import Postlist from "$lib/components/Postlist.svelte";
    import type { Page } from "$lib/types";

    export let title: string;
    export let posts: Page[];
</script>

<h1>{title}</h1>

<Postlist {posts} />
