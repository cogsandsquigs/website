---
title: "Projects"
isPrivate: true
---

<script context="module">
  /** @type {import("@sveltejs/kit").Load} */
  export const load = async ({ fetch }) => {
    const projects = await fetch("/api/projects.json");
    const allprojects = await projects.json();

    return {
      props: {
        projects: allprojects,
      },
    };
  };
</script>

<script>
  export let projects;
  const locale = "en-US";
  const options = { weekday: "long", year: "numeric", month: "long", day: "numeric" };
</script>

<svelte:head>

  <title>Ian Pratt | Projects</title>
</svelte:head>

# **Projects**

{#each projects as project}

## [{project.title}](/projects/{project.slug})

#### Initially created on {new Date(project.date).toLocaleDateString(locale, options)}

{/each}
