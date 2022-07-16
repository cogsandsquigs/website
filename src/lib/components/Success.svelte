<script lang="ts">
    import { CheckCircleIcon } from "@rgossiaux/svelte-heroicons/outline";
</script>

<div
    class="flex rounded-md border-success border-2 shadow-2xl shadow-black max-w-max"
>
    <CheckCircleIcon class="icon float-left h-max !w-12 stroke-success" />

    <div class="p-2">
        <slot />
    </div>
</div>
