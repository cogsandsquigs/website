<script>
  import profileimg from "$lib/images/profile.png";
  import { title } from "$lib/info";
  import {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Transition,
  } from "@rgossiaux/svelte-headlessui";
  import { ChevronUpIcon } from "@rgossiaux/svelte-heroicons/solid";
</script>

<svelte:head>
  <title>{title + " - About Me!"}</title>
  <meta property="og:title" content={title + " - About Me!"} />
</svelte:head>

<h1 class="transform duration-300 hover:-rotate-12">About Me!</h1>
<img
  class="w-20 sm:w-28 md:w-32 lg:w-40 mx-auto border-2 border-secondary rounded-full"
  src={profileimg}
  alt="My profile."
/>

<p>
  Hey! I'm Ian Pratt, although I go by the online alias <u>cogsandsquigs</u>. I
  program things for fun and profit (although mainly for fun!). Currently, my
  main project is working on my website, and making it look as brilliant and
  fancy as possible. It's also a great way to practice my
  <a href="/blog/tags/webdev">webdev</a> skills!
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
  <Disclosure let:open class="space-y-2">
    <DisclosureButton
      class="flex justify-between min-w-full border-secondary border-2 rounded-sm pt-1 px-2"
    >
      <span>First off. Pronouns?</span>
      <ChevronUpIcon
        style={open ? "transform: rotate(180deg);" : ""}
        class="w-8 p-1 duration-150"
      />
    </DisclosureButton>
    <Transition
      enter="transition duration-100 ease-out"
      enterFrom="transform scale-95 opacity-0"
      enterTo="transform scale-100 opacity-100"
      leave="transition duration-75 ease-out"
      leaveFrom="transform scale-100 opacity-100"
      leaveTo="transform scale-95 opacity-0"
    >
      <DisclosurePanel>
        He/They, and thanks in advance for respecting them!
      </DisclosurePanel>
    </Transition>
  </Disclosure>
  <Disclosure let:open class="space-y-2">
    <DisclosureButton
      class="flex justify-between min-w-full border-secondary border-2 rounded-sm pt-1 px-2"
    >
      <span>Any preference for titles?</span>
      <ChevronUpIcon
        style={open ? "transform: rotate(180deg);" : ""}
        class="w-8 p-1 duration-150"
      />
    </DisclosureButton>
    <Transition
      enter="transition duration-100 ease-out"
      enterFrom="transform scale-95 opacity-0"
      enterTo="transform scale-100 opacity-100"
      leave="transition duration-75 ease-out"
      leaveFrom="transform scale-100 opacity-100"
      leaveTo="transform scale-95 opacity-0"
    >
      <DisclosurePanel>Mr. works just fine!</DisclosurePanel>
    </Transition>
  </Disclosure>
  <Disclosure let:open class="space-y-2">
    <DisclosureButton
      class="flex justify-between min-w-full border-secondary border-2 rounded-sm pt-1 px-2"
    >
      <span>Okay! Anything you like?</span>
      <ChevronUpIcon
        style={open ? "transform: rotate(180deg);" : ""}
        class="w-8 p-1 duration-150"
      />
    </DisclosureButton>
    <Transition
      enter="transition duration-100 ease-out"
      enterFrom="transform scale-95 opacity-0"
      enterTo="transform scale-100 opacity-100"
      leave="transition duration-75 ease-out"
      leaveFrom="transform scale-100 opacity-100"
      leaveTo="transform scale-95 opacity-0"
    >
      <DisclosurePanel
        >Cheesecakes of any and all varieties, elegant and <em>working</em> code,
        and finally, sleep ;)
      </DisclosurePanel>
    </Transition>
  </Disclosure>
  <Disclosure let:open class="space-y-2">
    <DisclosureButton
      class="flex justify-between min-w-full border-secondary border-2 rounded-sm pt-1 px-2"
    >
      <span>Anything you <em>dislike</em>?</span>
      <ChevronUpIcon
        style={open ? "transform: rotate(180deg);" : ""}
        class="w-8 p-1 duration-150"
      />
    </DisclosureButton>
    <Transition
      enter="transition duration-100 ease-out"
      enterFrom="transform scale-95 opacity-0"
      enterTo="transform scale-100 opacity-100"
      leave="transition duration-75 ease-out"
      leaveFrom="transform scale-100 opacity-100"
      leaveTo="transform scale-95 opacity-0"
    >
      <DisclosurePanel>
        Not much, but for starters: Obtrusive and overly-explicit code (I see
        you, java), heights, and those days where you just have nothing to do
        but you want to do something, so you just walk around slightly agitated.
      </DisclosurePanel>
    </Transition>
  </Disclosure>
  <Disclosure let:open class="space-y-2">
    <DisclosureButton
      class="flex justify-between min-w-full border-secondary border-2 rounded-sm pt-1 px-2"
    >
      <span>Oh! What's your setup at home?</span>
      <ChevronUpIcon
        style={open ? "transform: rotate(180deg);" : ""}
        class="w-8 p-1 duration-150"
      />
    </DisclosureButton>
    <Transition
      enter="transition duration-100 ease-out"
      enterFrom="transform scale-95 opacity-0"
      enterTo="transform scale-100 opacity-100"
      leave="transition duration-75 ease-out"
      leaveFrom="transform scale-100 opacity-100"
      leaveTo="transform scale-95 opacity-0"
    >
      <DisclosurePanel>
        Glad you asked! Currently, I'm running a Ryzen 5 3600XT CPU with 16 GB
        of RAM, along with a Radeon RX 6600 GPU, all on an MSI X470 GAMING PLUS
        MAX ATX (oooh look fancy!) motherboard. And of course, it's running
        Manjaro Linux. Because Linux > Windows.
      </DisclosurePanel>
    </Transition>
  </Disclosure>
</div>

<p>
  (P.S.: If you're <em>really</em> into my blog, you might be happy to know that
  it has an <a href="/rss.xml">RSS feed</a>! Enjoy live updates of my blog every
  1-2 millenia.)
</p>
