<script lang="ts">
  import {
    Popover,
    PopoverButton,
    PopoverPanel,
    Transition
  } from "@rgossiaux/svelte-headlessui";

  import {
    ChevronRightIcon,
    MenuAlt2Icon
  } from "@rgossiaux/svelte-heroicons/solid";

  export let title: string = undefined;
  export let arrow: boolean = true;
</script>

<Popover let:open>
  <PopoverButton class="flex items-center font-bold text-[#fff] underline decoration-2 decoration-secondary">
    {#if title === undefined}
        <MenuAlt2Icon class="icon" />
      {:else}
        {title}
        {#if arrow}
          <div class="turn duration-150">
            <ChevronRightIcon
              class="icon duration-150"
              style={open ? "transform: rotate(90deg);" : ""}
            />
          </div>
        {/if}
      {/if}
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
    <PopoverPanel class="p-2 absolute bg-primary border-2 border-secondary rounded-sm">
      <slot>...</slot>
    </PopoverPanel>
  </Transition>
</Popover>