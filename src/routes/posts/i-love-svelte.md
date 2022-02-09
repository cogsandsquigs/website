---
title: I love Svelte!
date: 2022-02-09
---
# {title}

For those of you that don't know this website is built
with [Sveltekit](https://kit.Svelte.dev) and [mdsvex](https://mdsvex.com).
It really allows me to build pretty, interactive
pages on my website with minimal effort! I also love how
Svelte allows you to compile everything you have down
to raw html and css, and only javascript for a very 
minimal runtime environment (for animations and stuff),
as well as being just very intuitive to work with! For
example, the navbar this website uses (a very minimal
navbar at that) looks like this under Svelte

```html
<nav>
  <div class="wrap">
    <div class="links">
      <!--navigation links go here!-->  
    </div>
    <div>
      <h1>Ian Pratt</h1>
      <h3>Just a gay programmer</h3>
    </div>
  </div>
</nav>
<hr />

<style>
  .wrap {
    display: flex;
    box-sizing: border-box;
    justify-content: space-between;
    align-items: center;
  }

  .links > * {
    font-size: 120%;
  }
</style>
```
Thats it. Literally thats it. This is a full-blown 
Svelte component, ready to be imported into any
page you like! Svelte just makes it easy to work with
HTML, JS, and CSS, and the upside of using this is that
the compiler does most, if not all of the work for you,
translating this into a page that needs no client-side
rendering (if you choose, however, you still can load
things on the client side, like blog pages and stuff
if you like that. I dont).

[mdsvex](https://mdsvex.com) allows me to write my pages
in an [mdx](https://mdxjs.com)-like interface designed
for Svelte users. It looks like markdown, it feels like
markdown, but you can include Svelte components within it!

For example, the index page for my website looks like this:
```markdown
# Welcome to Ian Pratt's Website!!!

I'm glad you could make it! This is my little corner
of the web, powered by IPFS (which means this site is
viewable on ipfs!!!), served by [fleek](https://fleek.co)
for all you http/s viewers out there. In any case,
I hope you enjoy what you find here! Why not  check out
my [testing page](./posts/hell-world)? It's where I test
out new things for my website!
```

This gets transpiled into Svelte and then into raw html
and css. Thank's to Svelte's amazing and easy way to 
use preprocessor plugins of any and all kinds, its
almost too easy to add support for sass, mdsvex, tailwind,
and other preprocessors that make you website beautiful.
However I ownly use mdsvex as of right now, because I don't
really need to use any other plugin or preprocessor to
style a website with a very basic style and font change.

In the end, Svelte is just amazing to work with. I don't
think things like [nextjs](https://nextjs.org) compare,
simply because of the elegance of writing a website with
Svelte and mdsvex. It's too easy, to elegant, to simple.

I love Svelte.