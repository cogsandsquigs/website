<script lang="ts" context="module">
    // add js to the page
    export const hydrate = true;
</script>

<script lang="ts">
    let x = 0;
</script>

<button
    class="p-2 border-2 border-secondary rounded-sm"
    on:click={() => {
        x++;
        console.log(x);
    }}>{x}</button
>
