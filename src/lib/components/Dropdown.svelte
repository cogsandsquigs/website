<!--
    This should not generate JS!!!
-->
<script lang="ts">
  import {
    ChevronRightIcon,
    MenuAlt2Icon,
  } from "@rgossiaux/svelte-heroicons/solid";

  export let title: string = undefined;
  export let arrow: boolean = true;
</script>

<div class="drop">
  <button
    class="btn flex items-center font-bold text-[#fff] underline decoration-2 decoration-secondary"
  >
    {#if title === undefined}
      <MenuAlt2Icon class="icon" />
    {:else}
      {title}
      {#if arrow}
        <div class="turn duration-150">
          <ChevronRightIcon class="icon" />
        </div>
      {/if}
    {/if}
  </button>
  <div
    class="content grid absolute bg-primary border-2 border-secondary rounded-sm p-3"
  >
    <slot>...</slot>
  </div>
</div>

<style>
  .content {
    opacity: 0;
    scale: 0.95;
    transition: 150ms;
  }

  .btn:focus ~ .content {
    display: block !important;
    opacity: 100;
    scale: 1;
  }

  .drop:hover .btn .turn {
    transform: rotate(90deg);
  }
</style>
