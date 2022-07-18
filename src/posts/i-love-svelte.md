---
title: I love Svelte!
date: 2022-02-09
description: A small little rant about how much I love svelte
tags: [dev, svelte, tailwind, webdev, review]
---

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
<nav class="space-y-0 bg-primary my-2">
  <div class="px-4 py-1">
    <div class="flex box-border justify-evenly items-center">
      <slot />
    </div>
  </div>
  <hr />
</nav>
```

Thats it. Literally thats it. This is a full-blown
Svelte component, ready to be imported into any
page you like! Svelte just makes it easy to work with
HTML, JS, and CSS, and the upside of using this is that
the compiler does most, if not all of the work for you,
translating this into a page that needs no client-side
rendering (if you choose, however, you still can load
things on the client side, like blog pages and stuff
if you wanna do that).

Another plugin I use is [Tailwind CSS](https://tailwindcss.com),
because it makes styling a breeze to do! It also lets me
experiment with different styles and themes quite fast, which
with ordinary, plain CSS would be difficult.

In the end, Svelte is just amazing to work with.It's too easy,
too elegant, too simple. Truly svelte.

I love Svelte.
