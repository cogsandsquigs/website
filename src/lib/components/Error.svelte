<script lang="ts">
  import { ExclamationCircleIcon } from "@rgossiaux/svelte-heroicons/outline";
</script>

<div class="flex rounded-md bg-error shadow-2xl shadow-black max-w-fit">
  <ExclamationCircleIcon class="icon float-left h-max !w-12" />

  <div class="p-2">
    <slot />
  </div>
</div>
