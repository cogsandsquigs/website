+++
date = 2022-12-02T04:00:00Z
description = "Challenging myself to actually complete it this year"
draft = true
series = ["advent of code 2022"]
tags = ["rust", "advent of code"]
title = "Advent of code 2022 - Day 1"

+++
Hey!

As some of you may know, today marks the start of the _advent of code_! It's an annual programming puzzle game/competition, lasting 25 days from December 1st to the 25th.

Last year, I only got to the 8th day before quitting. I wasn't terribly motivated, and I had some other things going on as well. This year, I plan on trying to do each day, from start to finish. And on top of that, I plan on doing it all in [Rust](https://rust-lang.org), as well.

Will I succeed? Maybe! (But probably not)

The link to today's problem is [here](https://adventofcode.com/2022/day/1), so let's get started!

First, I knew we would need to parse some input, so I created a function, `read_file_string`, to read the input.

```rs
use std::io::Result;
use utils::files::read_file_string;

fn main() -> Result<()> {
    let input = read_file_string("day-01/input.txt")?;
```

Then, I split the input at each set of two newlines (`\n\n`), storing the result as an iterator. I mapped over said iterator, spiting again over a single newline (`\n`), converting all those newly split strings into numbers, adding them up, and putting the result into a vector.

```rs
// Get the elves' calorie counts
   let mut elves: Vec<usize> = input
        .split("\n\n")
        .map(|elf| elf.split("\n").map(|count| count.parse::<usize>()).sum())
        .collect::<Result<_, _>>()?;
```

Now that we have all the elves, we can sort them from highest to lowest.

```rs
	// Sort the elves from highest to lowest
    	elves.sort_by(|a, b| {
        	// Flip from regular `a.cmp(b)` to sort highest to lowest/descending, meaning
        	// we get the elf w/ highest calorie count by indexing at 0.
	        b.cmp(&a)
    });
```

Since we sorted from highest to lowest, we only need to get the first element for the answer to puzzle 1.

```rs
	println!("Puzzle 1 answer: {}", elves[0]);
```

And for the answer to puzzle 2, we need to get the top 3. To get the top 3, we can use `take`.

```rs
    println!(
        "Puzzle 2 answer: {}",
        elves.into_iter().take(3).sum::<usize>()
    );

    Ok(())
}
```

This is the final answer to our problem! That wasn't so bad, right?

Let's hope the next day is easy as well (or even easier!).