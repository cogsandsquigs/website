---
date: 2023-04-07T15:45:16.000Z
description: "With some algebra and just a touch of calculus, it is conquered."
tags:
  - puzzle
  - calculus
  - usamo
  - math
title: 2023 USAMO Problem 2 Solution
series: math problems
draft: true
---

Taking a brief respite from my hiatus, here's a nice solution to the 2023 USAMO problem 2 that I came up with:

(Note: this solution was pointed out to me to be flawed. However, I'm still keeping it up here because, well, not everything can be a winner, right?)

## Problem

_Let $\mathbb{R}^{+}$ be the set of positive real numbers. Find all functions $f:\mathbb{R}^{+}\rightarrow\mathbb{R}^{+}$ such that, for all $x, y \in \mathbb{R}^{+}$,_

$$
\begin{aligned}
f(xy + f(x)) = xf(y) + 2
\end{aligned}
$$

## Solution

First, let us plug in some special points; specifically, plugging in $x=0$ and $x=1$, respectively:

$$
\begin{align}
f(f(0)) = 2 \\
f(y + f(1)) = f(y) + 2
\end{align}
$$

Next, let us find the derivative of this function. First, with (2), we isolate $f(y)$ one one side

$$
\begin{aligned}
f(y) = f(y + f(1)) - 2
\end{aligned}
$$

and then take the derivative:

$$
\begin{aligned}
\dv{f}{y}
&= \dv{f}{y}\left\[f(y + f(1)) - 2\right] \\
&= \dv{f}{y}\left\[f(y + f(1))\right] - \dv{f}{y}\left\[2\right] \\
&= f'(y + f(1))\cdot\dv{f}{y}\left\[y + f(1)\right] \\
&= f'(y + f(1))\cdot(1)\\
f'(y) &= f'(y + f(1))\\
\end{aligned}
$$

With the derivative, we see that the input to the function does not matter: it will return the same result regardless of input, assuming that $f(1) \neq 0$. We know it is not zero because if it was, then (2) would become $f(y) = f(y) + 2$, implying that $0 = 2$, which is not true.

Therefore, the function $f'$ must be a constant, and $f$ must be a linear equation or a constant. We know it is not a constant because if it was, the problem could be reduced to the following:

$$
\begin{aligned}
f(xy + f(x)) &= xf(y) + 2 \\
f &= xf + 2 \\
f - xf &= 2 \\
f(1-x) &= 2 \\
f &= \dfrac{2}{1-x} \\
\end{aligned}
$$

where $f$ is the constant from $f(x)$. As we see, $f$ would depend on $x$, making it not a constant function. Thus, $f(x)$ must be linear, meaning we can model it like so:

$$
\begin{aligned}
f(x) = ax + b
\end{aligned}
$$

Via (1), we get the following:

$$
\begin{aligned}
f(f(0)) &= 2 \\
a(a(0) + b) + b &= 2 \\
ab + b &= 2
\end{aligned}
$$

And via (2),

$$
\begin{aligned}
f(y + f(1)) &= f(y) + 2 \\
a(y + a(1) + b) + b &= ay + b + 2 \\
ay + a^2 + ab + b &= ay + b + 2 \\
a^2 + ab &= 2 \\
\end{aligned}
$$

Setting these equations equal to each other,

$$
\begin{aligned}
ab + b &= a^2 + ab \\
b &= a^2 \\
\end{aligned}
$$

Therefore,

$$
\begin{aligned}
ab + b &= 2 \\
a^3 + a^2 &= 2 \\
\end{aligned}
$$

There are three solutions to this equation: $a = 1$, $a = -1 + i$, and $a = -1 - i$. Knowing that $b = a^2$, the respective $b$ values are $b = 1$, $b = -2i$, and $b = 2i$. Thus, $f(x)$ could be the following:

$$
\begin{aligned}
f(x) &= x + 1 \\
f(x) &= x(-1 + i) - 2i \\
f(x) &= x(-1 - i) + 2i \\
\end{aligned}
$$

Because only the first function maps strictly to positive real numbers, the only solution that works is $f(x) = x + 1$. $\square$
