<script>
  // @ts-nocheck
  // have to do this bc svelte-countdown
  // doesn't have ts bindings.
  // TODO: implement own component

  import Countdown from "svelte-countdown";
  import dayjs from "dayjs";
</script>

<Countdown
  from={`${dayjs().year()}-12-07 00:00:00`}
  dateFormat="YYYY-MM-DD H:m:s"
  zone="America/Chicago"
  let:remaining
>
  <div class="whatever">
    {#if remaining.done === false}
      <span>{remaining.years} years</span>
      <span>{remaining.months} months</span>
      <span>{remaining.weeks} weeks</span>
      <span>{remaining.days} days</span>
      <span>{remaining.hours} hours</span>
      <span>{remaining.minutes} minutes</span>
      <span>{remaining.seconds} seconds</span>
    {:else}
      <span>The time has come!</span>
    {/if}
  </div>
</Countdown>
