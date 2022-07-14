<script lang="ts">
    import PostList from "$components/PostList.svelte";
    import { dateOptions, locale, title as sitetitle } from "$lib/info";
    import { RssIcon } from "@rgossiaux/svelte-heroicons/solid";
    export let title;
    export let description;
    export let date;
    export let slug;
    export let tags;
    export let recommendations;
</script>

<svelte:head>
    <title>{sitetitle + " - " + title}</title>
    <meta property="og:title" content={sitetitle + " - " + title} />
</svelte:head>

<div class="flex justify-between items-start">
    <h1 class="m-0">
        <a href="/{slug}">{title}</a>
    </h1>
    <a href="/rss.xml"><RssIcon class="icon" /></a>
</div>

<h3>{description}</h3>
<p>
    Posted on {new Date(date).toLocaleDateString(locale, dateOptions)}
</p>

{#if tags != undefined}
    <p class="m-0 p-0">
        Tags:
        {#each tags as tag, index}
            {#if index > 0}
                , <a href={"/tags/" + tag}>{tag}</a>
            {:else}
                <a href={"/tags/" + tag}>{tag}</a>
            {/if}
        {/each}
    </p>
{/if}

<hr class="mt-2 mb-6" />

<slot />

{#if recommendations != null && recommendations.length > 0}
    <hr class="mt-2 mb-6" />
    <h3>You might like:</h3>
    <PostList posts={recommendations} size="sm" />
{/if}
