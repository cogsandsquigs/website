<script lang="ts">
    import type { PageData } from "./$types";

    export let data: PageData;
</script>

<h1>tags</h1>

<ul>
    {#each data.tags as tag}
        <li>
            <a href={`/tags/${tag}`}>
                {tag}
            </a>
        </li>
    {/each}
</ul>
