<script lang="ts">
  export let front: string = "Hello";
  export let back: string = "World!";
</script>

<div class="bg-gradient-to-tr from-secondary to-accent rounded-xl w-52 h-72">
  <div class="front flex flex-1 justify-center items-center mb-6 w-full h-full">
    <h3 class="m-0">{front}</h3>
  </div>
</div>