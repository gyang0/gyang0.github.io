The University of Washington Society of Physics Students (SPS) has a neat obsession with magnetic monopoles. Happily, it's related to one of my favorite geometrical arguments in physics &ndash; the Aharonov-Bohm effect, my beloved &ndash; so I thought I'd write some stuff on it.
<figure>
    <img style="width:500px" src="images/activity/2026/20261015_magnetic_monopoles_1.png">
    <figcaption>Drawn by yours truly on the SPS lounge blackboard, PAB B135</figcaption>
</figure>


## The Aharonov-Bohm Effect
<hr style="width:70%; margin-top: 10px; margin-bottom: 10px">

This involves a cute modification to the normal double-slit experiment in the form of a solenoid. The setup is designed such that the magnetic field doesn't interfere with the possible paths of the particle.

<figure>
    <img style="width:400px" src="https://upload.wikimedia.org/wikipedia/commons/7/76/Aharonov%E2%80%93Bohm_effect_apparatus.svg">
    <figcaption><a href="https://upload.wikimedia.org/wikipedia/commons/7/76/Aharonov%E2%80%93Bohm_effect_apparatus.svg" target="_blank">From Wikipedia</a></figcaption>
</figure>

From the path-integral approach, the amplitude of the total wavefunction is the sum of the two possible paths. Let the propagator be $U$ and the classical action be $S$:
$$\begin{gather*}
    U \sim \sum_\text{paths} e^{iS/\hbar} \\
    S = \int \mathcal L \ dt = \int_{t_i}^{t_f}\left(\frac 1 2 mv^2 + \frac q c \vec v \cdot \vec A - q\phi\right)
\end{gather*}$$

Here $\vec A$ and $\phi$ are the vector and scalar potentials of electromagnetic theory, respectively.

1. We turn off the solenoid. $\vec B = \vec A = \phi = 0$. This is just a normal double-slit experiment.
   
2. Now we turn the solenoid on. The setup is such that $\vec B$ doesn't affect the particles. Assume the Coulomb gauge $\nabla\cdot\vec A = 0$ and $\phi = 0$ (there are some nuances to this, but we disregard them for now). The action changes as:
$$\begin{gather*}
    S \longrightarrow S + \int_{t_i}^{t_f} \frac q c \vec v \cdot \vec A \ dt = S + \frac q c\int_{t_i}^{t_f}\vec A \cdot \vec{dr}
\end{gather*}$$
The amplitude of each path picks up a factor of $\mathrm{exp}\left(\frac{iq}{\hbar c}\int A \cdot dr\right)$.

3. Since the two paths create a closed loop, we get:
$$\begin{align*}
    \int_2 A \cdot dr - \int_1 A \cdot dr = \oint_{1 + 2} A \cdot dr &= \int_S (\nabla\times A) ds \\
    &= \int_S B \cdot ds \\
    &\equiv \Phi \neq 0
\end{align*}$$
Since a nonzero number of magnetic flux lines are included in the surface integral.

4. If we calculate the total amplitude of the wavefunction, we get:
$$\begin{align*}
    \psi &\sim \mathrm{exp}\left[\frac{iq}{\hbar c}\int_1 A \cdot dr\right]\psi_1 + \mathrm{exp}\left[\frac{iq}{\hbar c}\int_2 A \cdot dr\right]\psi_2 \\
    &= \psi_1 + \mathrm{exp}\left[\frac{iq}{\hbar c}\int_2 A \cdot dr - \frac{iq}{\hbar c}\int_1 A \cdot dr\right]\psi_2 \\
    &= \psi_1 + \mathrm{exp}\left[\frac{iq}{\hbar c}\oint_{1+2} A \cdot dr\right]\psi_2 \\
    &= \psi_1 + \mathrm{exp}\left[\frac{iq}{\hbar c}\Phi\right]\psi_2
\end{align*}$$

Varying $\vec B$ produces a change in the interference pattern. However, a change by the flux quantum $\Phi_0 = 2\pi \hbar c /q$ doesn't change things. So the previously "uninteracting" $\vec B$ has produced a physical change. More accurately, the loop integral of the vector potential $\vec A$ produces a physically observable change.

<span style="color:var(--reddish)"><i class="bi bi-exclamation-triangle"></i></span>&nbsp; One might object to the use of the Coulomb gauge to simplify calculations. Ultimately it doesn't matter, because the crux of the Aharonov-Bohm effect was the loop integral of $\vec A$, and this loop integral is gauge-invariant.

## The Dirac String
<hr style="width:70%; margin-top: 10px; margin-bottom: 10px">

We require the vector potential to obey $\vec B = \nabla\times \vec A$, and since the divergence of a curl is 0, $\nabla\cdot\vec B = \nabla\cdot (\nabla\times\vec A) = 0$. This seems to prohibit magnetic monopoles, since if there were a monopole carrying magnetic charge $g$, we would have
$$\begin{gather*}
    \vec B = \frac{g}{r^2}\hat r \\
    \nabla\cdot\vec B = \frac{1}{r^2}\frac{\partial}{\partial r}\left[r^2 \cdot \frac{g}{r^2}\hat r\right] = \frac{1}{r^2}\frac{\partial}{\partial r}[g\hat r]
\end{gather*}$$

At $r>0$, this is zero. At $r=0$, we use the concept of a distributional derivative to calculate this as $\nabla\cdot\vec B = 4\pi g\delta^3(r)$. Thus it seems that a magnetic monopole makes it impossible to define a singularity-free $\vec A$.

However, Dirac proposed that the singularity is actually a line. We could theoretically define $\vec A$ such that it gives the right $\vec B$ everywhere except $r = 0$.
$$\vec A = \frac{g(1 - \sin\theta)}{r\sin\theta}\hat\phi$$

1. Substitute this string for our solenoid in the Aharonov-Bohm effect setup. By Stokes' theorem, the line integral around the potential is:
$$\nabla\times\vec A = \vec B = 4\pi g$$

1. By similar reasoning to the previous Aharonov-Bohm effect, the particle must pick up a phase of $\mathrm{exp}(iq\Phi/\hbar c) = \mathrm{exp}(4\pi i qg/\hbar c)$.

2. The Aharonov-Bohm effect shows that $\vec A$ (specifically, its loop integral) is a physically observable entity. If we don't observe the singularity, that means the phase is unobservable. Thus
$$\begin{gather*}
    e^{4\pi i qg/\hbar c} = 1 \\
    q = \frac{\hbar c}{2g}n \ ,\quad n \in \mathbb{Z}
\end{gather*}$$

The existence of a magnetic monopole <em>forces all charges to be multiples of $\hbar c/2g$</em>. This can explain, for example, why protons and electrons seem to have the same magnitude of charge. A very attractive argument, and potentially a very powerful one.

<!-- Magnetic monopole -->
<!-- Unobservability criterion -->
<!-- Quantized charges -->

## Detected?
<hr style="width:70%; margin-top: 10px; margin-bottom: 10px">

No, magnetic monopoles have never been detected...yet. Physicists like to believe in the aesthetics of the universe. The argument for magnetic monopoles is very appealing: it provides a reason for quantized charges, establishes a greater symmetry between electric and magnetic fields, and is just a pretty argument overall. Symmetry arguments have been used successfully in the past; maybe the same will be true for magnetic monopoles.

In 1974 (4 decades after Dirac's proposal), 't Hooft and Polyakov showed that magnetic monopoles can manifest as topological defects in the particle physics of some Grand Unified Theories. This increased the excitement and expectation that magnetic monopoles can exist.

Particle accelerators may be able to produce magnetic monopoles at high enough energies. The <a href="https://atlas.cern/Updates/Briefing/Monopoles-First-Run3" target="_blank">Large Hadron Collider</a> has run experiments searching for monopoles in the past, with no luck. Though this isn't a surprise, as the LHC can only produce collisions of energy $\sim 10^3 \ \text{GeV}$, but a magnetic monopole is estimated to appear at collisions of energy $\sim 10^{11} - 10^{15} \ \text{GeV}$.

Such high energies are nigh impossible to reach artificially, but could have been easily achieved by the early universe. And indeed, some Grand Unified Theories predict that a huge number of magnetic monopoles were produced when the universe was born. In that case, there might be a primordial monopole still floating around. This could be one of the more dramatic ways a magnetic monopole is discovered: we just discover one floating around in space. More exotically, a monopole might have been swallowed by a black hole some time ago, giving the black hole a net magnetic charge. The Reissner-Nordström metric, for example, can model this.


<figure>
    <img style="width:500px" src="images/activity/2026/20261015_magnetic_monopoles_2.png">
    <figcaption>Maybe soon</figcaption>
</figure>