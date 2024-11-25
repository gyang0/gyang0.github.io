## Typing Polytonic Greek
Well, to write any Polytonic Greek, you want to get the keyboard. On Windows, you can install the "Greek - Polytonic" language pack (features like handwriting and speech-to-text aren't necessary and can be left out to save space).

Then on the bottom right of your screen, if you click on the thing marked "ENG" (or something), you should get the list of options:

<figure>
    <img style="width:400px" src="/images/activity/20241108_Polytonic_Greek_Setup_1.png">
    <figcaption>This is what mine looks like.</figcaption>
</figure>

(Side note: the Maori keyboard is great for Latin - same layout as an English keyboard, but with macron functionality.)

Then you just need to learn where the letters are. It's helpful to pull up an image of the keyboard and write things out while consulting that, until you don't need it.

The accents are the tricky part. There's a lot of nice shortcuts for getting them, but they can be complicated. u/sarcasticgreek has a great compilation of them under <a href="https://www.reddit.com/r/AncientGreek/comments/wbpoy2/greek_keyboard_and_accent_questions/">this reddit post</a>.


## Using with LaTeX
LaTeX looks clean, Greek looks nice, so both of them together looks amazing.

These are the packages you need:
```latex
\usepackage[greek, english]{babel}
\usepackage{teubner}
\usepackage{libertine}
```
<br>

First we get the Greek and English font configurations from Babel.

Teubner is mostly used for the macrons - though the Polytonic Greek keyboard supports macrons, it won't add them in cases where it's unnecessary (e.g. ᾳ and η are long by default, adding a macron won't work). Sometimes you want them though, for the sake of clarity. In that case, just use `\M{letter}`, like `\M{ᾳ}` or `\M{η}`.

Libertine is for the font. It goes well with both the Greek and Latin scripts.

Then whenever you need to insert Greek, use `\textgreek{...}`. For example, `\textgreek{χώρ\M{{ᾳ}}}` gives you
<figure>
    <img style="width:100px" src="/images/activity/20241108_Polytonic_Greek_Setup_2.png">
    <figcaption>Note the manual macron at the end.</figcaption>
</figure>

To simplify things a bit, add a macro to your LaTeX document:
```latex
\newcommand{\tg}[1]{
    \textgreek{#1}
}
```
<br>


Then you can just use `\tg{...}` instead of `\textgreek{...}`.

Example document:
<figure>
    <img style="width:700px" src="/images/activity/20241108_Polytonic_Greek_Setup_3.png">
    <figcaption>I think it looks quite nice.</figcaption>
</figure>

