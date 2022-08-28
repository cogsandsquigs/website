<script lang="ts">
    import dayjs from "dayjs";
    import type { Page } from "$lib/types";

    export let pages: Page[];

    let pageLists = pages.reduce((acc: Page[][], page, index, pages) => {
        if (
            index == 0 ||
            dayjs(page.date).month() != dayjs(pages[index - 1].date).month() ||
            dayjs(page.date).year() != dayjs(pages[index - 1].date).year()
        ) {
            acc.push([page]);
        } else {
            acc[0].push(page);
        }
        return acc;
    }, []);
</script>

{#each pageLists as pages}
    <div class="flex items-center">
        <h2 class="m-0 mr-2">
            {dayjs(pages[0].date).format("MMMM YYYY")}
        </h2>
        <hr class="flex-1 m-0" />
    </div>
    <ul class="list-none p-0">
        {#each pages as page, index}
            <li class="pl-8">
                {#if index != 0}
                    <hr class="mx-16 my-4 flex-1 m-0" />
                {/if}
                <h2 class="m-0">
                    <a href={"/" + (page.path || "") + "/" + page.slug}>
                        {page.title}
                    </a>
                </h2>

                {#if page.date}
                    <p class="m-0">
                        Created on {dayjs(page.date).format("MMMM D, YYYY")}
                    </p>
                {/if}

                {#if page.tags}
                    <p class="m-0 text-sm">
                        Tags:
                        {#each page.tags as tag, index}
                            {#if index > 0}, {/if}
                            <a href={`/tags/${tag}`}>{tag}</a>
                        {/each}
                    </p>
                {/if}
            </li>
        {/each}
    </ul>
{/each}
