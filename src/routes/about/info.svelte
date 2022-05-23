<script lang="ts">
    import { title } from "$lib/info";
    import {
        Disclosure,
        DisclosureButton,
        DisclosurePanel,
        Transition,
    } from "@rgossiaux/svelte-headlessui";
    import { ChevronUpIcon } from "@rgossiaux/svelte-heroicons/solid";
</script>

<svelte:head>
    <title>{title + " - About Me!"}</title>
    <meta property="og:title" content={title + " - About Me!"} />
</svelte:head>

<h1 class="transform duration-300 hover:-rotate-12">Info</h1>
<div class="space-y-4">
    <Disclosure let:open class="space-y-2">
        <DisclosureButton
            class="flex justify-between min-w-full border-secondary border-2 rounded-sm pt-1 px-2"
        >
            <span>First off. Pronouns?</span>
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
                He/They, and thanks in advance for respecting them!
            </DisclosurePanel>
        </Transition>
    </Disclosure>
    <Disclosure let:open class="space-y-2">
        <DisclosureButton
            class="flex justify-between min-w-full border-secondary border-2 rounded-sm pt-1 px-2"
        >
            <span>Any preference for titles?</span>
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
            <DisclosurePanel>Mr. works just fine!</DisclosurePanel>
        </Transition>
    </Disclosure>
</div>
