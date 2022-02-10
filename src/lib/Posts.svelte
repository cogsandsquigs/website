<script context="module">
  /** @type {import('@sveltejs/kit').Load} */
  export async function load({ page, fetch }) {
		const response = await fetch('/posts.json')

		const posts = await response.json().posts;
    
		return {
			props: {
				posts
			}
		};
	}
</script>

<script>
  export let posts;
</script>

<div>
  {#each posts as post}
    <h1><a rel="prefetch" href="/posts/{post.metadata.title}">{post.metadata.title}</a></h1>
    <h4>Published on {post.metadata.date}</h4>
  {/each}
</div>