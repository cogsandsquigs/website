<script lang="ts">
    import Postlist from "$lib/components/Postlist.svelte";

    import type { PageData } from "./$types";

    export let data: PageData;
</script>

<h1>blog</h1>

<Postlist posts={data.posts} />
