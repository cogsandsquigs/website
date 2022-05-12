<script>
  import Scorecard from "$lib/components/Scorecard.svelte";
  import Test from "$lib/components/Test.svelte";
  import { writable } from "svelte/store";

  const user = writable({
    name: "Ian Pratt",
    score: 91
  });
</script>
<Scorecard user={user}/>