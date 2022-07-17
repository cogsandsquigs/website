<script context="module">
    /** @type {import('@sveltejs/kit').Load} */
    export const load = async ({ error, status }) => {
        return {
            props: {
                status: status,
                message: error.message,
                trace: error.stack || "",
            },
        };
    };
</script>

<script>
    import Disclosure from "$lib/components/Disclosure.svelte";

    export let status;
    export let message;
    export let trace;
</script>

<h1 class="text-center">{status}</h1>
<h2>{message}</h2>
<Disclosure title="<h3 class='p-0 m-0'>Trace (if ya wanna know more)</h3>">
    <pre>{trace}</pre>
</Disclosure>
