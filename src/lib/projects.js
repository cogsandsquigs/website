function dateSort(a, b) {
  return new Date(b.date).getTime() - new Date(a.date).getTime();
}

export const projects = async () => {
  const modules = import.meta.glob("../routes/projects/*.{md,svelte}");

  const projects = [];

  await Promise.all(
    Object.entries(modules).map(async ([slug, module]) => {
      const { metadata } = await module();

      if (slug.endsWith("md")) {
        slug = slug.slice(19, -3); //remove trailing path and .md from file name

        projects.unshift({ slug, ...metadata });
      } else if (slug.endsWith("svelte") && slug.slice(19, -7) != "layout") {
        slug = slug.slice(19, -7); //remove trailing path and .md from file name

        projects.unshift({ slug, ...metadata });
      }
    })
  );

  // Newest first
  projects.sort(dateSort);

  return projects;
};
