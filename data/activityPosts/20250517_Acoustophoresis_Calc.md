My final presentation for Differential Equations this semester was on acoustophoresis and standing waves <a href="/data/documents/20250513_acoustophoresis.pdf" target="_blank">(link here)</a>. Everything was squeezed into 7 slides, so this post is to go through the calculations and graphs a bit more. I'll only be doing the square boundary case to keep the post to a reasonable length.

Very largely based off of <a href="https://www-eng.lbl.gov/~shuman/NEXT/MATERIALS&COMPONENTS/MISC/Standing-Waves-on-a-Circular-Membrane.pdf">this article</a> by Derek Shuman.


## Solutions to the Wave Equation
Consider waves on a square boundary. To find the forms of those waves, we start off with the wave equation in Cartesian coordinates:
$$\frac{\partial^2 f}{\partial t^2} = c^2\left(\frac{\partial^2 f}{\partial x^2} + \frac{\partial^2 f}{\partial y^2}\right)$$

Cross terms can get messy, so we assume a separable solution: $f(x, y, t) = X(x)Y(y)T(t)$. Now we plug that into our wave equation.
$$\frac{\partial^2}{\partial t^2}\left[X(x)Y(y)T(t)\right] = c^2\left(\frac{\partial^2}{\partial x^2}\left[X(x)Y(y)T(t)\right] + \frac{\partial^2}{\partial y^2}\left[X(x)Y(y)T(t)\right]\right)$$
$$XY\frac{d^2 T}{d t^2} = c^2\left(YT\frac{d^2 X}{d x^2} + XT\frac{d^2 Y}{d y^2}\right)$$

Divide both sides by $XYT$.
$$\frac{1}{T}\frac{d^2 T}{d t^2} = c^2\left(\frac{1}{X}\frac{d^2 X}{d x^2} + \frac{1}{Y}\frac{d^2 Y}{d y^2}\right)$$

To make things simpler, let $\omega^2 = -\frac{1}{T}\frac{d^2 T}{d t^2}$, a function of $t$ only. Also let $m^2 = -\frac{1}{Y}\frac{d^2 Y}{d y^2}$, a function of $y$ only. Now solving for $X$,
$$-\omega^2 = c^2\left(\frac{1}{X}\frac{d^2 X}{d x^2} - m^2\right)$$
$$-\frac{\omega^2}{c^2} + m^2 = \frac{1}{X}\frac{d^2 X}{d x^2}$$
$$X\left(-\frac{\omega^2 - c^2m^2}{c^2}\right) = \frac{d^2 X}{d x^2}$$
$$X = -\left(\frac{\omega^2 - c^2m^2}{c^2}\right)^{-1}\frac{d^2 X}{d x^2}$$

Now we can solve for the general solution. Recalling our substitutions for $\omega$ and $m$,
$$T(t) = -\frac{1}{\omega^2}\frac{d^2 T}{d t^2}$$
$$Y(y) = -\frac{1}{m^2}\frac{d^2 Y}{d y^2}$$

Technically, to fully solve these we'd need the fundamental set of solutions. But this is physics, and we don't need to be super rigorous. For now we want the simplest forms of the solutions that can satisfy these, and they come out easily enough:
$$X = \cos\left(\frac{\sqrt{\omega^2 - c^2m^2}}{c}x\right)$$
$$Y = \cos(my)$$
$$T = \cos(\omega t)$$
$$f(x, y, t) = X(x)Y(y)T(t) = \cos\left(\frac{\sqrt{\omega^2 - c^2m^2}}{c}x\right)\cos(my)\cos(\omega t)$$

You can tack on an arbitrary constant here too.

## Boundary Conditions
Now we need to add boundary conditions, otherwise our graph will go on infinitely in the xy-plane. Say the boundary is given by $-L < x < L$ and $-L < y < L$, where L is an arbitrary constant. We want our wavefunction $f$ to be 0 at that boundary.
$$\cos\left(\pm\frac{\sqrt{\omega^2 - c^2m^2}}{c}L\right) = 0$$
$$\cos(\pm mL) = 0$$

For some integers $n_1$ and $n_2$, 
$$\frac{\sqrt{\omega^2 - c^2m^2}}{c}L = \frac{1}{2} + n_1\pi$$
$$mL = \frac{1}{2} + n_2\pi$$

Solving these gives the following boundary conditions ($n_1, n_2$ are integers):
$$\omega = \frac{c\pi}{2L}\sqrt{(1 + 2n_1)^2 + (1 + 2n_2)^2}$$
$$m = \frac{1 + 2n_2}{2L}\pi$$

An example in Desmos with $n_1 = 2$ and $n_2 = 1$:
<figure>
    <img style="width:500px" src="/images/activity/20250517_acoustophoresis_calc_1.png">
    <figcaption>$$f(x, y, t) = \cos\left(\frac{\sqrt{\omega^2 - c^2m^2}}{c}x\right)\cos(my)\cos(\omega t)$$</figcaption>
</figure>

Here's a <a href="https://www.desmos.com/3d/96bdeigq4z" target="_blank">graph I made</a> in Desmos 3D, if you want to play around with the parameters.

The circular case is quite similar, except you need to use the Laplacian for polar coordinates in the wave equation. The solution also involves a Bessel function...might need to use numerical zeros for the boundary conditions.

This is a simplified example. Real-life acoustophoresis would be more complicated, but it was a convenient way to bring in partial differential equations.