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
