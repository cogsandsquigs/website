<script lang="ts">
  import { subtitle, title } from "$lib/info";
  import Popover from "$lib/components/Popover.svelte";
</script>

<nav class="space-y-0">
  <div class="px-4 py-1 flex box-border justify-between items-center">
    <Popover>
      <a href="/">Index</a>
      <a href="/about">About</a>
      <a href="/blog">Blog</a>
      <a href="https://github.com/cogsandsquigs">Github</a>
    </Popover>

    <div class="text-right text-xs sm:text-sm md:text-lg space-y-0">
      <h2 class="m-0 max-w-fit transform duration-300 hover:rotate-12">
        {title}
      </h2>
      <h3 class="m-0 transform duration-300 hover:-rotate-6">
        {subtitle}
      </h3>
    </div>
  </div>
  <hr />
</nav>
