+++
date = 2023-04-07T15:45:16Z
description = "With some algebra and just a touch of calculus, it is conquered."
series = ""
tags = ["puzzle", "calculus", "usamo", "math"]
title = "2023 USAMO Problem 2 Solution"

+++
Taking a brief respite from my hiatus, here's a nice solution to the 2023 USAMO problem 2:

_Let $\mathbb{R}^{+}$ be the set of positive real numbers. Find all functions $f:\mathbb{R}^{+}\rightarrow\mathbb{R}^{+}$ such that, for all $x, y \in \mathbb{R}^{+}$,_

$$f(xy + f(x)) = xf(y) + 2$$

First, let us plug in some special points; specifically, plugging in $x=0$ and $x=1$, respectively:

$$

\begin{align}

    f(f(0)) &= 2 \\

    f(y + f(1)) &= f(y) + 2

\end{align}

$$

Next, let us find the first and second derivatives of this function. First, with (2), we isolate $f(y)$ one one side

$$

\begin{align*}

   f(y) = f(y + f(1)) - 2

\end{align*}

$$

and then take the derivative:

$$

\begin{align*}

    \\dfrac{\\mathrm{d}f}{\\mathrm{d}y}

    &=\\dfrac{\\mathrm{d}f}{\\mathrm{d}y}\\left\[f(y + f(1)) - 2\\right\] \\\\

    &= \\dfrac{\\mathrm{d}f}{\\mathrm{d}y}\\left\[f(y + f(1))\\right\] - \\dfrac{\\mathrm{d}f}{\\mathrm{d}y}\\left\[2\\right\] \\\\

    &= f'(y + f(1))\\cdot\\dfrac{\\mathrm{d}f}{\\mathrm{d}y}\\left\[y + f(1)\\right\] \\\\

    &= f'(y + f(1))\\cdot(1)\\\\

    f'(y) &= f'(y + f(1))\\\\

\end{align*}

$$

The second derivative is as follows:

$$

\begin{align*}

    \\dfrac{\\mathrm{d}^2f}{\\mathrm{d}y^2}

    &= \\dfrac{\\mathrm{d}f}{\\mathrm{d}y}\\left\[\\dfrac{\\mathrm{d}f}{\\mathrm{d}y}\\right\] \\\\

    &= \\dfrac{\\mathrm{d}f}{\\mathrm{d}y}\\left\[f'(y + f(1))\\right\] \\\\

    &= f''(y + f(1))\\cdot\\dfrac{\\mathrm{d}f}{\\mathrm{d}y}\\left\[y + f(1)\\right\] \\\\

    f''(y) &= f''(y + f(1))\\\\

\end{align*}

$$

For both of these derivatives, we see that the input to the function does not matter: it will return the same result regardless of input. Therefore, the functions $f'$ and $f''$ must be constants, and $f$ must be a linear equation or a constant. We know it is not a constant because if it was, the problem could be reduced to a linear equation with two unknowns, $f$ and $x$, making $f$ depend on $x$, which is not a constant function. That means we can model $f(x)$ like so:

$$

\begin{align*}

    f(x) = ax + b

\end{align*}

$$

Via (1), we get the following: 

$$

\\begin{align*}

    f(f(0)) &= 2 \\\\

    a(a(0) + b) + b &= 2 \\\\

    ab + b &= 2

\\end{align*}

$$

And via (2), 

$$

\\begin{align*}

    f(y + f(1)) &= f(y) + 2 \\\\

    a(y + a(1) + b) + b &= ay + b + 2 \\\\

    ay + a^2 + ab + b &= ay + b + 2 \\\\

    a^2 + ab &= 2 \\\\

\\end{align*}

$$

Setting these equations equal to each other,

$$

\\begin{align*}

    ab + b &= a^2 + ab \\\\

    b &= a^2 \\\\

\\end{align*}

$$

Therefore, 

$$

\\begin{align*}

    ab + b &= 2 \\\\

    a^3 + a^2 &= 2 \\\\

\\end{align*}

$$

There are three solutions to this equation: $a = 1$, $a = -1 + i$, and $a = -1 - i$. Knowing that $b = a^2$, the respective $b$ values are $b = 1$, $b = -2i$, and $b = 2i$. Thus, $f(x)$ could be the following:

$$

\\begin{align*}

    f(x) &= x + 1 \\\\

    f(x) &= x(-1 + i) - 2i \\\\

    f(x) &= x(-1 - i) + 2i \\\\

\\end{align*}

$$

Because only the first function maps strictly to positive real numbers, the only solution that works is $f(x) = x + 1$. $\\square$