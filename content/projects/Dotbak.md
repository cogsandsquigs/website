---
draft: false
title: Dotbak
description: A dotfile synchronizer for my dotfiles
date: 2023-07-18T05:00:00.000Z
git: "https://github.com/cogsandsquigs/dotbak"
taxonomies:
    tags:
        - rust
        - dotfiles
---

When I made this, I was facing an issue: how do I synchronize my shared environments, my laptop, desktop, and even (home)server? How can I make it as easy as possible to share my dotfiles?

The current methods were always too tedious and time-consuming to update my dotfiles: I needed to go to the locations where they're stored (not where they exist in my filesystem), update them there, run a command to update the files across my computer, and finally back them up.

With `dotbak`, I can run a single command, `dotbak sync`, to update my dotfiles _right where they are in the filesystem!_ I don't need to run [something like](https://www.chezmoi.io/quick-start/#start-using-chezmoi-on-your-current-machine) `chezmoi cd && git add . && git commit -m "Dotfile update"`. Instead, It's just one command.

You might wonder why I would go through making my solution when there are probably other solutions that would work. After all, why reinvent the wheel?\
\
For one, I want to get experience making something that would impact people, even if that person is just me. The process of creating is always something that I can learn from, and I don't want to just use a solution that I don't learn anything from.

This brings me to my second point, which is that I want to _understand_ the solution I'm given. If I don't understand how something works, then why use it? What if it breaks, or ruins my system, or is feature-incomplete (for me, at least)? With a home-grown solution, I can make all the features I need, and patch all the fixes I want when I want.

Right now, this project is mostly complete. In the future, I may add more features like automatic synchronization in the background (using some kind of daemon), but that's only if I have the time, energy, and need for it. Otherwise, this is mostly done!

If you're interested in using `dotbak`, give it a try! If there's anything you want me to fix or add, you can make an issue or pull request, and I'll try to incorporate it as best I can. However, remember that I'm just one person, and I kinda have a lot of other things on my plate right now, so please be patient and kind!
