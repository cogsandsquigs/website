<!--
    This should not generate JS!!!
-->
<script lang="ts">
    import {
        ChevronRightIcon,
        MenuAlt2Icon,
    } from "@rgossiaux/svelte-heroicons/solid";

    export let title: string = undefined;
    export let arrow: boolean = true;
</script>

<div class="drop">
    <div
        class="btn flex items-center font-bold text-[#fff] underline decoration-2 decoration-secondary"
    >
        {#if title === undefined}
            <MenuAlt2Icon class="icon" />
        {:else}
            {title}
            {#if arrow}
                <div class="turn duration-150">
                    <ChevronRightIcon class="icon" />
                </div>
            {/if}
        {/if}
    </div>
    <div
        class="content grid absolute hidden bg-primary border-2 border-secondary rounded-sm p-3"
    >
        <slot>...</slot>
    </div>
</div>

<style>
    .drop:hover .content {
        display: block !important;
        opacity: 100;
    }

    .drop .content {
        opacity: 0;
        transition-timing-function: ease-in-out;
        transition: opacity 0.15s;
    }

    .drop:hover .btn .turn {
        transform: rotate(90deg);
    }
</style>
