<script lang="ts">
  import Popover from "$components/Popover.svelte";
</script>

<nav class="space-y-0 bg-primary my-2">
  <div class="px-4 py-1">
    <div class="flex box-border justify-evenly items-center">
      <a href="/">Index</a>
      <a href="/about">About</a>
      <Popover title="Socials">
        <a href="https://github.com/cogsandsquigs" rel="me">Github</a>
      </Popover>
    </div>
  </div>
  <hr />
</nav>
