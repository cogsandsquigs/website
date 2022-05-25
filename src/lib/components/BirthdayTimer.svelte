<script lang="ts">
  import dayjs from "dayjs";

  let now = dayjs();
  let bday = dayjs(`${now.year()}-12-07`);

  setInterval(() => {
    now = dayjs();
  }, 1000);

  $: months = bday.diff(now, "month");
  $: days = bday.diff(
    dayjs(`${now.year()}-${now.month() + months}-${now.day()}`),
    "day"
  );
  $: hours = bday.diff(now, "hour");
  $: minutes = bday.diff(now, "minutes");
  $: seconds = bday.diff(now, "seconds");
</script>

{months}
{dayjs(`${now.year()}-${now.month() + months}-07`).toString()}
{days}
{hours}
{minutes}
{seconds}
