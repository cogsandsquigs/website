<script lang="ts">
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
    <details>
        <summary>Trace (if ya wanna know more)</summary>
        <pre>{error.stack}</pre>
    </details>
{/if}
