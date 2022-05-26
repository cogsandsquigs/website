<script lang="ts">
  import {
    Popover,
    PopoverButton,
    PopoverPanel,
    Transition,
  } from "@rgossiaux/svelte-headlessui";

  import {
    ChevronRightIcon,
    MenuAlt2Icon,
  } from "@rgossiaux/svelte-heroicons/solid";

  export let title: string = undefined;
  export let arrow: boolean = true;
</script>

<Popover let:open class="text-left max-w-auto" style="position: relative;">
  <PopoverButton
    as="h4"
    class="flex items-center cursor-pointer m-0 underline decoration-2 decoration-secondary"
  >
    {#if title === undefined}
      <MenuAlt2Icon class="icon" />
    {:else}
      {title}
      {#if arrow}
        <ChevronRightIcon
          style={open ? "transform: rotate(90deg);" : ""}
          class="icon duration-150"
        />
      {/if}
    {/if}
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
