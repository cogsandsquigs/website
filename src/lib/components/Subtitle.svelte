<script lang="ts">
    import { subtitle } from "$lib/info";
    import { ConfettiExplosion } from "svelte-confetti-explosion";

    let now = new Date(Date.now());
</script>

{#if now.getMonth() === 11 && now.getDate() === 7}
    <!-- if it's my birthday, december 7th-->

    Happy birthday me!
    <ConfettiExplosion
        particleCount={200}
        colors={["red", "orange", "yellow", "green", "blue", "purple"]}
    />
{:else if now.getMonth() === 4}
    <!-- if it is june -->

    Happy pride month!
    <ConfettiExplosion
        particleCount={200}
        colors={["red", "orange", "yellow", "green", "blue", "purple"]}
    />
    <!-- otherwise, do nothing -->
{:else}
    {subtitle}
{/if}
