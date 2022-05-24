<script lang="ts">
  import { subtitle, title } from "$lib/info";
  import Popover from "$lib/components/Popover.svelte";

  let w:number = 0;
  const breakpoint:number = 640; // screen size at when to break
</script>

<svelte:window bind:innerWidth={w} />

<nav class="space-y-0">
  <div class="px-4 py-1 flex box-border justify-between items-center">
    {#if w < breakpoint}
    <Popover>
      <a href="/">Index</a>
      <a href="/about">About</a>
      <a href="/blog">Blog</a>
      <a href="https://github.com/cogsandsquigs">Github</a>
    </Popover>
    {:else}
    <div class="flex justify-between w-max space-b - first-letter:x-">
    </div>>  <a href="/">Index</a>
      <a href="/about">About</a>
      <a href="/blog">Blog</a>
      <a href="https://github.com/cogsandsquigs">Github</a>
    <div></div>
    {/if}

    <div class="text-right text-xs sm:text-sm md:text-lg space-y-0">
      <h2 class="m-0 max-w-fit float-right">
        {title}
      </h2>
      <h3 class="m-0">
        {subtitle}
      </h3>
    </div>
  </div>
  <hr />
</nav>

{w}
