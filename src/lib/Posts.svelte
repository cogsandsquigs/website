<script context="module">
  const posts = import.meta.glob("./src/routes/posts/*.md");

  let body = [];

  for (const path in posts) {
    body.push(posts[path]().then(({metadata}) => {path, metadata})).sort((a, b) => {new Date(a.metadata.date) - new Date(b.metadata.date)});
  }
  
  /** @type {import('@sveltejs/kit').Load} */
  export async function load({ page, fetch }) {
    const posts = await Promise.all(body)
    return {
      props: {
        posts
      }
    };
  }
</script>

<div>
  {#each posts as path, metadata}
    <h1><a href={path}>{metadata.title}</a></h1>
    <h4>Published on {metadata.date}</h4>
  {/each}
</div>