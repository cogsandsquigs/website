<script lang="ts">
    import { subtitle } from "$lib/info";
    import dayjs from "dayjs";
    import { ConfettiExplosion } from "svelte-confetti-explosion";
</script>

<h3>
    {#if dayjs().month() === 11 && dayjs().date() === 7}
        <!-- if it's my birthday, december 7th-->
        <ConfettiExplosion
            particleCount={200}
            colors={["red", "orange", "yellow", "green", "blue", "purple"]}
        />
        Happy birthday me!
    {:else if dayjs().month() === 5}
        <!-- if it is june -->
        <ConfettiExplosion
            particleCount={200}
            colors={["red", "orange", "yellow", "green", "blue", "purple"]}
        />
        Happy pride month!
        <!-- otherwise, do nothing -->
    {:else}
        {subtitle}
    {/if}
</h3>
