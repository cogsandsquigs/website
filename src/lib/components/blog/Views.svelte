<script lang="ts">
    let views: number = 0;

    let classes: string = ""; // allows us to add classes to this component
    export { classes as class }; // have to do this because otherwise js/ts gets upset at us using `class` as a variable name
</script>

<p class={classes}>{views} views</p>
