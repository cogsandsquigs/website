function dateSort(a, b) {
  return (
    new Date(b.metadata.date).getTime() - new Date(a.metadata.date).getTime()
  );
}

export async function posts() {
  // grab all of the post files
  const files = import.meta.glob("$posts/*.md");

  // holds all the posts
  let posts = [];

  // puts all the posts in the pages array
  for (let file in files) {
    let p = await files[file]();
    posts.push({
      metadata: { ...p.metadata, slug: file.slice(11, file.indexOf(".md")) },
      renderer: p.default,
    });
  }

  // Newest first
  posts.sort(dateSort);

  return posts;
}
