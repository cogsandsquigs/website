<script>
  export let title;
  export let date;
</script>

<svelte:head>
  <title>Ian Pratt | {title}</title>
  <meta property="og:title" content={"Ian Pratt | " + title} />
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.css"
    integrity="sha384-AfEj0r4/OFrOo5t7NnNe46zW/tFgW6x/bCJG8FqQCEo3+Aro6EYUG4+cU+KJWu/X"
    crossorigin="anonymous"
  />
</svelte:head>

<h1>{title}</h1>
<p>Posted on {date}</p>
<slot />
