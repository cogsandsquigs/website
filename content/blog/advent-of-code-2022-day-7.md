---
date: "2022-12-07T07:00:00Z"
description: It's my birthday, so I deserve a puzzle, as a treat :)
series: advent of code 2022
tags:
  - status update
  - rust
  - advent of code
title: Advent of code 2022 - Day 7
draft: false
---

Heyo!

Sorry for being extra sporadic with my advent of code posts. Between home and school life, as well as a general lack of motivation and dealing with shit, I haven't had much time. However, I thought you guys (the .04 people reading this) deserved an update.

So, will I post the solution for this? Probably not. The code is _really_ messy and ugly and I don't want to go through it a second time, even though it would probably benefit me as a programmer. I'll most likely post a solution here for day 8, 9, 10 or 11 in the future (depending on how much work I have).

And as for all other things, I'm doing pretty well for myself. School is going well, things are getting done (although I'm stalling on some personal projects at the moment), etc. etc.

I don't really have anything else to say right now, so goodbye for now :3

---

It's several hours later, and after a 5-hour "nap", I feel (somewhat) up to the task of explaining my code. Be warned, I made this from 11-1 in the morning (right around when the AoC puzzle released).

Firstly, we need to represent the files and folders with something. I choose to make these structs to satisfy that need:

```rs
#[derive(Clone, Debug)]
struct Folder {
    pub folders: HashMap<String, Folder>,
    pub files: HashMap<String, File>,
}

impl Folder {
    fn size(&self) -> usize {
        self.files.iter().map(|(_, file)| file.size).sum::<usize>()
            + self
                .folders
                .iter()
                .map(|(_, folder)| folder.size())
                .sum::<usize>()
    }
}

#[derive(Clone, Debug)]
struct File {
    pub size: usize,
}
```

Note that the `size` function for a `Folder` is recursive, as we have to traverse the folders below us, and get their sizes as well.

The main trouble is parsing this code. To do this, I created a function called `traverse`, which traverses the input, constructing a `Folder` from it. This is the most messy part of all of the code. I'll try to break it down for you guys:

```rs
fn traverse(lines: &mut Lines, mut root: Folder) -> Folder {
    loop {
        let Some(current) = lines.next() else {
            break
        };

        if current.starts_with("$ ls") {
            let mut consumed_n = 0;

            for line in (lines.clone()).into_iter() {
                consumed_n += 1;
                if line.starts_with("$") {
                    break;
                } else if line.starts_with("dir ") {
                    let name = line.split(" ").nth(1).unwrap().to_string();

                    root.folders.insert(
                        name.clone(),
                        Folder {
                            folders: HashMap::new(),
                            files: HashMap::new(),
                        },
                    );
                } else {
                    let mut sepr = line.split(" ");
                    let (size, name) = (
                        sepr.next().unwrap().parse::<usize>().unwrap(),
                        sepr.next().unwrap().to_string(),
                    );

                    root.files.insert(name.clone(), File { size });
                }
            }

            for _ in 0..consumed_n - 1 {
                lines.next();
            }
        } else if current.starts_with("$ cd ..") {
            break;
        } else if current.starts_with("$ cd") {
            let name = current[5..].to_string();
            let dir = traverse(lines, root.folders.get(&name).unwrap().clone());

            root.folders.insert(name, dir);
        } else {
            break;
        }
    }

    root
}
```

If the input has ended, we `break` out of the loop and return the `root` folder. Simple enough, right?

Next, if we find an [`ls`](https://en.wikipedia.org/wiki/Ls) command, we know we have to parse all of the output lines (until we reach another command, which is why we clone the lines, and then consume `consumed_n-1` of them after the fact). We iterate over each line, checking if it's a folder or a file, and add it to the `root`.

If it's not an `ls` command, we check if it's a [`cd`](<https://en.wikipedia.org/wiki/Cd_(command)>) command. Specifically, if we are `cd`ing to `..`, the upper directory, we break out of the loop and return `root`. Otherwise, we recurse, and replace the folder we are `cd`ing into with the `traverse`d result. If anything else happens, we break out.

Whew! That was a lot of code, and I'm sorry if this isn't as readable as you hoped. Don't worry, the other parts are easier. Let's now talk about the meat of part 1.

```rs
fn part_1(input: &str) -> usize {
    let mut lines = input.lines();

    // Get rid of `$ cd /`
    lines.next();

    let tree = traverse(
        &mut lines,
        Folder {
            folders: HashMap::new(),
            files: HashMap::new(),
        },
    );

    part_1_walk(&tree)
}
```

This gets all of the lines, and for our convenience, gets rid of the first one so it's easier to access all the root sub-folders. We then get the tree from the input, and run `part_1_walk` on a reference to it.

```rs
fn part_1_walk(root: &Folder) -> usize {
    let mut sum = 0;

    for (_, folder) in (&root.folders).into_iter() {
        let x = folder.size();
        if x <= 100000 {
            sum += x;
        }

        sum += part_1_walk(folder);
    }

    sum
}
```

That function (`part_1_walk`) is the special sauce. It iterates over all folders of the directory, and adds up the ones that are less than (or equal to) 100000. Then, it adds the directory sizes recieved from the same function being called on each folder. Thus, this gets us the sum of all the folders who's size is less than or equal to 100000.

Part 2 is a bit more complicated. We have to find the directory with the smallest size that, when added to the unused space size, will return something greater or equal to 30000000.

```rs
fn part_2(input: &str) -> usize {
    let mut lines = input.lines();

    // Get rid of `$ cd /`
    lines.next();

    let tree = traverse(
        &mut lines,
        Folder {
            folders: HashMap::new(),
            files: HashMap::new(),
        },
    );

    let unused_size = 70000000 - tree.size();

    part_2_walk(&tree, unused_size)
}
```

Like before, this does (nearly) the same as `part_1`, as well as getting the unused size.

```rs
fn part_2_walk(root: &Folder, unused_size: usize) -> usize {
    let mut smallest = root.size();

    for (_, folder) in (&root.folders).into_iter() {
        let folder_size = part_2_walk(folder, unused_size);

        if unused_size + folder_size >= 30000000 && folder_size < smallest {
            smallest = folder_size
        }
    }

    smallest
}
```

This function is the unique(est? er?) part. It walks all the folders, and keeps track of the smallest size found (starting with the root folder size). It then checks if that folder size is 1) over 30000000, and 2) less than the smallest folder size seen. If it is, it replaces the smallest folder size with that one. This repeats until all folders have been searched, and we just return the smallest we saw.

That's pretty much everything, so hopefully it wasn't too bad to read through :P. Anyways, see y'all next time!
