<script lang="ts">
    import {
        Disclosure,
        DisclosureButton,
        DisclosurePanel,
        Transition,
    } from "@rgossiaux/svelte-headlessui";
    import { ChevronUpIcon } from "@rgossiaux/svelte-heroicons/solid";

    export let title: string = "";
    let text: string;
</script>

<!-- I have to do this hack to get the text value -->
<span contenteditable="true" bind:textContent={text} class="hidden">
    <slot />
</span>

<Disclosure let:open class="space-y-2">
    <DisclosureButton
        class="flex justify-between min-w-full border-secondary border-2 rounded-sm pt-1 px-2"
    >
        <span>{@html title}</span>
        <ChevronUpIcon
            style={open ? "transform: rotate(180deg);" : ""}
            class="w-8 p-1 duration-150"
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
            {text}
        </DisclosurePanel>
    </Transition>
</Disclosure>
