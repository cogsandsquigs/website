<script lang="ts" context="module">
  // generate no js for this page
  export const hydrate = false;
</script>

<script lang="ts">
  import { title } from "$lib/info";
  import Disclosure from "$components/Disclosure.svelte";
  import ProfileImg from "$components/ProfileImg.svelte";

  let infos = [
    {
      title: "First off. Pronouns?",
      text: "He/They, and thanks in advance for respecting them!",
    },
    {
      title: "Any preference for titles?",
      text: "Mr. works just fine!",
    },
    {
      title: "Okay! Anything you like?",
      text: `Cheesecakes of any and all varieties, elegant and working code, and finally, sleep ;)`,
    },
    {
      title: "Anything you <em>dislike</em>?",
      text: `Not much, but for starters: Obtrusive and overly-explicit code (I see you,
    java), heights, and those days where you just have nothing to do but you
    want to do something, so you just walk around slightly agitated.`,
    },
    {
      title: "Oh and, what's your setup at home?",
      text: `Glad you asked! Currently, I'm running a Ryzen 5 3600XT CPU with 16 GB of
    RAM, along with a Radeon RX 6600 GPU, all on an MSI X470 GAMING PLUS MAX ATX
    (oooh look fancy words!) motherboard. And of course, it's running Manjaro Linux.
    Because Linux > Windows.`,
    },
    {
      title: "Anything you're working on right now?",
      text: `Nothing much, really. I'm not really doing anything besides making my
    website cooler ;)`,
    },
  ];
</script>

<svelte:head>
  <title>{title + " - About Me!"}</title>
  <meta property="og:title" content={title + " - About Me!"} />
</svelte:head>

<div class="flex items-center w-fill">
  <h1 class="m-0">About Me!</h1>

  <div class="flex flex-1 justify-center">
    <ProfileImg />
  </div>
</div>

<p>
  Hey! I'm Ian Pratt, although I go by the online alias <u>cogsandsquigs</u>. I
  program things for fun and profit (although mainly for fun!). Currently, my
  main project is working on my website, and making it look as brilliant and
  fancy as possible. It's also a great way to practice my
  <a href="/tags/webdev">webdev</a> skills!
</p>

<p>
  It may be obvious at this point, but I built this whole site from scratch! I
  really like programming things (especially things I can see!), and I plan to
  have a job in computer science in the future!
</p>

<p>
  Check out the rest of my site for more stuff I'm doing! Or, if it's your
  thing, take a look at my <a href="https://github.com/cogsandsquigs"
    >Github page</a
  > if you're into looking at someone else's code.
</p>

<p>Anyways, on to some rapid-fire information blasting!</p>

<div class="space-y-4">
  {#each infos as info}
    <Disclosure title={info.title}>{@html info.text}</Disclosure>
  {/each}
</div>

<p>
  (P.S.: If you're <em>really</em> into my blog, you might be happy to know that
  it has an <a href="/rss.xml">RSS feed</a>! Enjoy live updates of my blog every
  1-2 millenia.)
</p>
