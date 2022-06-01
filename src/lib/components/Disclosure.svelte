<!--
    This should not generate JS!!!
-->
<script lang="ts">
  import { ChevronRightIcon } from "@rgossiaux/svelte-heroicons/solid";

  export let title = "...";
</script>

<div>
  <button
    class="btn flex items-center justify-between w-full border-2 border-secondary rounded-sm p-1 px-2"
  >
    <span>{@html title}</span>
    <div class="turn">
      <ChevronRightIcon class="icon" />
    </div>
  </button>
  <div class="content bg-primary pt-1 max-w-prose">
    <slot>...</slot>
  </div>
</div>

<style>
  .content {
    opacity: 0;
    scale: 0.95;
    position: absolute;
    z-index: -1;
    transition: 150ms;
    transition-timing-function: ease-out;
  }

  .btn:focus ~ .content {
    display: block !important;
    opacity: 100;
    scale: 1;
    position: relative;
    z-index: auto;
  }

  .btn:focus .turn {
    transform: rotate(90deg);
    transition: 150ms;
  }
</style>
