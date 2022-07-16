<script lang="ts">
    import { locale, dateOptions } from "$lib/info";
    import { RssIcon } from "@rgossiaux/svelte-heroicons/outline";

    export let post;
    //export let size: "sm" | "md" | "lg" = "md";
    export let link: boolean = true;
</script>

<!--
{#if size === "lg"}
    <div class="space-y-0">
        <div class="flex justify-between items-start">
            <h1 class="m-0">
                {#if link}
                    <a href="/{post.slug}">{post.title}</a>
                {:else}
                    {post.title}
                {/if}
            </h1>
            <a href="/rss.xml"><RssIcon class="icon" /></a>
        </div>

        <h3>{post.description}</h3>
        <p>
            Posted on {new Date(post.date).toLocaleDateString(
                locale,
                dateOptions
            )}
        </p>

        {#if post.tags != undefined}
            <p class="m-0 p-0">
                Tags:
                {#each post.tags as tag, index}
                    {#if index > 0}
                        , <a href={"/tags/" + tag}>{tag}</a>
                    {:else}
                        <a href={"/tags/" + tag}>{tag}</a>
                    {/if}
                {/each}
            </p>
        {/if}
    </div>
{:else if size === "md"}
-->
<div class="space-y-0">
    <h2 class="m-0">
        {#if link}
            <a href="/{post.slug}">{post.title}</a>
        {:else}
            {post.title}
        {/if}
    </h2>
    <p class="m-0 font-bold">{post.description}</p>
    <p class="m-0">
        Posted on {new Date(post.date).toLocaleDateString(locale, dateOptions)}
    </p>

    {#if post.tags != undefined}
        <p class="m-0">
            Tags: {#each post.tags as tag, index}{#if index > 0}, <a
                        href={"/tags/" + tag}>{tag}</a
                    >{:else}<a href={"/tags/" + tag}>{tag}</a>{/if}{/each}
        </p>
    {/if}
</div>
<!--
{:else if size === "sm"}
    <div class="pb-1">
        <p class="m-0">
            {#if link}
                <a href="/{post.slug}">{post.title}</a>,
            {:else}
                {post.title},
            {/if}
            posted on {new Date(post.date).toLocaleDateString(
                locale,
                dateOptions
            )}
        </p>
        <p class="text-sm text-[#fff] font-bold">
            Tags: {#each post.tags as tag, index}{#if index > 0}, <a
                        href={"/tags/" + tag}>{tag}</a
                    >{:else}<a href={"/tags/" + tag}>{tag}</a>{/if}{/each}
        </p>
    </div>
{/if}
-->
