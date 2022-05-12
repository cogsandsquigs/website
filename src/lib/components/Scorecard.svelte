<script>
  export let user;
</script>

<div class="scorecard">
  <h1>{$user.name}</h1>
  <h2>Score: {$user.score}</h2>
</div>

<style>
  .scorecard {
    border: 0.15em solid hsl(220, 14%, 71%);
    padding: 1em;
    border-radius: 1em;
    width: max-content;
  }
</style>