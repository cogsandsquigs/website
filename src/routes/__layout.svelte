<script>
  import "$lib/styles/globals.css";
  import { description } from "$lib/info";
  import Nav from "$lib/components/Nav.svelte";
  import Popover from "$lib/components/Popover.svelte";
</script>

<svelte:head>
  <meta name="description" content={description} />
</svelte:head>

<body
  class="max-w-none min-h-screen font-body text-md sm:text-lg md:text-xl bg-primary prose prose-invert prose-a:underline prose-a:decoration-secondary prose-a:decoration-2 prose-a:font-bold prose-hr:border-[1px] prose-hr:border-secondary"
>
  <Nav>
    <a href="/">Index</a>
    <a href="/about">About</a>
    <a href="/blog">Blog</a>
    <Popover title="Socials">
      <a href="https://github.com/cogsandsquigs" rel="me">Github</a>
    </Popover>
  </Nav>

  <div class="px-2.5 mx-auto my-4 max-w-prose scrollbar-none">
    <slot />
  </div>

  <!--
  <div class="bottom-0 w-full mt-2">
    <hr class="m-0" />

    <p class="text-xs text-center">
      This site was made with
      <a href="https://kit.svelte.dev">SvelteKit</a> +
      <a href="https://tailwindcss.com">Tailwind CSS</a>. It's deployed on
      <a href="https://vercel.com">Vercel</a>.
    </p>
  </div>
  -->
</body>
