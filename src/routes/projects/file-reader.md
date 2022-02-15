---
title: A simple text file reader
date: 2022-02-15
---

<script>
    let files;
</script>

This is a simple file reader, which can technically read any type of file!
For now (and the foreseeable future), this project is simply to help me to get more familiar with my development environment and coding in js and svelte.
It also is useful to generate ideas for what to do!

WARNING: since this is all browser-side, it can be very slow with large inputs!

<input type='file' multiple bind:files />

{#if files}

<h2>Files selected: </h2>
{#each Array.from(files) as file}

<p> The imported file is: {file.name}</p>
{#await file.text() then text}
{#each text.split('\n') as line }
<p>{line}</p>
{/each}
{/await}
{/each}
{/if}
