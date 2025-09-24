## Turing Machines & Busy Beavers
The Busy Beaver game was introduced in a 1962 paper by Tibor Radó. It's played on a single-tape Turing Machine, and the objective is to find the maximum number of steps before the machine halts, or the maximum number of 1s it prints on the tape before halting.

Read more on Wikipedia: <a href="https://en.wikipedia.org/wiki/Busy_beaver" target="_blank">https://en.wikipedia.org/wiki/Busy_beaver</a>

In the simplest case, the Turing Machine will have $n$ internal states. It'll repeat the following until halting (if it halts at all):
- Read the current location on the tape
- Do the action associated with that number + internal state
    - Move left or right
    - Print 0 or 1
    - Change internal state
- If the internal state is "halt," halt.


Here's an example of a Turing Machine (from <a href="https://www.scottaaronson.com/papers/bb.pdf" target="_blank">Scott Aaronson's paper</a>):
<figure>
    <img style="width:400px" src="/images/activity/20250924_busy_beavers_1.png">
    <figcaption>This halts in six steps and ends with four 1s on the tape (if I'm remembering correctly)<br><br>1RB in column A row 0 means: "when reading 0 from tape while in state A, print 1, move right, and change state to B."<br><br>H is the halt state.</figcaption>
</figure>

## Some Notation
- $BB(n)$ is the maximum number of steps any Turing Machine with $n$ internal states _that halts_ can take.
- $Σ(n)$ is the maximum number of 1s any Turing Machine with $n$ internal states _that halts_ can write on the tape.

The amount of Turing Machines grows in $O(n^n)$, for $n$ internal states. It gets very hard to check all possible machines even as $n$ increases slightly.

Aaronson's paper has a nice table:
<figure>
    <img style="width:600px" src="/images/activity/20250924_busy_beavers_2.png">
    <figcaption>https://www.scottaaronson.com/papers/bb.pdf</figcaption>
</figure>

A question is, is there a machine that's both $BB(n)$ and $Σ(n)$? So a machine that takes the maximum number of steps and also prints the maximum number of 1s.

## Brute Forcing
I wrote some inefficient code to brute force the answer for $n=2$ and $n=3$. Not going to go further than that, because even the $n=3$ case took 40 minutes.

There are probably tons of clever optimizations that can be made, but I'm not smart enough for those. So this is almost a pure brute force of every possible Turing Machine.

<a href="https://github.com/gyang0/busy-beavers/blob/main/main.cpp" target="_blank">This is the repository</a>. Basically, it goes through every possible Turing Machine in its table format, simulates it, and keeps a running count of the max steps and number of 1s. If a program takes more steps than the max, it means it's an infinite loop, so the program stops. Around 200 lines, could be shorter.

It also only searches Turing Machines that immediately move left. Because by reversing every direction, you can also get every Turing Machine that immediately moves right.


<figure>
    <img style="width:600px" src="https://raw.githubusercontent.com/gyang0/busy-beavers/refs/heads/main/n2_beavers.png">
    <figcaption>$n=2$ was near-instant.</figcaption>
</figure>

<figure>
    <img style="width:400px" src="https://raw.githubusercontent.com/gyang0/busy-beavers/refs/heads/main/n3_beavers.png">
    <figcaption>$n=3$ took around 40 minutes.</figcaption>
</figure>

So 2 programs that are in both $BB(n)$ and $Σ(n)$ for $n=2$ (counting the reverse of the one found). But no programs in $n=3$ that's in both $BB(n)$ and $Σ(n)$, maybe.

A complete list of found Busy Beaver programs is included in the repo: https://github.com/gyang0/busy-beavers/blob/main/README.md

There are probably lots of mistakes here. I'll try to fix when they come up.