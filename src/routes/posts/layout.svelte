<script>
  export let title;
  export let date;
</script>

<svelte:head>
	<title>Ian Pratt | {title}</title>
	<meta property="og:title" content={"Ian Pratt | " + title} />
</svelte:head>

<h1>{title}</h1>
<p>Posted on {date}</p>
<slot />