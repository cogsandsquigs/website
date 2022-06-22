<script lang="ts">
  export let allowedClicks = 3;

  let counter = 0;
  function onClick() {
    counter = counter + 1;
  }
</script>

<svelte:window on:click={onClick} />
<svelte:body style={counter >= allowedClicks ? "cursor: disabled" : ""} />

<div
  style={counter >= allowedClicks
    ? "background-color: red !important; pointer-events: none; cursor: disabled"
    : ""}
  class="bg-primary border-t-2 border-l-2 border-secondary rounded-tl-md p-2 z-10 fixed bottom-0 right-0"
>
  Clicks: {counter}/3
</div>
