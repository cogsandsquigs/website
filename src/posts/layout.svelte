<script>
  export let title;
  export let date;
  export let tags;

  const locale = "en-US";
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  };
</script>

<svelte:head>
  <title>Ian Pratt | {title}</title>
  <meta property="og:title" content={"Ian Pratt | " + title} />
</svelte:head>

<h1>{title}</h1>
<p>Posted on {new Date(date).toLocaleDateString(locale, options)}</p>
{#if tags !== undefined}
  <p>
    Tags: 
    {#each tags as tag, index}
      {#if index > 0}
        {", " + tag}
      {:else}
        {tag}
      {/if}
    {/each}
  </p>
{/if}
<hr />
<slot />
