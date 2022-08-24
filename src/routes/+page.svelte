<script lang="ts">
    import type { PageData } from "./$types";
    import PageList from "$lib/components/PageList.svelte";
    import PageHead from "$lib/components/PageHead.svelte";

    export let data: PageData;
</script>

<PageHead title="home" description="My little slice of the blogosphere" />

<h1 class="mb-2">Cogs And Squigs</h1>
<h2 class="m-0 mb-9">My little slice of the blogosphere</h2>

<p>
    Hello, and welcome to my little home on the web. I hope you have a good
    time, and enjoy yourself while you're here! If you wanna know more about me,
    check out my about page. Otherwise, click around, and maybe you'll find
    something you like. Who knows?
</p>

<p>
    In the meantime, why don't you check out my <a href="/about">about page</a>?
    Or, you could check out some of the latest things I'm doing right here:
</p>

<PageList pages={data.latest} />
