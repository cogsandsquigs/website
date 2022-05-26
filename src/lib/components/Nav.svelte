<script lang="ts">
  import { title } from "$lib/info";
  import Popover from "$lib/components/Popover.svelte";
  import NavSubtitle from "$lib/components/NavSubtitle.svelte";

  let w: number = 0;
  const breakpoint: number = 540; // screen size in pixels at when to break xs
</script>

<svelte:window bind:innerWidth={w} />

<nav class="space-y-0 bg-primary">
  <div class="px-4 py-1 flex box-border justify-between items-center">
    {#if w < breakpoint}
      <Popover arrow={false}>
        <slot />
      </Popover>
    {:else}
      <slot />
    {/if}

    <div class="text-right text-xs sm:text-sm md:text-lg space-y-0">
      <h2 class="m-0">
        {title}
      </h2>
      <!-- Usually I add this-, but I wanna add cooler things :3 -->
      <!-- {subtitle} -->
      <NavSubtitle />
    </div>
  </div>
  <hr />
</nav>
