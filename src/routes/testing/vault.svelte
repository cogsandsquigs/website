<script lang="ts">
    let x = 0;
</script>

<button
    class="border-2 border-secondary rounded-sm p-2"
    on:click={() => {
        x++;
    }}
>
    {x}
</button>
