<script>
import { pages } from "$lib/pages";
</script>

<nav>
	<div class="wrap">
		<div class="links">
      {#await pages()}
        <h3>loading...</h3>
      {:then pgs}
        {#each pgs as page}
          {#if !page.isPrivate}
            <a class="link" href={"/" + page.slug}>{page.title}</a>
          {/if}
        {/each}
      {:catch error}
        <p>ERROR: {error}</p>
      {/await}
    </div>
		<div>
			<h1>Ian Pratt</h1>
			<h3>Just a gay programmer</h3>
		</div>
	</div>
</nav>
<hr />

<style>
  .wrap {
    display: flex;
    box-sizing: border-box;
    justify-content: space-between;
    align-items: center;
  }

  .links > * {
    font-size: 120%;
  }
  .link {
    padding-right: 1.25em;
    padding-bottom: 1em;
  }
</style>
