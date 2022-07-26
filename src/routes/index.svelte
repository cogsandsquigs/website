<script lang="ts" context="module">
    export const load = async ({ fetch }) => {
        let posts = await fetch(`/api/posts`) // adding url.origin to the endpoint b/c sveltekit fetch is not allowed here.
            .then((res) => res.json())
            .then((data) => data.slice(0, 3));

        return {
            status: 200,
            props: {
                posts: posts,
            },
        };
    };
</script>

<script lang="ts">
    import { title, subtitle } from "$lib/info";
    import type { Post } from "$lib/types";

    export let posts: Post[];
</script>

<svelte:head>
    <title>{title + " - home"}</title>
    <meta property="og:title" content={title + " - home"} />
</svelte:head>

<div class="space-y-2">
    <h1 class="m-0">{title}</h1>
    <h2>{subtitle}</h2>
</div>

<p>
    Hello, and welcome to my website, my little slice of the blogosphere. I hope
    you have a good time, and enjoy yourself while you're here!
</p>

<p>
    If you wanna know more about me, check out my <a href="/about">about page</a
    >.
</p>

<h3 class="m-0">Recent posts:</h3>
<ul class="m-0">
    {#each posts as post}
        <li><a href={`/blog/${post.slug}`}>{post.title}</a></li>
    {/each}
</ul>
