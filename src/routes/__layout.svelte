<script>
  import "$styles/globals.css";
  import { description } from "$lib/info";
  import Nav from "$components/Nav.svelte";
  import ClickCounter from "$lib/components/ClickCounter.svelte";
</script>

<svelte:head>
  <meta name="description" content={description} />
</svelte:head>

<body
  class="max-w-none text-md sm:text-lg md:text-xl bg-primary prose prose-invert prose-a:underline prose-a:decoration-secondary prose-a:decoration-2 prose-a:font-bold prose-hr:border-[1px] prose-hr:border-secondary"
>
  <Nav />

  <div class="px-2.5 mx-auto my-4 max-w-prose scrollbar-none">
    <slot />
  </div>

  <ClickCounter />
</body>
