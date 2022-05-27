<script lang="ts">
  import { ExclamationIcon } from "@rgossiaux/svelte-heroicons/outline";
</script>

<div class="flex rounded-md bg-warning shadow-2xl shadow-black max-w-fit">
  <ExclamationIcon class="icon float-left h-max !w-14" />

  <div class="p-2 !text-black">
    <slot />
  </div>
</div>
