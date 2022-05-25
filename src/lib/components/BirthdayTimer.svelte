<script lang="ts">
    import dayjs from "dayjs";
    import { ConfettiExplosion } from "svelte-confetti-explosion";

    const month = 12;
    const day = 7;
    const time = "00:00:00";

    let now = dayjs();

    setInterval(() => {
        now = dayjs();
    }, 1);

    let bday = dayjs(`${now.year()}-${month}-${day} ${time}`);

    if (
        now.unix() >= dayjs(`${now.year()}-${month}-${day + 1} ${time}`).unix()
    ) {
        bday = dayjs(`${now.year() + 1}-${month}-${day} ${time}`);
    }
</script>

{#if bday.diff(now) > 0}
    {bday.diff(now)}
{:else}
    Happy birthday me!
    <ConfettiExplosion particleCount={200} />
{/if}
