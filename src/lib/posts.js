function dateSort(a, b) {
  return (
    new Date(b.metadata.date).getTime() - new Date(a.metadata.date).getTime()
  );
}

export const posts = async () => {
  // grab all of the post files
  const files = import.meta.glob("/src/posts/*.md");

  // holds all the posts
  let posts = [];

  // puts all the posts in the pages array
  for (let file in files) {
    let p = await files[file]();
    posts.push({ metadata: p.metadata, renderer: p.default });
  }

  // Newest first
  posts.sort(dateSort);

  return posts;
};
