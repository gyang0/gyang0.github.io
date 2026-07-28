This post is an exercise to 1) prove that chemistry is eternally subordinate to physics, 2) reinforce my understanding of quantum mechanics.

Angular momentum operators $L_z$ and $L^2$ are briefly introduced. Spherical harmonics are derived. The electron wavefunction is found by approximating the proton as a stationary potential of $V_p = -e^2/r$. Multi-electron atoms are considered and a sketch of the Hartree-Fock method is given.

*Cute graphs will be included.

**Most of the material builds on R. Shankar's <em>Principles of Quantum Mechanics</em>, chp. 12 - 13.

<figure>
    <img style="width:400px" src="https://upload.wikimedia.org/wikipedia/commons/e/e7/Hydrogen_Density_Plots.png">
    <figcaption><a target="_blank" href="https://en.wikipedia.org/wiki/Atomic_orbital">https://en.wikipedia.org/wiki/Atomic_orbital</a></figcaption>
</figure>

## I. Angular Momentum Operator $L_z$
<hr style="width:70%; margin-top: 10px; margin-bottom: 10px">

From Hamiltonian mechanics, we know that momentum ($P$) is the generator of infinitesimal translations.
$$\hat T(\varepsilon) = \mathrm{exp}\left(-\frac{i\varepsilon}{\hbar}P\right) \approx I - \frac{i\varepsilon}{\hbar}P$$

Similarly, we define the $z$-component of angular momentum ($L_z$) as the generator of infinitesimal rotations around the $z$-axis. Consider spherical coordinates $(r,\phi,\theta)$ with $0 \leq r <\infty$, $0 \leq \phi < 2\pi$, and $0 \leq \theta < \pi$. Intuitively, $L_z$ takes the form
$$L_z \equiv -i\hbar\frac{\partial}{\partial\phi} \tag{Spherical coordinates}$$

We further require our system to have <em>rotational symmetry</em>, i.e. independence of $\theta$. In such a system, $L_z$ must commute with the Hamiltonian: $[H, L_z] = 0$. This implies a simultaneous eigenbasis of $H$ and $L_z$. Let $\ket{l_z}$ be such a basis and assume a separable solution $\ket{l_z} = R(r)\Phi(\phi)$. In spherical coordinates,
$$\begin{gather*}
    -i\hbar\frac{\partial}{\partial\phi}\ket{l_z} = l_z\ket{l_z} \ ,\quad \ket{l_z} = R(r)\Phi(\phi) \\
    \ket{l_z} \sim R(r)e^{il_z\phi/\hbar}
\end{gather*}$$

The quantization $l_z = m\hbar$, $m \in \mathbb{Z}_0^+$ can be seen by requiring $\ket{l_z}$ to be in the Hilbert space $L^2([0, 2\pi])$ over $\phi$. Alternatively, it can be seen by requiring $l_z$ to be real, thus $L_z$ is Hermitian. But this is more involved. In any case, $\ket{l_z}$ must be periodic in $\phi$ with period $2\pi$, so $e^{il_z(2\pi)/\hbar} = 1$ implying $l_z = m\hbar$.

## II. Total Angular Momentum $L^2$
<!--
### II.1 General Properties

<hr style="width:70%; margin-top: 10px; margin-bottom: 10px">

Previously, we found the form of $L_z$ as a generator of infinitesimal rotations by comparison with $P$. Similar forms exist for $L_x$ and $L_y$ around the $x$ and $y$-axis, respectively. Define the total momentum operator (technically, squared) is $L^2 = L_x^2 + L_y^2 + L_z^2$. In a system with spherical symmetry, note some useful commutation relations *without knowing the full forms of* $L_i$:
$$\begin{gather*}
    [H, L_i] = 0 \ , \ [L^2, L_i] = 0 \quad\longrightarrow\quad [H, L^2] = 0 \\
    [L_i, L_j] = i\hbar\epsilon_{ijk}L_k
\end{gather*}$$

Thus we can find a simultaneous eigenbasis for $H$, $L^2$, and one $L_i$. However, each individual component of angular momentum $L_i$ can't be known simultaneously.

To find a relationship between eigenvalues of $L^2$ and $L_z$, we use a trick similar to that for the harmonic oscillator. Note that
$$\begin{align*}
    L^2 - L_z^2 &= L_x^2 + L_y^2 = (L_x + iL_y)(L_x - iL_y) + i[L_x, L_y]
\end{align*}$$

Let $L_+ = L_x + iL_y$ and $L_- = L_x - iL_y$. Then $L^2 - L_z^2 = L_+L_- - \hbar L_z$. A useful relation is $[L_z, L_\pm] = \pm\hbar L_\pm$. We've succeeded in simplifying the system a teensy bit. The "raising/lowering" ladder operator trick is incredibly useful.

Now let $\ket{\alpha, \beta}$ be a simultaneous eigenbasis of $L^2$ and $L_z$ with eigenvalues $L^2\ket{\alpha,\beta}=\alpha\ket{\alpha,\beta}$ and $L_z\ket{\alpha,\beta} = \beta\ket{\alpha,\beta}$. By a few clever arrangements,
$$\begin{gather*}
    L_zL_+\ket{\alpha,\beta} = (\hbar L_+ + L_+L_z)\ket{\alpha,\beta} = (\hbar + \beta)L_+\ket{\alpha,\beta} \tag{Hence \`\`raising" operator} \\
    L_zL_-\ket{\alpha,\beta} = (\hbar L_- - L_-L_z)\ket{\alpha,\beta} = (\hbar - \beta)L_-\ket{\alpha,\beta} \tag{Hence \`\`lowering" operator}
\end{gather*}$$

We can't raise/lower ad infinitum, as classically $l_z^2 \leq l^2$, i.e. $(L^2 - L_z^2)\ket{\alpha,\beta} = (\alpha - \beta^2)\ket{\alpha, \beta} \geq 0$. Thus $\alpha > \beta^2$ and measurements of $L_z$ are constrained by $L^2$, which makes sense. Further note that
$$\begin{gather*}
    L_+L_-\ket{\alpha, \beta_{min}} = 0 \ \ \longrightarrow \ \  (L^2 - L_z^2 + \hbar L_z)\ket{\alpha, \beta_{min}} = (\alpha - \beta_{min}^2 + \hbar\beta_{min}) = 0 \\
    L_-L_+\ket{\alpha, \beta_{max}} = 0 \ \ \longrightarrow \ \  (L^2 - L_z^2 - \hbar L_z)\ket{\alpha, \beta_{max}} = (\alpha - \beta_{max}^2 - \hbar\beta_{max}) = 0
\end{gather*}$$

This shows that $\beta_{min} = -\beta_{max}$. If the spacing between $\beta_{min}$ and $\beta_{max}$ is $n\in \mathbb{Z}^+$, i.e. $2\beta_{max} = n\hbar$, we get
$$\alpha = \hbar^2\left(\frac{n}{2}\right)\left(\frac{n}{2} + 1\right)$$

*This actually solves the more general problem of $J^2$ and $J_z$, where $\vec J = \vec L + \vec S$. If spin is disregarded, $\vec J = \vec S$ and this analysis works.

**From $L_z\ket{l_z} = m\hbar\ket{l_z}$, we can also say that a measurement of $L^2$ gives $\hbar^2 l (l+1)$, while a measurement of $L_z$ gives $m = -l, -l + 1,\dots, l - 1, l$. -->

<!-- ### II.2 Specific Form of $L^2$ -->
<hr style="width:70%; margin-top: 10px; margin-bottom: 10px">

Previously, we found the form of $L_z$ as a generator of infinitesimal rotations by comparison with $P$. Chaining derivatives can convert the spherical form of $L_z$ to the Cartesian form. We define spherical coordinates as $x = r\sin\theta\cos\phi$, $y=r\sin\theta\sin\phi$, and $z = r\cos\theta$. I.e. $\phi \in [0, 2\pi]$ is the azimuthal angle.
$$\begin{gather*}
    L_z = -i\hbar\frac{\partial}{\partial\phi} \longrightarrow -i\hbar\left[\frac{\partial x}{\partial\phi}\frac{\partial}{\partial x} + \frac{\partial y}{\partial\phi}\frac{\partial}{\partial y}\right] \\
    L_z = i\hbar y \left(\frac{\partial}{\partial x}\right) - i\hbar x \left(\frac{\partial}{\partial y}\right)
\end{gather*}$$

A symmetry argument gives
$$\begin{gather*}
    L_x = i\hbar z \left(\frac{\partial}{\partial y}\right) - i\hbar y \left(\frac{\partial}{\partial z}\right) \\
    L_y = i\hbar x \left(\frac{\partial}{\partial z}\right) - i\hbar z \left(\frac{\partial}{\partial x}\right)
\end{gather*}$$

*To be more rigorous, we should calculate a classical infinitesimal rotation around $\hat z$, expand to 1st order, and find the corresponding quantum operator on $\ket\psi$ using completeness of basis. See Shankar 12.2 for details.

We follow Shankar 12.5. Converting to spherical coordinates gives:
$$\begin{align*}
    L_x \ \ &\longrightarrow \ \ i\hbar\left(\sin\phi\frac{\partial}{\partial\theta} + \cos\phi\cot\theta \frac{\partial}{\partial\phi}\right) \\
    L_y \ \ &\longrightarrow \ \ i\hbar\left(-\cos\phi\frac{\partial}{\partial\theta} + \sin\phi\cot\theta \frac{\partial}{\partial\phi}\right) \\
    L_z \ \ &\longrightarrow \ \ -i\hbar\frac{\partial}{\partial\phi}
\end{align*}$$

Tedious algebra gives $L^2 = L_x^2 + L_y^2 + L_z^2$ in spherical coordinates.
$$L^2 = -\hbar^2\left(\frac{1}{\sin\theta}\frac{\partial}{\partial\theta}\sin\theta\frac{\partial}{\partial\theta} +\frac{1}{\sin^2\theta}\frac{\partial^2}{\partial\phi^2}\right)$$

*A measurement of $L^2$ gives $\hbar^2 l (l+1)$ with $l \in \mathbb{Z}_0^+$, while a measurement of $L_z$ gives $m = -l, -l + 1,\dots, l - 1, l$.

## III. Spherical Harmonics in Hydrogen
<hr style="width:70%; margin-top: 10px; margin-bottom: 10px">

This section is largely from Shankar 12.5.

Consider a hydrogen atom (1 proton, 1 electron). Since the proton is much heavier than the electron, approximate the proton as a stationary source of potential. Further assume non-relativistic quantum mechanics. The Schrodinger equation is
$$\begin{gather*}
    i\hbar\frac{\partial}{\partial t}\psi = -\frac{\hbar^2}{2m}\nabla^2\psi + V\psi = E\psi \\
    \psi = R(r)\Theta(\theta)\Psi(\psi)
\end{gather*}$$

Steps are tedious. The main idea is: the angular part of $\nabla^2$ in spherical coordinates is proportional to $L^2$, thus we can substitute the observable $\hbar^2 l(l+1)$. The specific form of this angular part $\Theta(\theta)\Psi(\psi)$ is called the <em>spherical harmonic</em>.
$$Y_l^m(\theta, \phi) = (-1)^l\left[\frac{(2l+1)!}{4\pi}\right]^{1/2}\frac{1}{2^ll!}\left[\frac{(l+m)!}{(2l)!(l-m)!}\right]^{1/2}e^{im\phi}(\sin\theta)^{-m}\times \frac{d^{l-m}}{d(\cos\theta)^{l-m}}(\sin\theta)^{2l}$$

A numerical Python demonstration is below, for some different values of $l$ and $m$.
<figure>
    <img style="width:700px" src="/images/activity/2026/20260727_atomic_orbitals.png">
    <figcaption>Top row is $l=0$ corresponding to $s$ subshell.<br>Second row is $l=1$ corresponding to $p$ subshell.<br>Etc. for $d$ and $f$ subshells.</figcaption>
</figure>

Interestingly, we can go even higher than that with no problem. However, the more subshells there are, the more unstable the atom is, and so these higher subshells haven't been observed yet. Big Chemistry doesn't want you to know this.
<figure>
    <img style="width:800px" src="/images/activity/2026/20260727_atomic_orbitals_2.png">
    <figcaption>$l=4$, called the $g$ subshell. Not observed yet.</figcaption>
</figure>


## IV. Refinements
### IV.1. Hartree-Fock Approximation
<hr style="width:70%; margin-top: 10px; margin-bottom: 10px">

Our calculations were for Hydrogen, with 1 proton and 1 electron. Unfortunately, the vast majority of atoms have more than 1 electron, leading to complex interaction terms in the Hamiltonian. Our equations are complicated enough without this headache.

Roughly, the Hartree-Fock method approximates each electron as moving independently in the background field created by other electrons. <a target="_blank" href="https://en.wikipedia.org/wiki/Slater_determinant">Slater determinants</a> are used to model the electron (a fermion) which must obey the Pauli exclusion principle.

### IV.2. Refinements to the Hydrogen Model
<hr style="width:70%; margin-top: 10px; margin-bottom: 10px">

For more information, see Griffiths, <em>Introduction to Elementary Particles</em>, chp. 5.

- Relativistic corrections change the Hamiltonian by a factor of $\sim \alpha^4 mc^2$, where $\alpha \approx 1/137$ is the fine-structure constant.

- Spin-orbit coupling occurs as the magnetic field induced by the electron's orbital motion interferes with its intrinsic magnetic field from spin. The correction is also of order $\alpha^4 mc^2$.

- Because the electromagnetic field is quantized, virtual loops in the Feynman diagram of $e^- - p^+$ interaction affect the energy levels. The correction is of order $\alpha^5 mc^2$.

- The spin of the nucleus itself contributes a correction of $(m_e/m_p)\alpha^4 mc^2$.
