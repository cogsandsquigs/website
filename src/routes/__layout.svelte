<script>
    import "$styles/globals.css";
    import "victormono";
    import { description } from "$lib/info";
    import {
        Popover,
        PopoverButton,
        PopoverPanel,
        Transition,
    } from "@rgossiaux/svelte-headlessui";
</script>

<svelte:head>
    <meta name="description" content={description} />
</svelte:head>

<body
    class="max-w-none text-md sm:text-lg md:text-xl bg-primary prose prose-invert prose-a:underline prose-a:decoration-secondary prose-a:decoration-2 prose-a:font-bold prose-hr:border-[1px] prose-hr:border-secondary"
>
    <nav class="sticky top-0 bg-primary">
        <ul class="flex justify-evenly list-none p-0">
            <li class="mr-4">
                <a href="/">home</a>
            </li>
            <li class="mr-4">
                <a href="/about">about</a>
            </li>
            <li class="mr-4">
                <a href="/blog">blog</a>
            </li>
            <li class="mr-4">
                <Popover>
                    <PopoverButton
                        class="font-extrabold text-[#fff] underline decoration-secondary decoration-2"
                    >
                        socials
                    </PopoverButton>
                    <!-- This example uses Tailwind's transition classes -->
                    <Transition
                        enter="transition duration-100 ease-out"
                        enterFrom="transform scale-95 opacity-0"
                        enterTo="transform scale-100 opacity-100"
                        leave="transition duration-75 ease-out"
                        leaveFrom="transform scale-100 opacity-100"
                        leaveTo="transform scale-95 opacity-0"
                    >
                        <PopoverPanel
                            class="p-2 bg-primary border-2 border-secondary rounded-sm absolute z-10"
                        >
                            <a href="https://github.com/cogsandsquigs">
                                Github
                            </a>
                        </PopoverPanel>
                    </Transition>
                </Popover>
            </li>
        </ul>
        <hr class="mx-1 my-0" />
    </nav>

    <div class="px-2.5 mx-auto my-4 max-w-prose scrollbar-none">
        <slot />
    </div>
</body>
