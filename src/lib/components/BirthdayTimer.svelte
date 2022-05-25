<script lang="ts">
  import { onMount } from "svelte";
  import dayjs from "dayjs";
  import objectSupport from "dayjs/plugin/objectSupport";
  dayjs.extend(objectSupport);

  let now = dayjs();
  let bday = dayjs({ year: now.year(), month: 11, day: 7 });

  let countdown = 10;
  let timer;
  $: {
    if (countdown === 0) {
      if (timer) {
        clearInterval(timer);
        timer = null;
      }
    }
  }
  onMount(() => {
    timer = setInterval(() => {
      countdown -= 1;
    }, 1000);
  });
</script>

{bday.format("MM/DD/YYYY")}
