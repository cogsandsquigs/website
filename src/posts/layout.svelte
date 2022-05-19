<script>
  import { locale, dateOptions } from "$lib/info";
  export let title;
  export let date;
  export let tags;
</script>

<svelte:head>
  <title>Ian Pratt | {title}</title>
  <meta property="og:title" content={"Ian Pratt | " + title} />
</svelte:head>
<div>
  <h2 class="m-0">{title}</h2>
  <p>Posted on {new Date(date).toLocaleDateString(locale, dateOptions)}</p>
  {#if tags !== undefined}
    <p>
      Tags:
      {#each tags as tag, index}
        {#if index > 0}
          , <a href={"/blog/tags/" + tag}>{tag}</a>
        {:else}
          <a href={"/blog/tags/" + tag}>{tag}</a>
        {/if}
      {/each}
    </p>
  {/if}
</div>
<hr class="mt-0 mb-4" />
<slot />
