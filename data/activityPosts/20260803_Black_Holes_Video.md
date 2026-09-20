In the interest of good science, here are the interesting bits I skipped over. If I missed anything, please let me know at: <a target="_blank" href="https://www.admonymous.co/gene">admonymous.co/gene</a>

The video was fun to make. Though I'm slightly disappointed that I ended up skimming a lot of the details to fit the time limit &ndash; I was hoping to avoid making a pop-sci flick, but it seems to be so. Well, as long as I got the gravity = curvature across, I'm happy.

<span style="color:var(--reddish)">Note: Absolutely no AI was used in drafting or creating the video.</span>

<div style="display: flex; justify-content: center">
    <iframe style="width:50%; height: 400px" src="https://www.youtube.com/embed/6HTT4o9cTHg"></iframe>
</div>

## Notes & Errata
<hr style="width:70%; margin-top: 10px; margin-bottom: 10px">

[<span style="color:var(--bluish)">00:01</span>]&nbsp; This (and the final scene) was filmed on the top of my roof at night. How it looked:
<figure>
    <img style="width:450px" src="images/activity/2026/20260803_black_holes_3.png">
    <figcaption>Luckily I did not fall</figcaption>
</figure>

[<span style="color:var(--bluish)">00:10</span>] &nbsp; I had some cloth left over from my <a target="_blank" href="/activity.html?page=7">Halloween costume</a> in 2024.

[<span style="color:var(--bluish)">00:10</span>]&nbsp; For the sake of visualization, space has been compressed to two dimensions. This is a more accurate picture:
<figure>
    <img style="width:300px" src="images/activity/2026/20260803_black_holes_1.png">
    <figcaption>From <a target="_blank" href="https://1ucasvb.tumblr.com/">https://1ucasvb.tumblr.com/</a></figcaption>
</figure>

[<span style="color:var(--bluish)">00:28</span>] &nbsp; I'm not sure where the exact wording of this quote comes from. A version of it appears in Misner-Thorne-Wheeler's <em>Gravitation</em> (1973), which I used as the date.

[<span style="color:var(--bluish)">00:30</span>] &nbsp; No actual physics is being done here. Everything was coded ad hoc in Manim with Gaussian functions to model the "bend" of 2d space.

[<span style="color:var(--bluish)">00:38</span>]&nbsp; Time isn't being factored into the diagrams. Too difficult to animate accurately. Additionally, I keep using the word "distance," mostly for the sake of intuition. A more proper term would be "spacetime interval." Distance is easily confused with "spatial distance," whereas a spacetime interval is dependent on time as well.

[<span style="color:var(--bluish)">00:45</span>]&nbsp; First of all, I should've really written the "time difference" as well to be more accurate. Second of all, I have no idea why I chose "London" and "Denver" as the two points. I have no connection to London, at least. I lived near Denver for a year in middle school.

[<span style="color:var(--bluish)">00:51</span>]&nbsp; $\Lambda$ is the cosmological constant. The history goes: Einstein originally introduced $\Lambda$ as a "correction factor" after the Einstein Field Equations predicted an expanding/contracting universe. Scientists thought the universe had to be static. But in 1929, Hubble showed that the universe was actually expanding, so there was no need for $\Lambda$ anymore. Later, scientists discovered that the universe's expansion was accelerating, requiring $\Lambda > 0$. Nowadays, we use it as the factor representing dark energy.

A related point: the <a href="https://en.wikipedia.org/wiki/Cosmological_constant_problem" target="_blank">cosmological constant problem</a>, where the theoretical and experimental values differ by 50 &ndash; 122 orders of magnitude.

Besides the apperance of $\Lambda$, note how elegant the left-hand side is. $R_{\mu\nu}$ is the Ricci tensor, which we get by contracting the Riemann tensor, which is defined using the Christoffel symbols, which is defined using...the metric tensor! (with some partials throughout.) Everything stems from the metric tensor, thus everything in the LHS stems from the geometry of spacetime. ($R$ is just the Ricci scalar; $R = g^{\mu\nu}R_{\mu\nu}$)

$$\begin{align*}
    \text{Christoffel symbols: } &\Gamma^\lambda_{\mu\nu} = \frac 1 2 g^{\lambda\sigma}(\partial_\mu g_{\nu\sigma} + \partial_\nu g_{\sigma\mu} - \partial_\sigma g_{\mu\nu}) \\
    \text{Riemann tensor: } &R_{\hphantom{/}\sigma\mu\nu}^\rho = \partial_\mu\Gamma^\rho_{\nu\sigma} - \partial_\nu\Gamma^\rho_{\mu\sigma} + \Gamma^\rho_{\mu\lambda}\Gamma^\lambda_{\nu\sigma} - \Gamma^\rho_{\nu\lambda}\Gamma^\lambda_{\mu\sigma} \\
    \text{Ricci tensor: } &R_{\mu\nu} = R^\lambda{}_{\mu\lambda\nu}
\end{align*}$$

[<span style="color:var(--bluish)">01:01</span>]&nbsp; First, a star supported by heat of fusion runs out of "fuel," collapsing under its own gravity. It could reach Fermi degeneracy pressure, where repulsion between atoms perfectly cancels out the gravitational pull. The result is a <em>white dwarf</em>. If the mass exceeds the Chandrasekhar limit, the star keeps collapsing. Under inverse beta decay, electrons and protons combine to form neutrons and neutrinos ($p^+ + e^- \rightarrow n + \nu_e$). Neutrinos fly away and we're left with a <em>neutron star</em>. It's theorized that if the mass is high enough (Tolman–Oppenheimer–Volkoff limit), the neutron star keeps collapsing until it becomes a black hole. See Carroll chp. 5 for details.

[<span style="color:var(--bluish)">01:06</span>]&nbsp; By the way, I only use the Schwarzschild metric. Others exist, like the Reissner-Nordström metric for charged black holes and the Kerr metric for spinning black holes.
$$\begin{gather*}
    ds^2_{RN} = -\left(1 - \frac{2GM}{rc^2} + \frac{GQ^2}{4\pi\varepsilon_0 r^2c^4}\right)c^2dt^2 + \left(1 - \frac{2GM}{rc^2} + \frac{GQ^2}{4\pi\varepsilon_0 r^2c^4}\right)^{-1}dr^2 + r^2 d\theta^2 + r^2\sin^2\theta d\phi^2 \\
    Q = \text{Electric charge}
\end{gather*}$$

$$\begin{gather*}
    ds^2_{Kerr} = -\left(1 - \frac{2GMr}{\rho^2}\right)c^2 dt^2 + \frac{\rho^2}{\Delta}dr^2 + \rho^2 d\theta^2 + \left[r^2 + a^2 + \frac{2GMra^2}{c^2\rho^2}\sin^2\theta\right]\sin^2\theta d\phi^2 - 2\cdot\frac{2GMra\sin^2\theta}{c^2\rho^2}cdtd\phi \\
    \rho^2 = r^2 + a^2\cos^2\theta \\
    \Delta = r^2 - \frac{2GMr}{c^2} + a^2 \\
    a = J/Mc \\
    J = \text{Angular momentum}
\end{gather*}$$

[<span style="color:var(--bluish)">01:07</span>]&nbsp; Interestingly, the Schwarzschild radius equation is what we'd get by considering the classical escape velocity $v = \sqrt{2GM/r}$, then finding $r$ such that the escape velocity is the speed of light ($c$). But this is just a coincidence.

[<span style="color:var(--bluish)">01:13</span>]&nbsp; The shape is called a "Flamm paraboloid." The cylindrical part extending downwards is the Schwarzschild radius.

<figure>
    <img style="width:400px" src="https://upload.wikimedia.org/wikipedia/commons/b/b4/Flamm.jpg">
    <figcaption><a target="_blank" href="https://www.physics.unlv.edu/~jeffery/astro/black_hole/black_hole_schwarzschild_flamm_paraboloid.html">https://www.physics.unlv.edu/~jeffery/astro/black_hole/black_hole_schwarzschild_flamm_paraboloid.html</a></figcaption>
</figure>

[<span style="color:var(--bluish)">01:15</span>]&nbsp; Another case where I skimmed the details...The reason light can't escape is pretty neat to see mathematically. In a nutshell, $r=2GM/c^2$ (the event horizon) isn't a true singularity. It's just an artifact of our coordinate system. By switching to different coordinates, e.g. Eddington-Finkelstein coordinates, we can see that a massless test particle's light cone "closes up" as $r \rightarrow 0$. So it's impossible for the particle to escape. For all the math see Carroll section 5.5.

[<span style="color:var(--bluish)">01:28</span>]&nbsp; <em>Black because nothing, even light, can escape</em> &mdash; It's true that light can't escape a black hole. But black holes aren't fully "black." They emit radiation, as Hawking discovered in 1974. This isn't a contradiction by the way. The radiation is emitted just outside the Schwarzschild radius, where it can safely escape. You need Quantum Field Theory to describe this.

[<span style="color:var(--bluish)">01:32</span>]&nbsp; The Chandra image is from x-rays. That's why it's bright and relatively "spherical." Pretty.

<figure>
    <img style="width:400px" src="https://chandra.harvard.edu/photo/2011/cygx1/cygx1_xray_420.jpg">
    <figcaption><a target="_blank" href="https://chandra.harvard.edu/photo/2011/cygx1/cygx1_xray_420.jpg">https://chandra.harvard.edu/photo/2011/cygx1/cygx1_xray_420.jpg</a></figcaption>
</figure>

[<span style="color:var(--bluish)">01:50</span>]&nbsp; Disclaimer: string theory isn't the only hotshot theory in town.


## Tools & References
<hr style="width:70%; margin-top: 10px; margin-bottom: 10px">

Almost everything I know about general relativity comes from Sean Carroll's <em>Spacetime and Geometry</em>. If there are any mistakes in the video or this post, they're mine, not his. Further valuable references were:

- Taylor & Wheeler, <em>Spacetime Physics</em>
- Steven Weinberg, <em>Gravitation and Cosmology</em>

Animations were done in <a href="https://www.manim.community/" target="_blank">Manim</a>. The video itself was edited with Davinci Resolve, building on my experience editing performances for my high school orchestra club.

Much thanks to my friends, with whom I spammed math/physics in Discord.
