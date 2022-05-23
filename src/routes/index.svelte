<script lang="ts">
  import { title, subtitle } from "$lib/info";
</script>

<svelte:head>
  <title>{title + " - " + subtitle}</title>
  <meta property="og:title" content={title + " - " + subtitle} />
</svelte:head>

<h1>Welcome to my website!!!</h1>

<p>
  I'm glad you could make it! This is my little corner of the web, made with
  <a href="https://kit.svelte.dev">SvelteKit</a> and
  <a href="https://tailwindcss.com">Tailwind CSS</a>. This website is also
  deployed on
  <a href="https://vercel.com">Vercel</a>! In any case, I hope you enjoy what
  you find here! Why not check out my
  <a href="blog/hello-world">testing page</a>? It's where I test out new things
  for my website, and generally just mess around!
</p>
<p>
  If you want to know more about me, go to my <a href="/about">about me page</a
  >! Or, you could go explore the rest of my website. IDK, its up to you! After
  all, I'm not paying a fortune for you to look at my site ;).
</p>

<p>Have fun, and stay snazzy!</p>
