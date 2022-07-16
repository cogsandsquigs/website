<script lang="ts">
    import {
        Disclosure,
        DisclosureButton,
        DisclosurePanel,
        Transition,
    } from "@rgossiaux/svelte-headlessui";

    import { ChevronRightIcon } from "@rgossiaux/svelte-heroicons/solid";

    export let title = "...";
</script>

<Disclosure let:open>
    <DisclosureButton
        class="flex p-2 w-full justify-between items-center border-2 border-secondary rounded-sm"
    >
        <span>{@html title}</span>
        <div class="turn duration-150">
            <ChevronRightIcon
                class="icon duration-150"
                style={open ? "transform: rotate(90deg);" : ""}
            />
        </div>
    </DisclosureButton>
    <!-- This example uses Tailwind's transition classes -->
    <Transition
        enter="transition duration-100 ease-out"
        enterFrom="transform scale-95 opacity-0"
        enterTo="transform scale-100 opacity-100"
        leave="transition duration-75 ease-out"
        leaveFrom="transform scale-100 opacity-100"
        leaveTo="transform scale-95 opacity-0"
    >
        <DisclosurePanel class="p-2">
            <slot>...</slot>
        </DisclosurePanel>
    </Transition>
</Disclosure>
