export const pages = async () => {
  // grab all of the page files
  const files = import.meta.glob("/src/routes/{index.md,*.md,*/index.md}");

  // holds all the pages
  let pages = [];
  let index;

  // puts all the pages in the pages array
  for (let file in files) {
    let p = await files[file]();
    if (p.metadata.title == "Index") {
      index = {
        metadata: { slug: file.slice(12, -3), ...p.metadata },
        renderer: p.default,
      };
    } else {
      pages.push({
        metadata: { slug: file.slice(12, -3), ...p.metadata },
        renderer: p.default,
      });
    }
  }

  pages.unshift(index);

  return pages;
};
