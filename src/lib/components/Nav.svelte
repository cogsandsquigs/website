<script lang="ts">
  import {
    Popover,
    PopoverButton,
    PopoverPanel,
  } from "@rgossiaux/svelte-headlessui";
</script>

<nav class="space-y-0">
  <div class="px-4 py-1 flex box-border justify-between items-center">
    <Popover
      class="text-left text-md sm:text-lg md:text-xl max-w-auto"
      style="position: relative;"
    >
      <PopoverButton
        class="font-bold underline decoration-secondary decoration-2"
      >
        Menu
      </PopoverButton>

      <PopoverPanel style="position: absolute; z-index: 10;">
        <div
          class="bg-primary p-3 border-2 border-secondary rounded-sm panel-contents"
        >
          <a href="/">Index</a>
          <a href="/blog">Blog</a>
          <a href="https://github.com/cogsandsquigs">Github</a>
        </div>
      </PopoverPanel>
    </Popover>

    <div class="text-right text-xs sm:text-sm md:text-lg space-y-0">
      <h2 class="m-0">Ian Pratt</h2>
      <h3>Just a gay programmer</h3>
    </div>
  </div>
  <hr />
</nav>
