<script lang="ts">
    import Disclosure from "$lib/components/Disclosure.svelte";

    export let error: Error;
    export let status: number;

    let tip = null;

    if (status === 404) {
        tip = "Try looking elsewhere, wouldya?";
    } else if (String(status)[0] === "5") {
        tip =
            "Howabout you <a href='https://github.com/cogsandsquigs/cogsandsquigs/issues/new' target='_blank'>report an issue</a>. Seems like a me problem, not a you problem ;)";
    }
</script>

<h1 class="text-center">{error.name}: {status}</h1>
<h2 class={tip ? "mb-0" : ""}>{error.message}</h2>

{#if tip}
    <h4 class="py-1">Here's a tip: {@html tip}</h4>
{/if}

{#if error.stack}
    <Disclosure title="Trace (if ya wanna know more)">
        <pre>{error.stack}</pre>
    </Disclosure>
{/if}
