---
title: Hello World!
date: 2022-02-07
---

<script>
    import Katex from "$lib/Katex.svelte"
</script>

Hi! This is my testing page. What does that mean? well,
it means this is where all my website features are tested.

At the top, you should see something like "Hello World!
Posted on whatever date". Below, you should see a code
block of javascript, colored in correctly.

```js
let x = "hello world!";

function test() {
  console.log(x);
}

test();
```

Below, you should see some <Katex math=\KaTeX /> being formatted correctly
and displayed correctly as math equations! This should describe the process
of solving the area between the curves <Katex math="x^2"/> and <Katex math="3x + 2"/>.

<Katex math={"f(x) = x^2"} inline={false}/>

<Katex math={"g(x) = 3x + 2"} inline={false}/>

<Katex math={"\\int_0^1{g(x)}-\\int_0^1{f(x)}"} inline={false}/>

<Katex math={"\\int_0^1{3x + 2}-\\int_0^1{x^2}"} inline={false}/>

<Katex math={"[\\frac{3x^2}{2}+2x]|\_0^1-[\\frac{x^3}{3}]|\_0^1"} inline={false}/>

<Katex math={"(\\frac{3(1)^2}{2}+2(1)-\\frac{3(0)^2}{2}+2(0))-(\\frac{(1)^3}{3}-\\frac{(0)^3}{3})"} inline={false}/>

<Katex math={"\\frac{7}{2}-\\frac{1}{3}"} inline={false}/>

<Katex math={"\\frac{21}{6}-\\frac{2}{6}"} inline={false}/>

<Katex math={"\\frac{19}{6}"} inline={false}/>

notes: maybe use [alex](https://alexjs.com)?
