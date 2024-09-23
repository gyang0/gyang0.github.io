// Activity posts
const activityPosts = [
    {
        title: "CodeForces XOR problem",
        mainImg: "images/activity/20230916_CodeForces_XOR_1.png",
        published: 20230916,
        updated: 20231204,
        summary: "Detailed explanation of problem 1847C (with XOR)",
        pageID: 0,

        content: [
            ["p", "", `This is one of my favorite CodeForces problems, because of how elegant the solution is. But I think the editorial
                        can be better. I get that it's supposed to be mathematically rigorous, they need to keep it short, etc. But does that
                        really warrant something like this?`],
            ["figure", "", "images/activity/20230916_CodeForces_XOR_1.png",
                            `<a href="https://codeforces.com/problemset/problem/1847/C" target="_blank">Link to problem statement</a>`],
            ["p", "", `Will someone really learn from editorials like these? I doubt people will arrive at this math before working
                        out the solution. The mathematical solution should come after explaining the intuition.`],
            ["p", "", `(My other peeve is that every problem statement includes a "story." Competitive programming &#8800; reading
                        comprehension..)`],
            ["p", "", `Here's an attempt at a more in-depth version:`],

            ["h2", "", "Problem Statement"],
            ["ol-start", "", ""],
            ["li", "", `There is an array \\(a\\) with \\(N\\) elements.`],
            ["li", "", `We can add an element to the end of this array. The new element will have value 
                        \\(a[i] \\oplus a[i + 1] \\oplus a[i + 2] \\oplus ... \\oplus a[N - 1]\\),
                        where \\(i\\) is any index within the bounds of the array.`],
            ["li", "", `Using the procedure, we can add as many new elements as we want. \\(N\\) will increase by 1
                        whenever a new element is added.`],
            ["li", "", "What is the maximum number that can be produced?"],
            ["ol-end", "", ""],
            
            ["h2", "", "Bounds"],
            ["ol-start", "", ""],
            ["li", "", `\\(1 <= N <= 10^5\\)`],
            ["li", "", `\\(0 <= a[i] <= 2^8\\)`],
            ["ol-end", "", ""],
            
            ["h2", "", "Editorial"],
            ["ol-start", "", ""],
            ["li", "", `Since the problem involves XOR, let's think in terms of bits. Each element in the array will be a bitset.<br>
                        Then we can see that there's a maximum bound to the new element we can add. \\(a[i] <= 2^8\\),
                        which means that there's only 8 possible bit positions. The maximum possible element is (in binary) \\(11111111\\).
                        There's no point in continuing after we get that.`],
            ["li", "margin-top:50px", `Simulating a run is always a good idea. Let's see what happens when we add a new element, choosing index
                                        \\(i = 2\\) as our "pivot point."`],
            ["figure", "", "images/activity/20230916_CodeForces_XOR_3.png", `Simulating 1 run`],
            ["li", "margin-top:50px", `The complexity of the problem lies in the fact that we can choose to repeat the operation multiple times. What happens
                                        when we do that? Let's choose a second index \\(i = 4\\) and repeat the operation.`],
            ["figure", "", "images/activity/20230916_CodeForces_XOR_4.png", `Simulating 2 runs`],
            ["li", "margin-top:50px", `Now some key XOR concepts:<br>
                            \\(x \\oplus x = 0\\) <br>
                            \\(x \\oplus 0 = x\\) <br>
                            \\(x \\oplus y = y \\oplus x\\)`],
            ["li", "margin-top:50px", `Notice anything intersting? The expression for the added value cancels down to \\(a[2] \\oplus a[3]\\),
                                        which doesn't use any new values! The XOR of a subarray from \\(i = 2\\) to \\(i = 3\\), to be exact.
                                        <br>
                                        Any added value will just be the XOR of a subarray. This is important. Do a few edge cases
                                        (\\(i = 0\\) or \\(i = N - 1\\)) to convince yourself that it works.`],
            ["li", "margin-top:50px", `Great, so we just need to find the maximum XOR subarray...but a naive solution (choosing two indices and 
                                        iterating all elements in between) would run in \\(O(N^3)\\). This won't pass.
                                        
                                        <br><br>

                                        We can take advantage of XOR properties for an \\(O(2^8N)\\) solution. Let's call an XOR
                                        subarray that starts at \\(i = 0\\) an XOR prefix. Then for every index i, update the prefix to be
                                        \\(\\text{(previous XOR prefix)} \\oplus a[i]\\). Store the XOR prefixes that have appeared so far.
                                        
                                        <br><br>
                                        
                                        Then for every index, check
                                        \\(\\text{(current XOR prefix)} \\oplus \\text{(a previous XOR prefix)}\\) for all previous XOR prefixes. Compare these values
                                        with each other to find the maximum XOR subarray. There will be at most \\(2^8\\) previous XOR prefixes,
                                        hence the \\(O(2^8N)\\) time complexity.

                                        <br><br>

                                        Why does this work? Any XOR prefix will start at \\(i = 0\\). Say that a previous XOR prefix ended at
                                        \\(i = A\\), and the current XOR prefix ends at \\(i = B\\). Then 
                                        \\(\\text{(current XOR prefix)} \\oplus \\text{(a previous XOR prefix)} = \\text{XOR subarray from i = A to i = B}\\), 
                                        because the region from \\(i = 0\\) to \\(i = A\\) sort of "cancels out." So by XORing a current prefix
                                        with a past one, we can get the XOR subarray of elements in between.`],
            ["ol-end", "", ""],

            ["h2", "", "Code"],
            ["code", "", "language-cpp", 
`#include &lt;bits/stdc++.h&gt;
using namespace std;

// Pragmas that work with CodeForces
#pragma GCC optimize("Ofast")
#pragma GCC target("avx2")

// 0 <= a[i] <= 2^8, so maximum bit length is 8
const int BIT_LEN = 8;

void solve(){
    int N;
    cin >> N;

    int a[N];
    for(int i = 0; i < N; i++){
        cin >> a[i];
    }

    // Whether the value has appeared as an XOR prefix
    // Set to false initially, except for 0, which is an identity.
    // 1 << 8 = 2^8
    bool appeared[(1 << BIT_LEN)];
    memset(appeared, false, (1 << BIT_LEN));
    appeared[0] = true;

    int curXORPrefix = 0;
    int ans = 0;

    for(int i = 0; i < N; i++){
        curXORPrefix ^= a[i];
        appeared[curXORPrefix] = true;

        for(int j = 0; j < (1 << BIT_LEN); j++){
            if(appeared[j])
                ans = max(ans, curXORPrefix ^ j);
        }
    }

    cout << ans << "\\n";
}

int main(){
    // Fast IO
    cin.tie(0)->ios_base::sync_with_stdio(0);

    // Each test case
    int T;
    cin >> T;
    for(int i = 0; i < T; i++){
        solve();
    }

    return 0;
}`
            ],
            ["p", "", `Submission result:`],
            ["figure", "width:1200px", "images/activity/20230916_CodeForces_XOR_2.png", ``]
        ]
    },
    {
        title: "2023 Halloween Costume Log",
        mainImg: "images/activity/20230926_halloween_2023_4.jpg",
        published: 20230926,
        updated: 20231021,
        summary: "Photos, sketches, descriptions. Your favorite demon from the Nightmare Realm.",
        pageID: 1,

        content: [
            ["p", "", `9/27/2023: Made frame out of chopsticks.`],
            ["figure", "width: 400px", "images/activity/20230926_halloween_2023_1.jpg", `This took a lot of tape.`],
            ["p", "", `10/21/2023: Redid frame to make it more compact and hopefully portable.`],
            ["figure", "width: 400px", "images/activity/20230926_halloween_2023_2.jpg", ``],
            ["p", "", `10/24/2023: Decorated front and tied ends together with string.`],
            ["figure", "width: 400px", "images/activity/20230926_halloween_2023_3.jpg", ``],
            ["p", "", `10/25/2023: Photo of finished product.`],
            ["figure", "width: 400px", "images/activity/20230926_halloween_2023_4.jpg", ``],
            ["p", "", `It was hard to set it correctly on my head, because the balance was off. Eventually I ended up using an old cap
                        reinforced with string inside, which seems to work. Pretty proud of it overall.`],
        ]
    },
    {
        title: "Deriving Maxwell's Equations - Notes",
        mainImg: "images/activity/20240114_maxwells_equations_1.png",
        published: 20240114,
        updated: 20240114,
        summary: "Math final project - deriving the 4 equations with multivariable calc.",
        pageID: 2,

        content: [
            ["p", "", `My first attempt at writing a formal paper. It's kinda clumsy but was fun to do. Learned quite a bit about LaTeX.`],
            ["p", "", `There were some points that are hastily patched around - like the difference between an H field and a B field, or the difference
                        between a D field and an E field. A satisfying justification for Maxwell's addition to Ampere's Law was hard to find as
                        well.
                        <a href="https://academicworks.cuny.edu/cgi/viewcontent.cgi?article=1156&context=kb_pubs#page=14" target="_blank">One paper</a>
                         that Google turned up gave experimental verifications for the equations, but said that "Experimental evidence for the
                         Maxwell-Ampere equation is not as extensive" as the other laws.`],
            ["p", "", `There was also the question of whether using other electromagnetism laws to prove Maxwell's equations was illogical,
                        since Maxwell's equations are supposed to be the foundation of everything else in electromagnetism. But without the laws, 
                        I would have had to use experimental data or some more fundamental concepts to derive them. So I just used the laws and it 
                        seems to have worked out. Lenz's Law and the Continuity Equation were especially helpful.`],
            ["p", "", `One thing I'm proud of is the derivation of Faraday's Law. At one point, I got `],
            ["p", "text-align: center", `\\( \\iint_S (\\nabla \\times \\textbf{E}) \\cdot d\\textbf{S} = -\\frac{d}{dt}\\iint_S \\textbf{B} \\cdot d\\textbf{S} \\)`],
            ["p", "", `and I was tempted to just remove the integrals, since "Surface S is arbitrary." But then I noticed that they were flux
                        integrals and not surface integrals, which made me think that it wouldn't work.`],
            ["p", "", `After spending time with the second page of Google search results, I found an equation in
                        <a href="http://sgpwe.izt.uam.mx/files/users/uami/jdf/proyectos/Derivar_inetegral.pdf" target="_blank">this article</a>,
                        but I kept getting an answer that was off. Which led to a one more round of citation chasing, and fortunately the
                        <a href="https://www.google.com/books/edition/The_Classical_Theory_of_Electricity_and/9rTQAAAAMAAJ?hl=en&gbpv=1&printsec=frontcover&pg=PA40" target="_blank">original source</a>
                         was available on Google Books. It looks like there was a single misprint or something in the first article. The original equation is`],
            ["p", "text-align: center", `\\( \\frac{d}{dt}\\iint_S \\textbf{B} \\cdot d\\textbf{S} = \\iint_S (\\nabla \\cdot \\textbf{B})\\textbf{v} \\cdot d\\textbf{S} -
                                                                                                     \\int_C (\\textbf{v} \\times \\textbf{B}) \\cdot dL +
                                                                                                     \\iint_S \\frac{\\partial \\textbf{B}}{\\partial t} \\cdot d\\textbf{S} \\)`],
            ["p", "", `Which gave me the right result. That was satisfying, but way more work than I expected.`],
            ["p", "", `<br>Anyways, the actual paper:`],
            ["CUSTOM", "", `
                    <div style="display: block; width: 90%; margin: 0 auto">
                        <embed align="center" src="documents/20240114_maxwells_equations.pdf" width="100%" height="1000" type="application/pdf">
                    </div>
                `]
        ]
    },
    {
        title: "Sublime Text Package Configuration",
        mainImg: "images/activity/20240201_Nord_Theme_3.png",
        published: 20240201,
        updated: 20240203,
        summary: "Installation of Terminus and Nord theme.",
        pageID: 4,

        content: [
            ["p", "", `The main benefit of Sublime Text over VS Code is that it's fast. Comes at the cost of less features, but you can pretty much 
                        work things out.`],
            ["p", "", `One thing that helps is Terminus, which lets you use the terminal within the editor. Installing it is easy. You just have 
                        to follow the steps in 
                        <a href="https://www.geeksforgeeks.org/how-to-use-terminal-in-sublime-text-editor/" target="_blank">this article</a> 
                        to install package control, add Terminus, and copy paste some data. Afterwards you can use the terminal without leaving 
                        Sublime.`],
            ["p", "", `Another thing that helps is a new color scheme. Personally I prefer the Nord theme, because it's easy to look at and all 
                        colors have a certain coherence to the overall effect. Another good one is One Dark Pro if you like vibrant colors.`],
            ["p", "", `Adding Nord to Sublime v4 is kind of a hassle. You start by following the directions 
                        <a href="https://packagecontrol.io/packages/Nord" target="_blank">here</a>, which is easy enough. Then you can tweak the 
                        colors if you want. Use the steps given by elangovan 
                        <a href="https://forum.sublimetext.com/t/modify-customize-color-schemes/4467/3" target="_blank">in this forum comment</a> 
                        to start editing the Nord.sublime-color-scheme file.`],
            ["figure", "width: 600px", "images/activity/20240201_Nord_Theme_2.png", `From Nord.sublime-color-scheme`],

            ["p", "", `Two changes I made were making comments 8% brighter ("nord3_bright" to #76839e) and making classes 12% brighter ("nord7" 
                        to #a7dbda). Comment brightness because Nord comments are a little hard to see by design. Class brightness because for 
                        code like ClassName.func(), it's hard to differentiate between ClassName and func by their colors. Here's the result: `],
            ["figure", "width: 700px", "images/activity/20240201_Nord_Theme_1.png", ``],

            ["p", "", `This still isn't satisfactory. Keywords like "function," "let," and "const" aren't being highlighted. It was hard to find 
                        a solution for this. What you need to do is install the "JavaScriptNext - ES6 Syntax" package, following the same steps 
                        used to install Terminus and Nord. This seems to fix the issue.`],
            ["figure", "width: 800px", "images/activity/20240201_Nord_Theme_3.png", `Maybe not the most noticeable theme, but it has a wintery type of snugness to it.`],
        ]
    },
    {
        title: "Notes on Writing",
        mainImg: null,
        published: 20240206,
        updated: 20240207,
        summary: "Compiled over 3 years at OHS.",
        pageID: 5,

        content: [
            ["p", "", `Collection of tips from 8th - 10th grade English at OHS. Writing tips and general mantras drilled into the head of everyone. 
                        Most of the time it's about crafting strong thesis statements.`],
            ["h2", "", `Structure`],
            ["ul-start"],
            ["li", "", `The unit of writing is the paragraph, not the sentence.`],
            ["li", "", `Words are razor blades; don't treat them like bricks.`],
            ["li", "", `Use as many paragraphs as you need, but paragraphs below 1/3 of a page likely have more to be said about, and paragraphs over 
                        1 and 1/3 of a page are likely two paragraphs bleeding together.`],
            ["ul-end"],

            ["h2", "", `Essays`],
            ["ul-start"],
            ["li", "", `Essays are a mode of inquiry, not a mode of declaration.`],
            ["li", "", `Write about things that bother you in a work.`],
            ["ul-end"],

            ["h2", "", `Thinking`],
            ["ul-start"],
            ["li", "", `Start with evidence (quotations, oddities in story, etc.) and find a thesis that reasonably explains them. Never start with 
                        the thesis and hunt for evidence.`],
            ["li", "", `Extended-hand questions: questions that reach their hands to you from the text. Something that makes you stop and think. 
                        Usually great places to start with thesis statements.`],
            ["li", "", `If an argument can be applied to any other story, it's too general and needs to be nuanced.`],
            ["li", "", `After getting an idea, ask the "so what" question. (why is that detail important? Why does the author choose to include it?)`],
            ["ul-end"],

            ["h2", "", `General`],
            ["ul-start"],
            ["li", "", `Quarantine an argument as towards the author and the world within the text.`],
            ["li", "", `Avoid making a claim like "this moment is important because it moves the story towards its conclusion" or "this moment 
                        is important because it plays X part within the larger narrative". A scene can be important without just being a cog in the 
                        wheel for the plot.`],
            ["li", "", `Every detail an author includes can be thought of as a choice, but the hard part is answering how all the details work together.`],
            ["li", "", `Try not to pull all-nighters on essays. [I am bad at this]`],
            ["ul-end"]
        ]
    },
    {
        title: "Screenshots from Flat Earth Discord",
        mainImg: "images/activity/20240403_Flat_Earth_1.png",
        published: 20240403,
        updated: 20240405,
        summary: "Yes, it actually exists.",
        pageID: 6,
        content: [
            ["p", "", `Someone I know made a counter to the Flat Earth stuff, so a mod got upset and banned him. I joined out of curiosity and also 
                        to give context for the ban, since his messages were all deleted.`],
            ["p", "", `Since it claims to be open to both Flat Earthers and Globe Earthers, they have roles for each. From what I remember, the 
                    Globe Earthers outnumbered the Flat Earthers significantly. I think there were only 2000 or so members with the Flat 
                    Earther role.`],
            ["p", "", `The Flat Earthers don't seem to believe in a Flat Earth as much as they want to disprove the Globe Earthers. They have a 
                        pretty condescending attitude to counters against a Flat Earth. A common response is that all the evidence is a government 
                        conspiracy. I see the word "sheep" a lot.`],
            ["p", "", `I'd say around half the forum is actual discussion (if you can call it that) and the other half is lewd jokes/random topics.`],
            ["figure", "width: 600px", "images/activity/20240403_Flat_Earth_2.png", `This type of short response with no explanations are common.`],
            ["figure", "width: 600px", "images/activity/20240403_Flat_Earth_3.png", `You don't get to disprove a definition.`],
            ["figure", "width: 600px", "images/activity/20240403_Flat_Earth_4.png", `I think they really like alternate hypotheses.<br><br>They would be great at creative writing.`],
            ["figure", "width: 600px", "images/activity/20240403_Flat_Earth_5.png", `Maybe this is a troll post. I hope it is.`],
            ["p", "", `Unfortunately I didn't get to browse more, because after I sent an imgur link with context for the ban, it was immediately hidden 
                        and someone called a mod to ban me too. This happened less than 15 minutes after I joined. That was a heck of an experience.`]
        ]
    },
    {
        title: "Submissions for BallsDex Art Contest",
        mainImg: "images/activity/20240407_BallsDex_Contest_6.png",
        published: 20240407,
        updated: 20240418,
        summary: "Mongol Empire and Polish-Lithuanian Commonwealth",
        pageID: 7,
        content: [
            ["p", "", `TL;DR: BallsDex is having an art contest for 2 new countryballs: Mongol Empire and Polish-Lithuanian Commonwealth. 4 separate 
                        contests will be held - spawn art and card art for each of the 2 balls.`],
            ["p", "", `My inspiration was from the balls whose spawn art I liked.`],
            ["figure", "width: 700px", "images/activity/20240407_BallsDex_Contest_1.png", `Nice shading. I also like how the character of each ball shines through.`],
            ["p", "", `Spawn art and card art are 2 very different styles, e.g.`],
            ["figure", "width: 700px", "images/activity/20240407_BallsDex_Contest_2.png", `Spawn art is meh but card art is one of the best.`],

            ["p", "", `Originally I'd planned on just doing Mongol Empire, but Polish-Lithuanian Commonwealth was fun to design too.`],
            ["h2", "", `Draft`],
            ["figure", "width: 700px", "images/activity/20240407_BallsDex_Contest_3.png", `Kinda blurry`],
            ["p", "", `I put the sketches into Krita and used a tablet to make the digital version.`],
            ["h2", "", `Mongol Empire - Final version`],
            ["figure", "", `images/activity/20240407_BallsDex_Contest_4.png`, `The horse was left out because it took up too much space. <br><br>
                                                                                Speared balls represent places the Mongols conquered: Kievan Rus, Abbasid Caliphate, and Xia.`],
            ["h2", "", `Polish-Lithuanian Commonwealth - Final version`],
            ["figure", "", `images/activity/20240407_BallsDex_Contest_5.png`, `Model based off the Winged Hussars`],
            ["br"],
            ["p", "", `Result: did not win either. Oh well.`]
        ]
    },
    {
        title: "2024 Summer of Greek (Classical Edition)",
        mainImg: "images/activity/20240708_AlphaToOmega.jpg",
        published: 20240708,
        updated: 20240708,
        summary: "Let's see how this goes.",
        pageID: 8,
        content: [
            ["p", "", `Record of my progress for <i>From Alpha to Omega</i> by Prof. Anne H. Groton (also a motivational tool against
                        procrastination). Hoping to finish as much as I can by the end of July, before school picks up again.`],
            ["CUSTOM", "", `
                <table style="width: 90%">
                  <tr>
                    <th style="width: 5%">Chapter</th>
                    <th style="width: 35%">Name</th>
                    <th style="width: 10%">Status</th>
                    <th style="width: 10%">Completion Date</th>
                    <th style="width: 35%">Comments</th>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>Introduction: The Greek Alphabet</td>
                    <td style="background-color: rgb(0, 200, 0)">Complete</td>
                    <td>N/A</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Introduction: The Greek Accents</td>
                    <td style="background-color: rgb(200, 200, 200)">Skipped</td>
                    <td>-</td>
                    <td>Working on it...</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Ω-Verbs: Present Active Indicative, Present Active Infinitive, Present Active Imperative</td>
                    <td style="background-color: rgb(0, 200, 0)">Complete</td>
                    <td>N/A</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>First Declension: Feminine Nouns, Part 1</td>
                    <td style="background-color: rgb(0, 200, 0)">Complete</td>
                    <td>N/A</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>First Declension: Feminine Nouns, Part 2</td>
                    <td style="background-color: rgb(0, 200, 0)">Complete</td>
                    <td>N/A</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>6</td>
                    <td>Ω-Verbs: Future Active Indicative, Future Active Infinitive</td>
                    <td style="background-color: rgb(0, 200, 0)">Complete</td>
                    <td>N/A</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>7</td>
                    <td>Second Declension: Masculine Nouns</td>
                    <td style="background-color: rgb(0, 200, 0)">Complete</td>
                    <td>N/A</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>8</td>
                    <td>Second Declension: Neuter Nouns; Adjectives: First/Second Declension</td>
                    <td style="background-color: rgb(0, 200, 0)">Complete</td>
                    <td>7/8/2024</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>9</td>
                    <td>First Declension: Masculine Nouns; Substantives</td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>10</td>
                    <td>Ω-Verbs: Imperfect Active Indicative; Correlatives</td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>11</td>
                    <td>Ω-Verbs: Middle/Passive Voice; Prepositions</td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>12</td>
                    <td>εἰμί; Enclitics</td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>12</td>
                    <td>εἰμί; Enclitics</td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>13</td>
                    <td>Demonstratives</td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>14</td>
                    <td>Personal Pronouns</td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>15</td>
                    <td>Contract Verbs (-άω, -έω, -όω); Contracted Futures</td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>16</td>
                    <td>Third Declension: Stop, Liquid, and Nasal Stems</td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>17</td>
                    <td>Third Declension: Sigma Stems; Adjectives: Third Declension</td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>18</td>
                    <td>Ω-Verbs: First Aorist Active and Middle Indicative, First Aorist Active and Middle Infinitives, First Aorist Active and Middle Imperatives</td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>19</td>
                    <td>Ω-Verbs: Second Aorist Active and Middle Indicative, Second Aorist Active and Middle Infinitives, Second Aorist Active and Middle Imperatives; Reflexive Pronouns</td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>20</td>
                    <td>Ω-Verbs: Perfect Active Indicative, Perfect Active Infinitive; Pluperfect Active Indicative</td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>21</td>
                    <td>Interrogative τίς and Indefinite τις</td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>22</td>
                    <td>Ω-Verbs: Perfect Middle/Passive Indicative, Perfect Middle/Passive Infinitive; Pluperfect Middle/Passive Indicative</td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>23</td>
                    <td>Reflexive Pronouns; πᾶς; Expressions of Time</td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>24</td>
                    <td>Ω-Verbs: Present Active Participle, Future Active Participle, First and Second Aorist Active Participles, Perfect Active Participle</td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>25</td>
                    <td>Ω-Verbs: Present Middle/Passive Participle, Future Middle Participle, First and Second Aorist Middle Participles, Perfect Middle/Passive Participle</td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>26</td>
                    <td>Direct and Indirect Questions; Alternative Questions</td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>27</td>
                    <td>Ω-Verbs: Aorist Passive Tense</td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>28</td>
                    <td>Ω-Verbs: Future Passive Tense; Future Perfect Active and Middle/Passive Tenses, οἶδα</td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>29</td>
                    <td>Third Declension: Vowel Stems, Syncopated Stems</td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>30</td>
                    <td>Deponent Verbs; Genitive Absolute; εἷς; οὐδείς/μηδείς</td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>31</td>
                    <td>Adverbs: Positive Degree; Result Clauses</td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>32</td>
                    <td>Adjectives and Adverbs: Comparative and Superlative Degrees; Genitive of Comparison; Partitive Genitive</td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>33</td>
                    <td>Adjectives and Adcerbs: Irregular Comparative and Superlative Degrees; -υς -εια -υ Adjectives; Dative of Degree of Difference</td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>34</td>
                    <td>Numerals</td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>35</td>
                    <td>Subjunctive Mood: Present, Aorist, Perfect Tenses; Active, Middle, Passive Voices; Independent Uses of the Subjunctive (Hortatory, Prohibitive, Deliberative)</td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>36</td>
                    <td>Optative Mood: Present, Future, Aorist, Perfect Tenses; Active, Middle, Passive Voices; Independent Uses of the Optative (Wishes, Potentiality)</td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>37</td>
                    <td>Conditions</td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>38</td>
                    <td>Conditional Relative Clauses; Relative Adverbs</td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>39</td>
                    <td>Purpose Clauses</td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>40</td>
                    <td>εἶμι; Indirect Discourse (ὅτι/ὡς)</td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>41</td>
                    <td>φημί; Indirect Discourse (with infinitive)</td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>42</td>
                    <td>Indirect Discourse (with participle); Crasis</td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>43</td>
                    <td>More Uses of the Infinitive; πρίν</td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>44</td>
                    <td>Verbal Adjectives in -τέος and -τός </td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>45</td>
                    <td>Clauses of Effort and Fear</td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>46</td>
                    <td>ΜΙ-Verbs (δίδωμι, ἵστημι)</td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>47</td>
                    <td>ΜΙ-Verbs (τίτγημι, ἵημι)</td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>48</td>
                    <td>ΜΙ-Verbs (δείκνῡμι); Unattainable Wishes</td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>49</td>
                    <td>βαίνω, γιγνώσκω: Directional Suffixes; Accusative of Respect</td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>50</td>
                    <td>Redundant μή; Uses of μή οὐ & οὐ μή; Attraction of Relative Pronoun</td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                </table>
            `]
        ]
    }
];