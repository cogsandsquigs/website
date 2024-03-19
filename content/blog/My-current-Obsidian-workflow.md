---
draft: true
title: My (current) Obsidian workflow
description: Of course it's gotta be kind of scuffed
date: 2024-03-19T05:00:00.000Z
taxonomies:
  tags:
    - my life
    - obsidian
---

I *love* using [Obsidian](https://obsidian.md). It's one of the best note-taking/organizational/study apps I've ever used. Why? And how? Because it's the VSCode of note-taking apps. You get a marketplace of plugins, with local text-based storage, awesome themes, and more. The only problem is... [you gotta pay](https://obsidian.md/sync) for synching vaults.

Knowing me, I hate paying when I don't have to. So, what to do? Why, abuse free services of course!

## Step 1: iCloud Drive

I currently have a desktop, a Macbook Pro (the M3 Pro model ❤️), and an iPhone. With iCloud Drive, it's easy to synchronize my vault between the latter two:

1. Open Obsidian on your iPhone. Tap Create new vault, name it, and then turn the setting Store in iCloud on.
2. This should create an app folder for Obsidian (it has the Obsidian icon) in your iCloud Drive, with the name of your vault in it. On your Macbook or other Apple device, select Open folder as vault, then select the vault inside the Obsidian app folder.
3. Done!

You may notice that my desktop is left out of the equation, however. How could I be so rude? To fix this, we need to introduce every developer's best friend: git!

## Step 2: git commit -am "life is pain"
