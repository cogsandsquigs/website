<script context="module">
    /** @type {import('@sveltejs/kit').Load} */
    export const load = ({ error, status }) => {
        return {
            props: {
                status: status,
                error: error,
            },
        };
    };
</script>

<script lang="ts">
    import ErrorPage from "$components/ErrorPage.svelte";

    export let error: Error;
    export let status: number;
</script>

<ErrorPage {error} {status} />
