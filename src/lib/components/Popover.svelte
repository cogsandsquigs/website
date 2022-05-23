<script lang="ts">
    import { subtitle, title } from "$lib/info";

    import {
        Popover,
        PopoverButton,
        PopoverPanel,
        Transition,
    } from "@rgossiaux/svelte-headlessui";
</script>

<Popover class="text-left max-w-auto" style="position: relative;">
    <PopoverButton
        class="transform duration-300 hover:rotate-12 font-bold underline decoration-secondary decoration-2"
    >
        Menu
    </PopoverButton>

    <Transition
        enter="transition duration-100 ease-out"
        enterFrom="transform scale-95 opacity-0"
        enterTo="transform scale-100 opacity-100"
        leave="transition duration-75 ease-out"
        leaveFrom="transform scale-100 opacity-100"
        leaveTo="transform scale-95 opacity-0"
    >
        <PopoverPanel style="position: absolute; z-index: 10;">
            <div
                class="bg-primary p-3 border-2 border-secondary rounded-sm panel-contents"
            >
                <a href="/">Index</a>
                <a href="/about">About</a>
                <a href="/blog">Blog</a>
                <a href="https://github.com/cogsandsquigs">Github</a>
            </div>
        </PopoverPanel>
    </Transition>
</Popover>
