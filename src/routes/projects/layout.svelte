<script>
  export let title;
  export let date;
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
<p>Initially created on {new Date(date).toLocaleDateString(locale, options)}</p>
<slot />