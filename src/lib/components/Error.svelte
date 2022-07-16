<script lang="ts">
    import { ExclamationCircleIcon } from "@rgossiaux/svelte-heroicons/outline";
</script>

<div
    class="flex rounded-md border-error border-2 shadow-2xl shadow-black max-w-max"
>
    <ExclamationCircleIcon class="icon float-left h-max !w-12  stroke-error" />

    <div class="p-2">
        <slot />
    </div>
</div>
