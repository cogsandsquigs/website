<script>
  import { locale, dateOptions } from "$lib/info";
  import { title as sitetitle } from "$lib/info";
  export let title;
  export let date;
  export let tags;
</script>

<svelte:head>
  <title>{sitetitle + " - " + title}</title>
  <meta property="og:title" content={sitetitle + " - " + title} />
</svelte:head>
<slot />
