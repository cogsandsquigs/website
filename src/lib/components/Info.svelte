<script lang="ts">
    import { StarIcon } from "@rgossiaux/svelte-heroicons/outline";
</script>

<div
    class="flex rounded-md border-info border-2 shadow-2xl shadow-black max-w-max"
>
    <StarIcon class="icon float-left h-max !w-12  fill-info stroke-info" />

    <div class="p-2">
        <slot />
    </div>
</div>
