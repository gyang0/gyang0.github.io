**Edited 12/24/2024:** Fixed a few mistakes in my graphs.

It's basically a double slit interference pattern. After finals week I had more time on my hands, so I wanted to be productive instead of playing games all day.


## Setup
The setup is pretty simple. Two laser pointers taped to some books and a piece of paper ~1m away to see the interference bands.

<figure>
    <img style="width:500px" src="/images/activity/20241223_Interference_Bands_1.png">
    <figcaption></figcaption>
</figure>
<br>
<br>

The "slits" were made by taping 4 narrow strips of paper to form a square hole. I wanted another strip of paper to divide this hole into two sections (forming the slits), but it was hard to cut a strip that was narrow enough. In the end I used a bit of my hair I snipped off to form the apertures.
<figure>
    <img style="width:300px" src="/images/activity/20241223_Interference_Bands_2.jpg">
    <figcaption></figcaption>
</figure>
<br>
<br>

After taping this to the laser pointers and turning off the lights, the interference bands came out quite nicely:
<figure>
    <img style="width:700px" src="/images/activity/20241223_Interference_Bands_3.png">
    <figcaption>It seemed like the green one had more intensity, but both pointers produced clear interference bands.</figcaption>
</figure>
<br>
<br>

## Maxima Calculation
Just for fun, I tried tracing out the interference bands on the paper to measure them. It's quite inaccurate because I had to keep one hand on the laser pointer's button, which made it wobbly. For the green pointer, the large bands were around 0.4 cm apart. For the red pointer, the large bands were around 0.7 cm apart.

Calculating the location of the maxima:
$$a = 0.5 \ \text{mm} = 5 \times 10^{-4} \ \text{m} \tag{aperture size}$$
$$d = 0.1 \ \text{mm} = 1 \times 10^{-4} \ \text{m} \tag{dist. between apertures}$$
$$D = 1.03 \ \text{m} \tag{dist. between pointers and paper}$$

$d$ is the width of a human hair - around 0.1 mm based on a quick Google search.

$$d\sin(\theta) = m\lambda$$
$$\sin(\theta) \approx \tan(\theta) = \frac{m\lambda}{d} \tag{small angle approximation}$$
$$\frac{y}{D} = \frac{m\lambda}{d}$$
$$y = \frac{m\lambda D}{d}$$

This would be the location of the maxima, for $m = 0, 1, 2, 3...$

For green light (assuming $\lambda = 520 \ \text{nm}$):
$$y = \frac{m(520 \times 10^{-9})(1.03)}{1 \times 10^{-4}} = m \cdot 0.005356$$

For red light (assuming $\lambda = 630 \ \text{nm}$):
$$y = \frac{m(630 \times 10^{-9})(1.03)}{1 \times 10^{-4}} = m \cdot 0.006489$$

So we might expect the green bands to be $0.005356 \ \text{m} \approx 0.5 \ \text{cm}$ apart and the red bands to be $0.006489 \ \text{m} \approx 0.6 \ \text{cm}$ apart. This is pretty close to the measured values (0.4 cm for green light and 0.7cm for red light). Probably a coincidence more than anything &mdash; the approximations for $d$ and $\lambda$ must have worked together well. Still, it's nice to see.

## Existence of Small Bands
(Calculations here are mostly based on Tipler, Chapter 33: Interference and Diffraction)

There were some smaller bands within the large interference bands. It doesn't show up as well on the green, but it's visible on the red:
<figure>
    <img style="width:500px" src="/images/activity/20241223_Interference_Bands_6.png">
    <figcaption></figcaption>
</figure>
<br>
<br>

Well, assuming they weren't there because my setup was shoddy, it makes sense based on the phasor model. Starting with the intensity ($I$) and wave ($A$) equations:
$$I = I_0\left(\frac{\sin(\frac{1}{2}\phi)}{\frac{1}{2}\phi}\right)^2$$
$$I \propto A^2$$


 With 2 slits (and 2 phasors):
<figure>
    <img style="width:500px" src="/images/activity/20241223_Interference_Bands_7.png">
    <figcaption>$\delta$ is the phase difference due to path length difference.</figcaption>
</figure>
<br>

$$A = 2A_0 \cos(\frac{\delta}{2}) \tag{from diagram}$$
$$I \propto A^2 = 4A_0^2 \cos^2(\frac{\delta}{2})$$
$$I = 4I_0\left(\frac{\sin(\frac{1}{2}\phi)}{\frac{1}{2}\phi}\right)^2\cos^2(\frac{\delta}{2})$$

Drawing this on Desmos (with a small $I_0$ for visibility):
<figure>
    <img style="width:600px" src="/images/activity/20241223_Interference_Bands_4.png">
    <figcaption>This would be the pattern of the larger bands.<br>The large spike in the center corresponds to max intensity.</figcaption>
</figure>
<br>
<br>

With a logarithmic y scale, other larger bands can be seen on the sides:
<figure>
    <img style="width:600px" src="/images/activity/20241223_Interference_Bands_5.png">
    <figcaption></figcaption>
</figure>
<br>
<br>

Zooming in, smaller bands can be seen within each larger band:
<figure>
    <img style="width:600px" src="/images/activity/20241223_Interference_Bands_8.png">
    <figcaption>Existence of small bands</figcaption>
</figure>
<br>
<br>