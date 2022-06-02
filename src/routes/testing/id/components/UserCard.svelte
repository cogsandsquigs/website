<script lang="ts">
  export let name: string = "...";
  export let pfp: string = undefined;
</script>

<div class="w-60 h-80 border-2 border-secondary rounded-lg">
	<img
    class="mx-auto w-20 h-20 border-2 border-secondary rounded-full"
    src={pfp}
    alt={"profile of " + name} 
  />
</div>