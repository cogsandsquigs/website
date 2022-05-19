<script lang="ts">
    import {
        Popover,
        PopoverButton,
        PopoverPanel,
    } from "@rgossiaux/svelte-headlessui";

    export let menuTitle: string = "Menu";
</script>

<Popover
    class="text-left text-md sm:text-lg md:text-xl max-w-auto"
    style="position: relative;"
>
    <PopoverButton
        class="font-bold underline decoration-secondary decoration-2"
    >
        {menuTitle}
    </PopoverButton>

    <PopoverPanel style="position: absolute; z-index: 10;">
        <div
            class="bg-primary p-3 border-2 border-secondary rounded-sm panel-contents"
        >
            <slot />
        </div>
    </PopoverPanel>
</Popover>
