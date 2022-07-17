<script context="module">
    /** @type {import('@sveltejs/kit').Load} */
    export const load = async ({ error, status, params }) => {
        let tip = null;

        if (status === 404) {
            error.message = `Post "${params.slug}" does not exist`;
            tip =
                "There are plenty of other posts you could have clicked on. How did you even get here?";
        } else if (String(status)[0] === "5") {
            tip =
                "Howabout you <a href='https://github.com/cogsandsquigs/cogsandsquigs/issues/new' target='_blank'>report an issue</a>. Seems like this is a me problem, not a you problem ;)";
        }

        return {
            props: {
                status: status,
                message: error.message,
                tip: tip,
                trace: error.stack,
            },
        };
    };
</script>

<script lang="ts">
    import Disclosure from "$lib/components/Disclosure.svelte";

    export let status: string;
    export let message: string;
    export let tip: string;
    export let trace: string;
</script>

<h1 class="text-center">{status}</h1>
<h2 class={tip ? "mb-0" : ""}>{message}</h2>

{#if tip}
    <h4 class="py-1">Here's a tip: {@html tip}</h4>
{/if}

{#if trace}
    <Disclosure title="Trace (if ya wanna know more)">
        <pre>{trace}</pre>
    </Disclosure>
{/if}
