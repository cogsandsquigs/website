<script context="module">
  export const metadata = {
    title: "A Wordle solver",
    date: "2022-02-14",
  };
</script>

<script>
  import fs from "fs";

  let data = fs.readFileSync(
    "../../lib/projects/wordle-solver/words.txt",
    "utf8"
  );
</script>

{data}
