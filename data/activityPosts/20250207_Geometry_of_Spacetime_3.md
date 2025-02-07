Part 3 of a 3-stage post on the very basics of spacetime. This post will cover Lorentz transformations, the Poincaré group, and a bit more rigorous derivation of the spacetime metric. Based on my notes for UP070's relativity section.


## Table of Contents
- [Lorentz Transformations](#lorentz)
- [Poincaré Group & Isometries](#poincare)
- [Topology Infodump](#topology)
- [Deriving the Spacetime Metric](#spacetime-metric)

## Lorentz Transformations <a name="lorentz"></a>
The Lorentz transformations take one event in Frame $S$ and maps it onto another Frame $S^\prime$ that moves at a constant velocity relative to $S$. We can derive them using the time dilation and length contraction shown in part 2. For the time being, only consider relative movement in $x$ (equations for $y$ and $z$ have the same form).

<figure>
    <img style="width:500px" src="/images/activity/20250207_geometry_of_spacetime_2.png">
    <figcaption></figcaption>
</figure>

Without counting motion, $x = \frac{x^\prime}{\gamma}$ from length contraction. But $x$ is offset to the left by $vt$, so $x - vt = \frac{x^\prime}{\gamma}$. This is the first of our Lorentz transformations:

<div style="display: flex; justify-content: center">
    <p style="width: 30%; text-align: center; vertical-align: center; border: 2px solid var(--txt-color)">
        $x^\prime = \gamma(x - vt)$
    </p>
</div>

From symmetry, we can also view Frame $S$ as moving to the left relative to Frame $S^\prime$. In that case, it's just a simple matter of flipping the primes and reversing $v$ in our equation: $x = \gamma(x^\prime + vt^\prime)$. Solve this for $x^\prime$ and substitute into our first equation to get
$$\frac{x}{\gamma} - vt^\prime = x^\prime = \gamma(x - vt)$$
$$\frac{x}{\gamma v} - t^\prime = \frac{\gamma}{v}(x - vt)$$
$$t^\prime = \frac{x}{\gamma v} - \frac{\gamma^2}{\gamma v}(x - vt) = \frac{x}{\gamma v}(1 - \gamma^2) + \gamma t$$

Now substitute $\gamma = \frac{1}{\sqrt{1 - v^2/c^2}}$ to simplify:
$$t^\prime = \frac{x}{\frac{v}{\sqrt{1 - v^2/c^2}}}\left(1 - \frac{1}{1 - v^2/c^2}\right) + \gamma t$$
$$t^\prime = \frac{\left(\frac{-v^2/c^2}{1 - v^2/c^2}x\right)}{\left(\frac{v}{\sqrt{1 - v^2/c^2}}\right)} + \gamma t$$
$$t^\prime = \frac{-v^2/c^2}{v\sqrt{1 - v^2/c^2}} \ x + \gamma t$$
$$t^\prime = \gamma\left(\frac{-vx}{c^2}\right) + \gamma t = \gamma\left(t - \frac{vx}{c^2}\right)$$

We now have our Lorentz transformations:
<div style="display: flex; justify-content: center">
    <p style="width: 30%; text-align: center; vertical-align: center; border: 2px solid var(--txt-color)">
        $x^\prime = \gamma(x - vt)$<br>
        $t^\prime = \gamma\left(t - \frac{vx}{c^2}\right)$
    </p>
</div>

These are transformations involving both space and time, while preserving the spacetime metric (the "distance" between events).


## Poincaré Group & Isometries <a name="poincare"></a>
The Poincaré group are 10 isometries in spacetime. An isometry is a transformation that leaves the metric invariant. Remember, our spacetime metric is $ds^2 = c^2dt^2 - (dx^2 + dy^2 + dz^2)$.

 <table style="margin: 0 auto; width: 80%; line-height: 2.3em">
    <tr>
        <td>Time translations</td>
        <td>
            $\hat{T}(\epsilon): \hat{T}(\epsilon)t \rightarrow t + \epsilon$
        </td>
    </tr>
    <tr>
        <td>Spatial translations</td>
        <td>
            $\hat{X}(\epsilon): \hat{X}(\epsilon)x \rightarrow x + \epsilon$<br>
            $\hat{Y}(\epsilon): \hat{Y}(\epsilon)y \rightarrow y + \epsilon$<br>
            $\hat{Z}(\epsilon): \hat{Z}(\epsilon)z \rightarrow z + \epsilon$
        </td>
    </tr>
    <tr>
        <td>Spatial rotations</td>
        <td>
            $\hat{R}_x(\theta): \hat{R}_x(\theta)(x, y, z) \rightarrow \left(x, y\cos\theta + z\sin\theta, -y\sin\theta + z\cos\theta\right)$<br>
            $\hat{R}_y(\theta): \hat{R}_y(\theta)(x, y, z) \rightarrow \left(x\cos\theta - z\sin\theta, y, x\sin\theta + z\cos\theta\right)$<br>
            $\hat{R}_z(\theta): \hat{R}_z(\theta)(x, y, z) \rightarrow \left(x\cos\theta + y\sin\theta, -x\sin\theta + y\cos\theta, z\right)$
        </td>
    </tr>
    <tr>
        <td>Lorentz transformations</td>
        <td>
            $\hat{\Lambda}(\beta_x): \hat{\Lambda}(\beta_x)(ct, x, y, z) \rightarrow (ct^\prime, x^\prime, y, z)$<br>
            $\hat{\Lambda}(\beta_y): \hat{\Lambda}(\beta_y)(ct, x, y, z) \rightarrow (ct^\prime, x, y^\prime, z)$<br>
            $\hat{\Lambda}(\beta_z): \hat{\Lambda}(\beta_z)(ct, x, y, z) \rightarrow (ct^\prime, x, y, z^\prime)$
        </td>
    </tr>
</table>

<br>
<br>

Notice that the first 7 are from Euclidean isometries. The only new ones are the Lorentz transformations. Any combination of these 10 transformations will also leave the metric invariant.

## Topology Infodump <a name="topology"></a>
<br>
<div style="display: flex; justify-content: center">
    <p style="width: 80%; text-align: center; vertical-align: center; border: 2px solid var(--txt-color)">
        <strong><em>"Spacetime is a differentiable 4-dimensional pseudo-Riemannian connected Hausdorff space."</em></strong>
    </p>
</div>

Let's unpack that a bit.
1. **"differentiable"**: Intuitively, this means we want spacetime to act like differentiable 2D or 3D spaces &mdash; no discontinuities or any weird stuff. That's not a rigorous definition, so check Wikipedia for more.
2. **4-dimensional"**: Spacetime has 1 temporal and 3 spatial coordinates.
3. **"pseudo-Riemannian"**: To explain this, first we need to go through metric spaces.

<div style="display: flex; justify-content: center">
    <p style="width: 70%; text-align: center; vertical-align: center; border: 1px solid var(--txt-color)">
        <strong><em>"If a distance function d can be defined on a space with the following properties,<br> then that space is a metric space."</em></strong>
        $$d(x, y) = d(y, x) \geq 0, \ \ \ \ \forall x, y \in M$$
        $$d(x, y) = 0 \iff x = y$$
        $$d(x, z) \leq d(x, y) + d(y, z)$$
    </p>
</div>

The first condition says that the distance between two points doesn't depend on the order. The second condition says that if the distance between two points are zero, they must be the same point. The third condition is the triangle inequality.

A Riemannian metric space is one with a form that allows for finding distances and angles. In general, a Riemannian metric function has the form $dl^2 = \sum_{i,j = 1}^{n} g_{ij}dx^idy^j$. But let's only consider te diagonal elements to get
$$dl^2 = \sum_{i = 1}^{n} g_{ii}dx^idy^i$$

Where the array $[g_{ii}]$ forms the "metric tensor." This form will be used to derive the spacetime metric later on.

Spacetime, however, is a pseudo-Riemannian metric space. We have to relax the constraints a bit:
<div style="display: flex; justify-content: center">
    <p style="width: 70%; text-align: center; vertical-align: center; border: 1px solid var(--txt-color)">
        $$d(x, y) = d(y, x) \ \ \ \ \ \text{(distance can now be real or imaginary)}$$
        $$d(x, y) = 0 \iff x = y \ \ \ \ \ \text{(no longer necessarily true)}$$
        $$d(x, z) \leq d(x, y) + d(y, z) \ \ \ \ \ \text{(this one still works)}$$
    </p>
</div>

4. **"connected Hausdorff space"**: This is the definition of a topological manifold. So we might've also said "Spacetime is a differentiable 4-dimensional pseudo-Riemannian manifold."

"Connected" means that the whole space isn't disjoint: we can go from any point to another by a smooth transition through the manifold.

A "Hausdorff space" is one in which the following holds:
<div style="display: flex; justify-content: center">
    <p style="width: 70%; text-align: center; vertical-align: center; border: 1px solid var(--txt-color)">
        <strong><em>Given a topological space $X$ and open sets $\ O_1$ and $O_2$,</em></strong>
        $$\forall x \neq y \in X, \; \exists \ O_1, O_2 \ \textit{ such that } \ x \in O_1 \; \& \; y \in O_2 \; \& \; O_1 \cap O_2 = 
        \emptyset$$
    </p>
</div>

In plain English, "For 2 distinct points in X, open sets can be constructed around each such that they don't intersect." Basically, no matter how close 2 points are, we can always find some between them that are closer.

Now go feel smart saying "Spacetime is a differentiable 4-dimensional pseudo-Riemannian connected Hausdorff space."



## Deriving the Spacetime Metric <a name="spacetime-metric"></a>
Now we apply the Riemannian metric form to spacetime. Let $x^0 = ct$, $x^1 = x$, $x^2 = y$, and $x^3 = z$.
$$ds^2 = \sum_{i = 0}^{3} g_{ii}dx^idy^i$$
$$ds^2 = g_{00}dx^0dx^0 + g_{11}dx^1dx^1 + g_{22}dx^2dx^2 + g_{33}dx^3dx^3$$
$$ds^2 = g_{00}c^2(dt)^2 + g_{11}(dx)^2 + g_{22}(dy)^2 + g_{33}(dz)^2$$

If $dt = 0$, we expect our Euclidean metric ($dl^2 = dx^2 + dy^2 + dz^2$) to hold. Then $g_{11} = g_{22} = g_{33}$. Additionally, $g$ is a scaling factor that doesn't affect our units. It turns out that $g_{00} = -g_{11}$, and the spacetime metric is
$$ds^2 = c^2dt^2 - (dx^2 + dy^2 + dz^2)$$

<br>
<br>

Some interesting cases in 1 dimension with $ds^2 = c^2dt^2 - dx^2$ are below. (it can be extended to 4 dimensions)
<ul style="margin-top: -40px">
    <li>For lightlike separated events, $cdt = dx$, so $ds^2 = 0$ and the "distance" is zero.</li>
    <li>For timelike separated events, $cdt > dx$, so $ds^2 > 0$ and the "distance" is a real number.</li>
    <li>For spacelike separated events, $cdt < dx$, so $ds^2 < 0$ and the "distance" is an imaginary number.</li>
</ul>
