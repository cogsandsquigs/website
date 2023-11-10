---
draft: true
title: Dotbak
description: A dotfile synchronizer for my dotfiles
git: 'https://github.com/cogsandsquigs/dotbak'
tags:
  - rust
  - dotfiles
---

When I made this, I was facing an issue: how do I synchronize my shared environments, my laptop, desktop, and even (home)server? How can I make it as easy as possible to share my dotfiles?

The current methods were always too tedious and time-consuming to update my dotfiles: I needed to go to the locations where they're stored (not where they exist in my filesystem), update them there, run a command to update the files across my computer, and finally back them up.

With `dotbak`, I can run a single command, `dotbak sync`, to update my dotfiles *right where they are in the filesystem!* I don't need to run something like `chezmoi cd && git add . && git commit -m "Dotfile update"`. Instead, It's just one command.
