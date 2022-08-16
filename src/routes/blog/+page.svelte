<script lang="ts">
    import Postlist from "$lib/components/Postlist.svelte";
    import type { Page } from "$lib/types";

    export let posts: Page[];

    console.log(posts);
</script>

<h1>blog</h1>

<Postlist {posts} />
