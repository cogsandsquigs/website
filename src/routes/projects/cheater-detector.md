---
title: A cheater detector and helper
date: 2022-02-16
---

<script>
  let choices = 2;
  let score = 0;
  let mean = 0;
  let stddev = 0;

  let zscore;
  $: zscore = (score - mean)/stddev;
</script>

This only works for multiple choice, but I still think its pretty useful!

### (Average) Number of choices per question

{choices} <input type=range bind:value={choices} min=2 max=6>

### Test Score (from 0 to 100)

<input type=number bind:value={score}>

### Mean score (percentage form. i.e: 70.1)

<input type=number bind:value={mean}>

### Standard deviation (in decimal form)

<input type=number bind:value={stddev}>

## Results

### Test result Z score: {zscore}
