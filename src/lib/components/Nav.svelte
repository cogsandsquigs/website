<script lang="ts">
  import { title } from "$lib/info";
  import Popover from "$lib/components/Popover.svelte";
  import NavSubtitle from "$lib/components/NavSubtitle.svelte";

  let w: number = 0;
  const breakpoint: number = 540; // screen size in pixels at when to break
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
      <h2 class="m-0">
        {title}
      </h2>
      <h3 class="m-0">
        <!-- Usually I add this-, but I wanna add cooler things :3 -->
        <!-- {subtitle} -->
        <NavSubtitle />
      </h3>
    </div>
  </div>
  <hr />
</nav>
