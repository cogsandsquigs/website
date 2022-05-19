<script lang="ts">
  import DropdownMenu from "$lib/components/DropdownMenu.svelte";
</script>

<nav class="space-y-0">
  <div class="px-4 py-1 flex box-border justify-between items-center">
    <DropdownMenu>
      <a href="/">Index</a>
      <a href="/blog">Blog</a>
      <a href="https://github.com/cogsandsquigs">Github</a>
    </DropdownMenu>
    <div class="text-right text-xs sm:text-sm md:text-lg space-y-0">
      <h2 class="m-0">Ian Pratt</h2>
      <h3>Just a gay programmer</h3>
    </div>
  </div>
  <hr />
</nav>
