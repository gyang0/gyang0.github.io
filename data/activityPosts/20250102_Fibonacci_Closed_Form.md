An interesting problem given in Linear Algebra class. We know the recursive form of the Fibonacci sequence, but how do we find a closed form?

The basic idea is quite simple. First we represent the Fibonacci sequence as a series of linear transformations:
$$F_0 = 0$$
$$F_1 = 1$$
$$F_k = F_{k - 1} + F_{k - 2}$$
$$\begin{bmatrix} F_{k} \\ F_{k - 1} \end{bmatrix} = \begin{bmatrix} 1 & 1 \\ 1 & 0 \end{bmatrix}\begin{bmatrix} F_{k - 1} \\ F_{k - 2} \end{bmatrix}$$
$$A = \begin{bmatrix} 1 & 1 \\ 1 & 0 \end{bmatrix}$$

Then it's just a matter of diagonalizing the transformation matrix $A$ (easier said than done though). Finding the eigenvalues,
$$\begin{vmatrix}1 & 1 \\ 1 & 0\end{vmatrix} = 0$$
$$(1 - \lambda)(0 - \lambda) - 1 = 0$$
$$\lambda^2 - \lambda - 1 = 0$$
$$\lambda_1 = \frac{1 - \sqrt{5}}{2} \ \text{ and } \ \lambda_2 = \frac{1 + \sqrt{5}}{2}$$

Now to find the eigenvectors:
$$
\begin{align*}
    \text{For } \lambda_1 = \frac{1 - \sqrt{5}}{2}, \ \ &(A - \lambda_1I)v_1 = 0 \\
    &\begin{bmatrix}1 - \frac{1 - \sqrt{5}}{2} & 1 \\ 1 & -\frac{1 - \sqrt{5}}{2}\end{bmatrix}v_1 = 0 \\
    & v_1 = \begin{bmatrix}\frac{1 - \sqrt{5}}{2} \\ 1\end{bmatrix}
\end{align*}
$$
$$
\begin{align*}
    \text{For } \lambda_2 = \frac{1 + \sqrt{5}}{2}, \ \ &(A - \lambda_2I)v_2 = 0 \\
    &\begin{bmatrix}1 - \frac{1 + \sqrt{5}}{2} & 1 \\ 1 & -\frac{1 + \sqrt{5}}{2}\end{bmatrix}v_2 = 0 \\
    & v_2 = \begin{bmatrix}\frac{1 + \sqrt{5}}{2} \\ 1\end{bmatrix}
\end{align*}
$$

If the diagonalization of the original transformation matrix is $A = SDS^{-1}$,
$$
S = \begin{bmatrix}
    \frac{1 - \sqrt{5}}{2} & \frac{1 + \sqrt{5}}{2} \\
    1 & 1
\end{bmatrix}$$
$$D = \begin{bmatrix}
    \frac{1 - \sqrt{5}}{2} & 0 \\
    0 & \frac{1 + \sqrt{5}}{2}
\end{bmatrix}$$
$$S^{-1} = -\frac{1}{\sqrt{5}}\begin{bmatrix}
    1 & -\frac{1 + \sqrt{5}}{2} \\
    -1 & \frac{1 - \sqrt{5}}{2}
\end{bmatrix} = \begin{bmatrix}
    -\frac{1}{\sqrt{5}} & \frac{1 + \sqrt{5}}{2\sqrt{5}} \\
    \frac{1}{\sqrt{5}} & -\frac{1 - \sqrt{5}}{2\sqrt{5}}\end{bmatrix}$$

But wait, it gets even more messy!
$$\begin{bmatrix} F_{k} \\ F_{k - 1} \end{bmatrix} = A^{k - 1}\begin{bmatrix} F_{1} \\ F_{0} \end{bmatrix} = SD^{k - 1}S^{-1}\begin{bmatrix} 1 \\ 0 \end{bmatrix}$$
$$
\begin{bmatrix} F_{k} \\ F_{k - 1} \end{bmatrix} = \begin{bmatrix}
    \left(\frac{1 - \sqrt{5}}{2}\right)^{k} &
    \left(\frac{1 + \sqrt{5}}{2}\right)^{k} \\
    \left(\frac{1 - \sqrt{5}}{2}\right)^{k - 1} &
    \left(\frac{1 + \sqrt{5}}{2}\right)^{k - 1}
\end{bmatrix}S^{-1}\begin{bmatrix} 1 \\ 0 \end{bmatrix}
$$
$$
\begin{bmatrix}F_k \\ F_{k - 1}\end{bmatrix} = \begin{bmatrix}
    -\frac{1}{\sqrt{5}}\left(\frac{1 - \sqrt{5}}{2}\right)^{k} + \frac{1}{\sqrt{5}}\left(\frac{1 + \sqrt{5}}{2}\right)^{k} &
    \frac{1 + \sqrt{5}}{2\sqrt{5}}\left(\frac{1 - \sqrt{5}}{2}\right)^{k} - \frac{1 - \sqrt{5}}{2\sqrt{5}}\left(\frac{1 + \sqrt{5}}{2}\right)^{k} \\
    -\frac{1}{\sqrt{5}}\left(\frac{1 - \sqrt{5}}{2}\right)^{k - 1} + \frac{1}{\sqrt{5}}\left(\frac{1 + \sqrt{5}}{2}\right)^{k - 1} &
    \frac{1 + \sqrt{5}}{2\sqrt{5}}\left(\frac{1 - \sqrt{5}}{2}\right)^{k - 1} - \frac{1 - \sqrt{5}}{2\sqrt{5}}\left(\frac{1 + \sqrt{5}}{2}\right)^{k - 1}
\end{bmatrix}\begin{bmatrix} 1 \\ 0 \end{bmatrix}
$$

That was a doozy, but at least we have our closed-form expression:
$$F_k = -\frac{1}{\sqrt{5}}\left(\frac{1 - \sqrt{5}}{2}\right)^{k} + \frac{1}{\sqrt{5}}\left(\frac{1 + \sqrt{5}}{2}\right)^{k}$$

Even nicer with $\psi = \frac{1 - \sqrt{5}}{2}$ and $\phi = \frac{1 + \sqrt{5}}{2}$:
$$F_k = -\frac{1}{\sqrt{5}}\psi^{k} + \frac{1}{\sqrt{5}}\phi^{k}$$
$$F_k = \frac{\phi^k - \psi^k}{\sqrt{5}}$$
$$F_k = \frac{\phi^k - \psi^k}{\phi - \psi}$$

Given how closely related the Fibonacci sequence is with the golden ratio, it's nice to see that the closed form can be written in terms of it.
<figure>
    <img style="width: 500px" src="/images/activity/20250103_closed_fibonacci.jpg">
    <figcaption>By <a href="//commons.wikimedia.org/wiki/User:Chris_73" title="User:Chris 73">Chris 73</a> / <a class="external text" href="https://commons.wikimedia.org/">Wikimedia Commons</a>, <a href="https://creativecommons.org/licenses/by-sa/3.0" title="Creative Commons Attribution-Share Alike 3.0">CC BY-SA 3.0</a>, <a href="https://commons.wikimedia.org/w/index.php?curid=19711">Link</a></figcaption>
</figure>
