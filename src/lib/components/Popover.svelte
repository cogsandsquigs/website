<script lang="ts">
  import {
    Popover,
    PopoverButton,
    PopoverPanel,
    Transition,
  } from "@rgossiaux/svelte-headlessui";

  export let title: string = "Menu";
</script>

<Popover class="text-left max-w-auto" style="position: relative;">
  <PopoverButton as="a" class="cursor-pointer">
    {title}
  </PopoverButton>

  <Transition
    enter="transition duration-200 ease-out"
    enterFrom="transform scale-95 opacity-0"
    enterTo="transform scale-100 opacity-100"
    leave="transition duration-150 ease-out"
    leaveFrom="transform scale-100 opacity-100"
    leaveTo="transform scale-95 opacity-0"
  >
    <PopoverPanel style="position: absolute; z-index: 10;">
      <div
        class="bg-primary p-3 border-2 border-secondary rounded-sm panel-contents"
      >
        <slot>Put something here!</slot>
      </div>
    </PopoverPanel>
  </Transition>
</Popover>
