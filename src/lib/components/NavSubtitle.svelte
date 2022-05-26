<script lang="ts">
    import { subtitle } from "$lib/info";
    import { ConfettiExplosion } from "svelte-confetti-explosion";

    let now = new Date(Date.now());
</script>

<h3>
    {#if now.getMonth() === 11 && now.getDate() === 7}
        <!-- if it's my birthday, december 7th-->
        <ConfettiExplosion
            particleCount={200}
            colors={["red", "orange", "yellow", "green", "blue", "purple"]}
        />
        Happy birthday me!
    {:else if now.getMonth() === 5}
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
