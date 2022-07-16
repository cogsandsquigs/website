<script lang="ts">
    import Dropdown from "$components/Dropdown.svelte";
</script>

<nav class="space-y-0 bg-primary my-2">
    <div class="px-4 py-1">
        <div class="flex box-border justify-evenly items-center">
            <a href="/">Index</a>
            <a href="/about">About</a>
            <Dropdown title="Socials">
                <a href="https://github.com/cogsandsquigs" rel="me">Github</a>
            </Dropdown>
        </div>
    </div>
    <hr />
</nav>
