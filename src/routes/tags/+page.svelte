<script lang="ts" context="module">
    throw new Error("@migration task: Check code was safely removed (https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292722)");

    // import { tags as ts } from "$lib/tags";

    // export const load = async () => {
    //     return {
    //         props: {
    //             tags: await ts(),
    //         },
    //     };
    // };
</script>

<script lang="ts">
    throw new Error("@migration task: Add data prop (https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292707)");

    export let tags: string[];
</script>

<h1>tags</h1>

<ul>
    {#each tags as tag}
        <li>
            <a href={`/tags/${tag}`}>
                {tag}
            </a>
        </li>
    {/each}
</ul>
