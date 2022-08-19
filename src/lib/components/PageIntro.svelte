<script lang="ts">
    import dayjs from "dayjs";
    import type { Dayjs } from "dayjs";

    export let title: string;
    export let description: string;
    export let date: Dayjs | Date;
    export let tags: string[] | undefined = undefined;
</script>

<h1 class="mb-2">{title}</h1>
<h2 class="m-0 text-md">{description}</h2>
<h3 class="m-0 text-md font-thin">
    Created on {dayjs(date).format("MMMM D, YYYY")}
</h3>
{#if tags}
    <h4 class="m-0 text-md font-thin">
        Tags:
        {#each tags as tag, index}
            {#if index > 0}, {/if}
            <a href={`/tags/${tag}`}>{tag}</a>
        {/each}
    </h4>
{/if}
<hr class="m-0 mt-2 mb-9" />
