<script context="module">
    export function load({ error, status }) {
        return {
            props: {
                error,
                status,
            },
        };
    }
</script>

<script>
    import Error from "$components/Error.svelte";

    export let status;
    export let error;
</script>

<svelte:head>
    <title>Ian Pratt | {status}</title>
</svelte:head>

<div class="grid justify-center">
    <h1 class="text-center">{status}</h1>
    <Error>
        {error.message}
    </Error>
</div>
