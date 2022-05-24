<script lang="ts">
  import { subtitle, title } from "$lib/info";
  import Popover from "$lib/components/Popover.svelte";

  let w: number = 0;
  const breakpoint: number = 640; // screen size at when to break
</script>

<svelte:window bind:innerWidth={w} />

<nav class="space-y-0">
  <div class="px-4 py-1 flex box-border justify-between items-center">
    {#if w < breakpoint}
      <Popover>
        <slot />
      </Popover>
    {:else}
      <slot />
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
