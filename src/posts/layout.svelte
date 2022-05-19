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
<slot />
