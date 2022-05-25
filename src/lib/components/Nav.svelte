<script lang="ts">
  import { title } from "$lib/info";
  import Popover from "$lib/components/Popover.svelte";
  import NavSubtitle from "$lib/components/NavSubtitle.svelte";

  let w: number = 0;
  const xs: number = 540; // screen size in pixels at when to break xs
  const xl: number = 1240; // screen size in pixels at when to break lg
</script>

<svelte:window bind:innerWidth={w} />
{#if w < xl}
  <nav class="space-y-0">
    <div class="px-4 py-1 flex box-border justify-between items-center">
      {#if w < xs}
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
        <!-- Usually I add this-, but I wanna add cooler things :3 -->
        <!-- {subtitle} -->
        <NavSubtitle />
      </div>
    </div>
    <hr />
  </nav>
{:else}
  <aside
    class="grid fixed top-4 pr-2 w-1/5 text-left space-y-2"
    aria-label="Sidebar"
  >
    <h2 class="m-0">{title}</h2>
    <NavSubtitle />
    <div class="grid max-w-fit space-y-3">
      <slot />
    </div>
  </aside>
{/if}
