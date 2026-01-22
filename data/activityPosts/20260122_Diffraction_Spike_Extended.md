It seems like every year I make a post on laser interference/diffraction. Carrying on that tradition, here's an attempt to derive an explicit integral for diffraction patterns from polygonal apertures. Sort of a part 2 to <a href="" target="_blank">this post</a> from last year.

I was inspired by <a href="https://arxiv.org/pdf/2205.08311" target="_blank">this fun paper on diffraction</a>, which examines diffraction patterns formed by using a random country's outline as an aperture. The <a href="https://en.wikipedia.org/wiki/Fraunhofer_diffraction_equation#In_polar_coordinates" target="_blank">Wikipedia article on Fraunhofer diffraction</a> was also very informative.

## Polygonal Shape
First of all, we need to describe the aperture shape. Since there's a bit of rotational symmetry involved, it makes sense to use polar coordinates. We start with the equation of a line in polar coordinates:
$$r\cos(\theta - \alpha) = P$$

Where $\alpha$ is the phase and $P$ is the distance from the origin (roughly). If we consider a regular $N$-gon, each side will be spaced by an angle of $2\pi/N$. Maybe that should be our phase. For now, let $P = 1$.
$$r\cos\left(\theta - \frac{2\pi}{N}\right) = 1$$

Nice, and now we need more sides. Each $1/N$-th of a rotation, we want to rotate *again* by $2\pi/N$. We adjust our phase accordingly. The floor function is quite useful here.
$$r\cos\left(\theta - \frac{2\pi}{N}\left\lfloor\frac{\theta}{2\pi/N}\right\rfloor\right) = 1$$

We're close, but each side is offset by half its length. To fix, just re-offset by half the offset angle, so a phase of $\frac{1}{2} \cdot \frac{2\pi}{N} = \frac{\pi}{N}$. To distinguish better later, we'll call this shape function $R(\theta)$.
$$\begin{gather}
    r\cos\left(\theta - \frac{2\pi}{N}\left\lfloor\frac{\theta}{2\pi/N}\right\rfloor - \frac{\pi}{N}\right) = 1 \nonumber \\[3ex]
    R(\theta) = \frac{1}{\cos\left(\theta - \frac{2\pi}{N}\left\lfloor\frac{\theta}{2\pi/N}\right\rfloor - \frac{\pi}{N}\right)}
\end{gather}$$


<br>

<figure>
    <img style="width:800px" src="/images/activity/20260122_diffraction_spike_1.png">
    <figcaption>Our aesthetic polygons, courtesy of Desmos</figcaption>
</figure>

## Diffraction Theory
We assume Fraunhofer diffraction: the screen is sufficiently far away from the aperture. For the purposes of Fraunhofer diffraction, we define the aperture function as
$$\begin{gather}
    A(r, \theta) = \begin{cases}
        1 &r \leq R(\theta) \\
        0 &r > R(\theta)
    \end{cases}
\end{gather}$$


Where $R(\theta)$ is Equation (1), the polar form of a regular N-gon. Now the basic idea is to Fourier Transform the aperture function in order to get the diffraction pattern. If the aperture has complete radial symmetry (independence of $\theta$), then we can simplify with Bessel functions and a Hankel transform:
$$\mathcal{H}[f(r)] = F(r') = \int_0^\infty A(r)J_0(kr)r dr$$

Where $A(r)$ is the aperture function and $J_0(kr)$ is the Bessel function of the first kind. Unfortunately, our polygons don't have complete radial symmetry, so we have to stick with the Fourier Transform.

## Diffraction Calculations
The steps here are pretty much the same as the Wikipedia article. First we find the resultant wave on the screen. Parametrize the coordinate axes on the aperture by $(r', \theta', 0)$, and the screen by $(r, \theta, z)$. $z$ is simply the distance between the screen and aperture. Then the wave $U(r, \theta, z)$ that arrives on the screen can be expressed as
$$U(r, \theta, z) \propto \int_0^{2\pi} \int_0^\infty A(r', \theta')e^{-i\frac{2\pi}{\lambda z}rr'\cos(\theta - \theta')} r' dr' d\theta'$$

$A(r, \theta)$ is the aperture function defined previously in Equation (2). We can take advantage of the fact that $A(r, \theta)$ is zero most places, unless $r$ lies outside of the polygonal shape. So we can remove the infinite bound:
$$\begin{align}
    U(r, \theta, z) &\propto \int_0^{2\pi} \int_0^{R(\theta')} e^{-i\frac{2\pi}{\lambda z}rr'\cos(\theta - \theta')} r' dr' d\theta' \nonumber \\
    &\propto \int_0^{2\pi} \int_0^{R(\theta')} \left[\cos\left(-\frac{2\pi}{\lambda z}rr'\cos(\theta - \theta')\right) + i\sin\left(-\frac{2\pi}{\lambda z}rr'\cos(\theta - \theta')\right)\right] r' dr' d\theta' \nonumber \\
    &\propto \int_0^{2\pi} \int_0^{R(\theta')} \left[\cos\left(-\frac{2\pi}{\lambda z}rr'\cos(\theta - \theta')\right)\right]r' dr' d\theta' + i\int_0^{2\pi} \int_0^{R(\theta')} \left[\sin\left(-\frac{2\pi}{\lambda z}rr'\cos(\theta - \theta')\right)\right]r' dr' d\theta'
\end{align}$$

The intensity of the diffraction pattern should be proportional to $|U|^2 = U\overline{U}$, where $\overline{U}$ is the complex conjugate. Thus we can split the integral into two parts and get rid of the imaginary coefficient.
$$\begin{gather}
    I \propto |U(r, \theta, z)|^2 \nonumber \\
    I \propto \left(\int_0^{2\pi} \int_0^{R(\theta')} \left[\cos\left(-\frac{2\pi}{\lambda z}rr'\cos(\theta - \theta')\right)\right]r' dr' d\theta'\right)^2 + \left(\int_0^{2\pi} \int_0^{R(\theta')} \left[\sin\left(-\frac{2\pi}{\lambda z}rr'\cos(\theta - \theta')\right)\right]r' dr' d\theta'\right)^2
\end{gather}$$

I failed to code a Python program for this. A more experienced programmer will likely have better luck. The integral is gnarly to solve analytically (if it's even possible), but a crude numeric approximation on Desmos is below.
<figure>
    <img style="width:800px" src="/images/activity/20260122_diffraction_spike_2.png">
    <figcaption>(N = 6 case) <a href="https://www.desmos.com/3d/ufmfstokrx" target="_blank">https://www.desmos.com/3d/ufmfstokrx</a></figcaption>
</figure>

Comparing with the hexagonal diffraction pattern I got last year, the results seem to match up a bit, though I'm not fully confident that the equation is correct. The spikes seem to be predicted, at least, and some of the surrounding fringes.
<figure>
    <img style="width:800px" src="/images/activity/20260122_diffraction_spike_3.png">
    <figcaption>Left: diffraction spike from last year. Right: Desmos approximation.</figcaption>
</figure>
