<script>
  import "$lib/styles/globals.css";
  import Nav from "$lib/components/Nav.svelte";
</script>

<body class="px-3.5 bg-primary pt-1 prose prose-invert prose-a:text-secondary prose-a:font-bold prose-hr:border-[1px] prose-hr:border-secondary prose-hr:rounded-sm max-w-none">
  <Nav />
  <div class="p-8 max-w-prose mx-auto">
    <slot />
  </div> 
</body>