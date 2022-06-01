---
title: Why does my website look like this?
date: 2022-06-01
description: Because I want it to. Here's why.
tags: [dev, webdev, website]
---

<script>
  import Info from "$components/Info.svelte"
</script>

Ok so. You might be wondering.

"Ian, why do you change your site so often? What's the point?"

Good question! What _is_ the point of this?

Well, in short, with my website, I have 3 main goals:

1. Something that has a good user experience. It should load fast, look relatively nice, and be intuitive to use for basically anyone.

2. Something that has a good developer experience. It should be easy to edit, allow for great amounts of customization and side-projects, and be fun to mess around with.

3. A space for me, myself and I. Something where I can put whatever I say and do out there, on a platform _I_ control and own. It might be challenging, but it's really fun (at least for me)! Thats why I do what I do, to have fun.

With these goals in mind, how about I give a quick tour of what my site looks like and why!

First off, the index page (or home page I guess)!

What you might notice at first is that I have a title, and then a subtitle. The title is (relatively) static and unchanging. The subtitle, however, changes based on what is happening in the moment (read: whenever I want it to). For example, during june, it'll read `Happy pride month!` and spew a bunch of rainbow-colored confetti all over the place. This is the most interesting thing on my website.

The rest of the index page is really just devoted to hosting and categorizing my blog posts. Each one has a title, a subtitle, a post date, and some tags (which, yes, are clickable and can be used to search for a post with a specific tag).

My about me page is similar in vein. It's a block of text describing me, with the most interesting thing there a tie between my profile photo and the disclosures/dropdowns I use to share little tidbits of information.

Blog posts are just a title, subtitle, post date, tags, and then the block of text composing the post (If I ever feel up for it, I may make some of the posts interactive). Again, not too interesting.

What may be interesting to you (assuming you are interesting in web development) is that most, if not all, of this site is basically HTML and CSS. The only javascript element here is the index page subtitle (because it changes depending on the date it's viewed on).

I want this site to run as fast as possible, and be as interactive as possible the moment you enter the URL in your search bar. That's why I have basically everything made with CSS. It's interactive the moment the styles load!

<Info>
Plus, it's a nice challenge to make things with only CSS and HTML, without using JS.
</Info>

Anyways, that's basically it for my site design as of right now. Have fun, and stay snazzy!
