<script>
  import "$lib/styles/globals.css";
  import { description } from "$lib/info";
  import Nav from "$lib/components/Nav.svelte";
</script>

<svelte:head>
  <meta name="description" content={description} />
</svelte:head>
<body
  class="font-body text-md sm:text-lg md:text-xl px-0.5 sm:px-1.5 md:px-3.5 pt-1 bg-primary prose prose-invert prose-h1:text-center prose-a:underline prose-a:decoration-secondary prose-a:decoration-2 prose-a:font-bold prose-hr:border-[1px] prose-hr:border-secondary max-w-none"
>
  <Nav />
  <div class="p-2 pt-6 sm:p-4 md:p-8 max-w-prose mx-auto scrollbar-none">
    <slot />
  </div>
  <hr class="m-0" />
  <p class="text-xs text-center">
    This site was made with
    <a href="https://kit.svelte.dev">SvelteKit</a> +
    <a href="https://tailwindcss.com">Tailwind CSS</a>. It's deployed on
    <a href="https://vercel.com">Vercel</a>.
  </p>
</body>
