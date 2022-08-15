<script lang="ts" context="module">
    import { tags as ts } from "$lib/tags";

    export const load = async () => {
        return {
            props: {
                tags: await ts(),
            },
        };
    };
</script>

<script lang="ts">
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
