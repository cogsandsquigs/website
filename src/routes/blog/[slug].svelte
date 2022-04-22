<script context="module">
  export async function load({ fetch, url, params }) {
    console.log(params.slug);

    const files = import.meta.glob("/posts/*.md");

    console.log(files);

    let pages = [];

    for (file in files) {
      pages.push(await files[file]().then(({ metadata }) => metadata));
    }

    console.log(pages);

    return {
      props: {},
    };
  }
</script>

<script>
  export let render;
  export let metadata;
</script>
