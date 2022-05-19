<script>
  import "$lib/styles/globals.css";
  import { description } from "$lib/info";
  import Nav from "$lib/components/Nav.svelte";
</script>

<svelte:head>
  <meta name="description" content={description} />
</svelte:head>
<body
  class="font-body px-0.5 sm:px-1.5 md:px-3.5 pt-1 bg-primary prose prose-invert prose-a:underline prose-a:decoration-secondary prose-a:decoration-2 prose-a:font-bold prose-hr:border-[1px] prose-hr:border-secondary max-w-none"
>
  <Nav />
  <div class="p-1 sm:p-4 md:p-8 max-w-prose mx-auto">
    <slot />
  </div>
</body>
