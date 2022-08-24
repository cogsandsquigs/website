<script lang="ts">
    import * as pathLib from "path";
    import dayjs from "dayjs";
    import type { Page } from "$lib/types";

    export let pages: Page[];
</script>

<ul class="list-none p-0">
    {#each pages as { path, slug, title, date, tags }, index}
        {#if index == 0 || dayjs(date).month() != dayjs(pages[index - 1].date).month() || dayjs(date).year() != dayjs(pages[index - 1].date).year()}
            <div class="flex items-center">
                <h2 class="m-0 mr-2">
                    {dayjs(date).format("MMMM YYYY")}
                </h2>
                <hr class="flex-1 m-0" />
            </div>
        {:else}
            <hr class="mx-16 my-4 flex-1 m-0" />
        {/if}
        <li class="pl-8">
            <h2 class="m-0">
                <a href={pathLib.join("/", path || "", slug)}>
                    {title}
                </a>
            </h2>

            {#if date}
                <p class="m-0">
                    Created on {dayjs(date).format("MMMM D, YYYY")}
                </p>
            {/if}

            {#if tags}
                <p class="m-0 text-sm">
                    Tags:
                    {#each tags as tag, index}
                        {#if index > 0}, {/if}
                        <a href={`/tags/${tag}`}>{tag}</a>
                    {/each}
                </p>
            {/if}
        </li>
    {/each}
</ul>
