---
draft: false
title: Hematite
description: A Rust Battlesnake I made for fun.
date: 2023-02-07T05:00:00.000Z
tags:
  - rust
  - battlesnake
  - ai
git: https://github.com/cogsandsquigs/hematite
---

This is a [Battlesnake](https://play.battlesnake.com/) that I made a a while ago, which I still run on [fly.io](https://fly.io/) to this day. Occasionally, I may try to improve it, although I have a few other things going on right now, so it's not top priority.

Currently, it uses a heuristic approach combined with a Monte-Carlo tree search. However, that lead to worse performance both in time and in ability, so my next steps are to either roll it back to plain heuristics or to improve upon the search.
