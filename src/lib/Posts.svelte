<script context="module">
  const posts = import.meta.glob("./src/routes/posts/*.md");

  let body = [];

  for (const path in posts) {
    body.push(posts[path]().then(({metadata}) => metadata));
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
  {#each posts as {title, date}}
    <h1><a href={path}>{title}</a></h1>
    <h4>Published on {date}</h4>
  {/each}
</div>