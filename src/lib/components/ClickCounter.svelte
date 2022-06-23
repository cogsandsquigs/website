<script lang="ts">
  import { onMount } from "svelte";

  export let allowedClicks = 3;

  let counter = 0;

  onMount(() => {
    if (sessionStorage.getItem("counter")) {
      counter = Number(sessionStorage.getItem("counter"));
    }
  });

  function onClick() {
    counter = counter + 1;
    sessionStorage.setItem("counter", String(counter));
  }

  let nodeRef;

  $: if (counter >= allowedClicks) {
    nodeRef.parentNode.classList.add(
      ...["select-none", "cursor-none", "pointer-events-none"]
    );
  }
</script>

<svelte:window on:click={onClick} />

<div
  bind:this={nodeRef}
  style={counter >= allowedClicks
    ? "background-color: red !important; pointer-events: none; cursor: disabled"
    : ""}
  class="bg-primary border-t-2 border-l-2 border-secondary rounded-tl-md p-2 z-10 fixed bottom-0 right-0"
>
  Clicks: {counter >= 3 ? 0 : 3 - counter}
</div>
