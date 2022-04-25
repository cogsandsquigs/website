function dateSort(a, b) {
  return (
    new Date(b.metadata.date).getTime() - new Date(a.metadata.date).getTime()
  );
}

export const projects = async () => {
  // grab all of the post files
  const files = import.meta.glob("../routes/projects/*.{md,svelte}");

  // holds all the projects
  let projects = [];

  // puts all the projects in the pages array
  for (let file in files) {
    let p = await files[file]();

    if (file.endsWith("md") && file.slice(19, -3) !== "index") {
      file = file.slice(19, -3); //remove trailing path and .md from file name

      projects.push({
        metadata: { slug: file, ...p.metadata },
        renderer: p.default,
      });
    } else if (file.endsWith("svelte") && file.slice(19, -7) !== "layout") {
      file = file.slice(19, -7); //remove trailing path and .md from file name

      projects.push({
        metadata: { slug: file, ...p.metadata },
        renderer: p.default,
      });
    }
  }

  // Newest first
  projects.sort(dateSort);

  return projects;
};
