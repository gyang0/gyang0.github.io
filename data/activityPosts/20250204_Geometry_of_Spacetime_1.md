<div style="display: flex; justify-content: center; width: 80%; margin: 0 auto; padding-left: 70px">
    <div style="width:20%">
        <img src="https://upload.wikimedia.org/wikipedia/commons/3/35/De_Raum_zeit_Minkowski_Bild_%28cropped%29.jpg" style="width:100%">
    </div>
    <div>
        <p style="margin-left: 50px; width: 80%; color: var(--dark-grayish); line-height: 1.5em"><em>Henceforth space by itself, and time by itself, are doomed to fade away into mere shadows, and only a union of the two will preserve an independent reality.</em><br><span style="float:right">- Hermann Minkowski</span></p>
    </div>
</div>

<br>
<br>
<br>

Literally everyone uses that quote so I might as well put it here too. This is part 1 of a 3-stage post on the very basics of spacetime. The topics covered in this post are: basics of Minkowski diagrams, the causal diamond, and a geometrical derivation of the spacetime metric. Most of this is based on my notes for UP070's relativity section.

## Table of Contents
- [The Basics](#the-basics)
- [Lightlines at 45 Degrees](#lightlines)
- [The Causal Diamond](#causal-diamond)
- [Deriving the Spacetime Metric](#spacetime-metric)


## The Basics <a name="the-basics"></a>
This is a Minkowski diagram (or spacetime diagram):
<figure>
    <img style="width:600px" src="/images/activity/20250204_geometry_of_spacetime_1.png">
    <figcaption>Were you expecting something more like <a href="https://upload.wikimedia.org/wikipedia/commons/d/d1/GPB_circling_earth.jpg" target="_blank">this</a>?</figcaption>
</figure>

Yes, it's that simple. The only difference you might notice with a Cartesian plane is the change in variables: $ct$ instead of $y$. "Spacetime" is just what it says: a 4D space that involves both time and space. In the Minkowski diagram, time is represented on the vertical axis, while space is represented on the horizontal axis.

This doesn't capture spacetime perfectly, of course. We only get 1 spatial dimension (labelled $x$) instead of the 3-dimensional space we're used to. Nevertheless, it works very well.

Additionally, we use $ct$ to represent our time axis instead of $t$ by itself. $c$ is the speed of light, around $3 \times 10^8 \ \text{m/s}$. When we need to use special relativity, we're probably dealing with relativistic speeds close to $c$. Hence it makes sense to use $ct$ on the axis, to avoid writing huge numbers on the graph.


## Worldines at 45 Degrees <a name="lightlines"></a>
There's one additional feature that we include on this diagram: lightlines at 45 degrees.
<figure>
    <img style="width:600px" src="/images/activity/20250204_geometry_of_spacetime_2.png">
    <figcaption></figcaption>
</figure>

Our 45-degree lines are the set of points where $\Delta x = c \Delta t$, or $v = c$. Thus, it represents the motion of an object (centered at the origin) moving at the speed of light.

The slope on a Minkowski diagram is $\frac{c\Delta t}{\Delta x} = \frac{c}{v}$. By the special theory of relativity, nothing travels faster than light. Therefore, lines with slopes *steeper* than 45 degrees represents a motion where $v < c$, which is possible. Lines with slopes *less* than 45 degrees represents a motion where $v > c$, which is impossible.

Here are a few more examples to clarify motion in a Minkowski diagram:
<div style="display: flex; width: 80%; margin: 0 auto">
    <div style="width:40%">
        <img src="/images/activity/20250204_geometry_of_spacetime_3.png" style="width:100%">
    </div>
    <div style="width:60%; margin-left: 50px">
        <p>Blue line represents motion slower than speed of light (steeper than 45 degrees).<br>Starts at $x = 0$ when $t = 0$.</p>
    </div>
</div>

<div style="display: flex; width: 80%; margin: 0 auto">
    <div style="width:40%">
        <img src="/images/activity/20250204_geometry_of_spacetime_4.png" style="width:100%">
    </div>
    <div style="width:60%; margin-left: 50px">
        <p>Blue line represents an object staying at rest <em>in this frame</em>. It might be in motion at other frames, but it's at rest here.</p>
        <p>Easy to see that the position $x$ doesn't change as $t$ changes.</p>
    </div>
</div>

<br>
<br>
<br>

## The Causal Diamond <a name="causal-diamond"></a>
Remember, information can't be transmitted faster than the speed of light. Therefore, if two events are causally related, then the line connecting them should have a slope of 45 degrees minimum. Consider two events $A$ and $B$, where $A$ is the cause of event $B$. Then we can draw a causal diamond on the Minkowski diagram:
<figure>
    <img style="width:600px" src="/images/activity/20250204_geometry_of_spacetime_5.png">
    <figcaption>Note the shaded green region.</figcaption>
</figure>

The causal diamond is the overlap between 1). the set of events that can be causally affected by $A$ and 2). All past events that could have causally affected $B$. Since causes always precede their effects, the causal diamond's area is constant in all frames of reference. Check out <a href="https://www.desmos.com/calculator/dh0hqgmphw" target="_blank">this graph on Desmos</a> for a demonstration of this idea (from the course). Drag the $\beta$ slider and see the causal diamond warp, but preserve its area.

## Deriving the Spacetime Metric <a name="spacetime-metric"></a>
A more math-y proof will be done in part 2. But a purely geometric proof can be done with the causal diamond, which is really neat. What we're after here is a kind of "distance" between two events in spacetime that will remain constant no matter what frame we're in. Basically, the spacetime version of the Euclidean metric $\Delta l^2 = \Delta x^2 + \Delta y^2 + \Delta z^2$.

First, consider Frame $S$, in which events $A$ and $B$ are observed to happen at the same position:
<figure>
    <img style="width:500px" src="/images/activity/20250204_geometry_of_spacetime_6.png">
    <figcaption>This is a pain without Desmos.</figcaption>
</figure>

Then consider Frame $S^\prime$, which is moving slightly with respect to Frame $S$, such that events $A$ and $B$ do not occur at the same position. Overlay this on our diagram with a $ct^\prime$ axis.
<figure>
    <img style="width:500px" src="/images/activity/20250204_geometry_of_spacetime_7.png">
    <figcaption>Hopefully this makes sense.</figcaption>
</figure>

The area of the causal diamond must remain the same, so let's try that. Here's the figure with more geometry:
<figure>
    <img style="width:500px" src="/images/activity/20250204_geometry_of_spacetime_8.png">
    <figcaption></figcaption>
</figure>

In Frame $S$, the area is just the area of the rhombus. Frame $S^\prime$ is a bit harder, but by chasing similar triangles, it can be proven that the area of the two blue sections marked are the same.
$$\text{Area}_{S} = \frac{1}{2}(\Delta s)^2$$

$$\text{Area}_{S^\prime} = \frac{1}{2}(c\Delta t)^2 - \frac{1}{2}(\Delta x)^2$$

Setting the two equal, we have $\Delta s^2 = c^2\Delta t^2 - \Delta x^2$. However, note that we're only in one dimension, namely $x$. To properly consider all 3 dimensions, we have to consider $\Delta x^2 + \Delta y^2 + \Delta z^2$ instead of just $\Delta x^2$. The final spacetime metric is
$$\Delta s^2 = c^2\Delta t^2 - \Delta x^2 - \Delta y^2 - \Delta z^2$$

(This will be done more rigorously in part 2. In the meantime, compare with the Euclidean metric: $\Delta l^2 = \Delta x^2 + \Delta y^2 + \Delta z^2$)