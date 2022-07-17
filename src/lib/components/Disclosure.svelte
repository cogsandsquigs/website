<script lang="ts">
    import {
        Disclosure,
        DisclosureButton,
        DisclosurePanel,
        Transition,
    } from "@rgossiaux/svelte-headlessui";

    import { ChevronRightIcon } from "@rgossiaux/svelte-heroicons/solid";

    export let title: string = ""; // processed as raw html, so be careful!
</script>

<Disclosure let:open class="min-w-full">
    <DisclosureButton
        class="flex justify-between items-center px-2 py-1 min-w-full text-left border-2 border-secondary rounded-sm"
    >
        <span>{@html title}</span>
        <ChevronRightIcon
            style={open ? "transform:rotate(90deg);" : ""}
            class="icon duration-100"
        />
    </DisclosureButton>
    <Transition
        enter="transition duration-100 ease-out"
        enterFrom="transform scale-95 opacity-0"
        enterTo="transform scale-100 opacity-100"
        leave="transition duration-75 ease-out"
        leaveFrom="transform scale-100 opacity-100"
        leaveTo="transform scale-95 opacity-0"
    >
        <DisclosurePanel>
            <slot />
        </DisclosurePanel>
    </Transition>
</Disclosure>
