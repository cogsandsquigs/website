<script lang="ts" context="module">
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
    import { title } from "$lib/info";

    export let error: Error;
    export let status: number;
</script>

<svelte:head>
    <title>{title + " - " + status}</title>
    <meta property="og:title" content={title + " - " + status} />
</svelte:head>

<ErrorPage {error} {status} />
