Part 2 of a 3-stage post on the very basics of spacetime. This post will cover the kinematical effects of special relativity &mdash; time dilation, length contraction, and the twin paradox. Based on my notes for UP070's relativity section.

This one isn't so much about the geometry as the algebraic formulation of the effects. They can be seen visually on a Minkowski diagram by plotting 2 events, but I'm too lazy to do that.

## Table of Contents
- [Time Dilation](#time-dilation)
- [Length Contraction](#length-contraction)
- [Resolving the Twin Paradox](#twin-paradox)

## Time Dilation <a name="time-dilation"></a>
One of the many funky results of special relativity (basically that the speed of light, $c$, is constant for all inertial reference frames). Time appears to move more slowly for a moving observer than an observer at rest.

A standard example to show this uses light clocks. Here's how they work:
<figure>
    <img style="width:600px" src="/images/activity/20250205_geometry_of_spacetime_1.png">
    <figcaption></figcaption>
</figure>

Now say we have two observers, Alice and Bob. Both have light clocks that are synchronized. Bob boards a spaceship and travels at a relativistic speed $v$ relative to Alice. What time does Alice measure for Bob? (Recall that $c$ is constant in both frames.)

<div style="display: flex; width: 80%; margin: 0 auto">
    <div style="width:30%">
        <img src="/images/activity/20250205_geometry_of_spacetime_2.png" style="width:60%; float:right">
    </div>
    <div style="width:70%; margin-left: 50px">
        <p>In Bob's frame, Bob simply sees the light shoot out and bounce back.<br>The time Bob measures is $\Delta t_B = \frac{2D}{c}$.</p>
    </div>
</div>

<div style="display: flex; width: 80%; margin: 0 auto">
    <div style="width:30%">
        <img src="/images/activity/20250205_geometry_of_spacetime_3.png" style="width:100%">
    </div>
    <div style="width:70%; margin-left: 50px">
        <p>In Alice's frame, the light from Bob's clock takes a skewed path.<br>The speed of light is the same, so Alice measures $\Delta t_A = \frac{2\sqrt{D^2 + L^2}}{c}$.</p>
    </div>
</div>

<br>
<br>
<br>

With a bit of algebra and using $L = v\frac{\Delta t_B}{2}$, we get $\Delta t_A = \frac{2D}{\sqrt{c^2 - v^2}}$, or $\Delta t_A = \frac{1}{\sqrt{1 - v^2/c^2}}\Delta t_B$. Let $\gamma = \frac{1}{\sqrt{1 - v^2/c^2}}$, and we have our time dilation equation:
$$\Delta t_A = \gamma \Delta t_B$$

A stationary observer will see a moving clock to tick faster. Note that this is reciprocal &mdash; Alice sees Bob's clock to tick slower, and Bob sees Alice's clock to tick slower.


## Length Contraction <a name="length-contraction"></a>
Yet another funky effect of special relativity: a moving object is measured to be shorter in its direction of motion than it is at rest.

We can set up another experiment to show this. Put Alice and Abby at two space stations some distance apart. Bob travels at velocity $v$ from Alice to Abby.

<figure>
    <img style="width:600px" src="/images/activity/20250205_geometry_of_spacetime_4.png">
    <figcaption></figcaption>
</figure>

In Alice's frame, the length betewen Alice and Abby is $L_A = v\Delta t_A$, where $\Delta t_A$ is the time it takes for Bob to complete the trip from Alice's frame.

In Bob's frame, the length between Alice and Abby is $L_B = v\Delta t_B$, where $\Delta t_B$ is the time to complete the trip in Bob's frame. This can be related to $\Delta t_A$ with the time dilation equation $\Delta t_A = \gamma \Delta t_B$. By substituting this and $L_A = v\Delta t_A$, we get our length contraction relation:
$$L_B = \frac{L_A}{\gamma}$$

An object in a moving frame will appear shorter *along its direction of movement* than in a stationary frame.

## Resolving the Twin Paradox  <a name="twin-paradox"></a>
A graphical way to resolve the twin paradox. Not exactly the most rigorous, but it's quite intuitive.

Say Alice and Bob are twins. Bob boards a space shuttle and reaches relativistic speeds, arrives at a distant planet, then returns to Earth at relativistic speed. After this process, are they the same age? Turns out, Bob has aged less.

By naively applying time dilation, it seems as though both twins should be the same age back on Earth &mdash; even though both of them see the other to be time dilated, this effect is reciprocal, isn't it? The actual reason is <a href="https://en.wikipedia.org/wiki/Twin_paradox#Resolution_of_the_paradox_in_special_relativity" target="_blank">more subtle</a>, but this explanation will only use the causal diamond.

By geometry, the area of the causal diamond is proportional to $c\Delta \tau^2$, where $\tau$ is the proper time: the time between events in the frame *where they occur at the same location*. This can be seen with a Minkowski diagram for Alice's frame. $A$ is when Bob departs, and $B$ is when Bob arrives.

<figure>
    <img style="width:500px" src="/images/activity/20250205_geometry_of_spacetime_5.png">
    <figcaption>Alice's frame</figcaption>
</figure>

Now for Bob's frame:
<figure>
    <img style="width:500px" src="/images/activity/20250205_geometry_of_spacetime_6.png">
    <figcaption>Bob's frame</figcaption>
</figure>

We see that the total area of the causal diamonds is less for Bob than it is for Alice. Since $\text{Area}_{\text{CD}} \propto \Delta s^2 \propto (c\Delta\tau)^2$, $\Delta\tau$ for Bob is less than it is for Alice. Intuitively, this must mean that Bob has aged less than Alice when he returns from his trip.