// Project data
const projects = [
    {
        type: ["misc"],
        details: "",
        title: "Grades Overview",
        author: "Gene Yang",
        made: 20220621,
        languages: ["C++"],
        description: `An old program I made in the summer of 2022 after finishing my schools's C++ course. I decided to refurbish the code
                    in the summer of 2023 and basically rewrote the whole thing. Learned about C++ file splitting and menu-driven design.`,
        image: "images/projects/grades_overview.png",
        linkTo: "https://github.com/gyang0/Grades_Overview"
    },
    {
        type: ["contests"],
        details: "",
        title: "The Evil Twin Strategy",
        author: "Gene Yang",
        made: 20210625,
        languages: ["Processing.js"],
        description: `Entry for Khan Academy's Contest: Illustrate a Math Concept. This program was supposed to introduce a concept
                      I saw in the University of Northern Colorado's math contest archives. Half the contest period was spent understanding
                      the formulas.`,
        image: "https://www.khanacademy.org/computer-programming/the-evil-twin-strategy/4839632158015488/latest.png",
        linkTo: "https://www.khanacademy.org/computer-programming/the-evil-twin-strategy/4839632158015488"
    },
    {
        type: ["contests"],
        details: "",
        title: "The Little Things",
        author: "Gene Yang",
        made: 20210827,
        languages: ["Processing.js"],
        description: `Entry for Khan Academy's Contest: The Great Outdoors. I learned a lot about image masking in ProcessingJS making
                      this graphic. Inspired by my family's yearly trip to Colorado and the Rockies. There was a small roadstop with a stream
                      that I liked.`,
        image: "https://www.khanacademy.org/computer-programming/the-little-things/6734816294682624/latest.png",
        linkTo: "https://www.khanacademy.org/computer-programming/the-little-things/6734816294682624"
    },
    {
        type: ["contests"],
        details: "won-2",
        title: "Skyview Inn",
        author: "Gene Yang",
        made: 20211226,
        languages: ["Processing.js"],
        description: `Entry for Khan Academy's Contest: Mysteries. This earned 2nd place in the Advanced bracket. You play as the owner
                        of a Skyview Inn, rumored to be haunted. The graphics and ghost mechanics took some time to implement.`,
        image: "https://www.khanacademy.org/computer-programming/skyview-inn/6523416028954624/latest.png",
        linkTo: "https://www.khanacademy.org/computer-programming/skyview-inn/6523416028954624"
    },
    {
        type: ["contests"],
        details: "",
        title: "Sorting & Searching",
        author: "Gene Yang",
        made: 20220225,
        languages: ["HTML/CSS", "JS"],
        description: `Entry for Khan Academy's Contest: Introduce a CS Concept. This was my first time making an HTML entry. I tried to
                      make a slideshow covering a few basic sorting and searching concepts.`,
        image: "images/projects/sorting_and_searching.png",
        linkTo: "https://www.khanacademy.org/computer-programming/sorting-and-searching-an-intro/5666805503803392"
    },
    {
        type: ["contests"],
        details: "won-3",
        title: "Diagon Alley",
        author: "Gene Yang",
        made: 20221028,
        languages: ["Processing.js"],
        description: "Entry for Khan Academy's Contest: Magic. This earned 3rd place in the Advanced bracket. Pardon the crude pixel art.",
        image: "https://www.khanacademy.org/computer-programming/diagon-alley/5460353548337152/latest.png",
        linkTo: "https://www.khanacademy.org/computer-programming/diagon-alley/5460353548337152"
    },
    {
        type: ["contests", "featured"],
        details: "won-1",
        title: "Linux Simulator",
        author: "Gene Yang",
        made: 20221230,
        languages: ["Processing.js"],
        description: `Entry for Khan Academy's Contest: Inventions. This won 1st place in the Advanced bracket.
                        The program simulates the Linux termainal with a few working commands. Inspired by my recent installation of
                        Ubuntu on a spare Chromebook.`,
        image: "https://www.khanacademy.org/computer-programming/linux-simulator/6467088633348096/latest.png",
        linkTo: "https://www.khanacademy.org/computer-programming/linux-simulator/6467088633348096"
    },
    {
        type: ["projects", "featured"],
        details: "",
        title: "Hackberry: Chess Engine",
        author: "Gene Yang",
        made: 20220510,
        languages: ["Java"],
        description: `The culmination of a 4-month effort: a working chess engine in Java. It's still pretty slow and makes bad decisions
        			  sometimes, but it can avoid checkmate and capture sensibly.`,
        image: "images/projects/hackberry.png",
        linkTo: "https://github.com/gyang0/Hackberry"
    },
    {
        type: ["misc"],
        details: "",
        title: "Procrastination Buster",
        author: "Gene Yang",
        made: 20230607,
        languages: ["C++"],
        description: `Made because I was wasting way to much time online. The idea was that whenever I wanted to doom scroll, I'd have to
                        learn a new algorithm/concept first as "payment." Was moderately successful, learned quite a bit of graph algorithms.`,
        image: "images/projects/procrastination_buster.png",
        linkTo: "https://github.com/gyang0/ProcrastinationBuster"
    },
    {
        type: ["misc"],
        details: "",
        title: "Statistics Library",
        author: "Gene Yang",
        made: 20230530,
        languages: ["JS"],
        description: `Something to make drawing graphs/charts and carrying out statistical testing easier for HTML environments. I used
                        the concepts I had learned from my school's science (core, MSB) course.`,
        image: "images/projects/statistics_library.png",
        linkTo: "https://github.com/gyang0/Statistics-Library"
    },
    {
        type: ["contests"],
        details: "",
        title: "Perspective in Art",
        author: "Gene Yang",
        made: 20230625,
        languages: ["HTML/CSS", "JS"],
        description: `Entry for Khan Academy's Contest: New Perspectives. My program was designed to showcase the examples of perspective 
                        in different works, from "The Odyssey" to "Joker" (2019 film). I used a lot of ideas from my English essays.`,
        image: "images/projects/perspective_in_art.png",
        linkTo: "https://www.khanacademy.org/computer-programming/perspective-in-art/6031994034372608"
    },
    {
        type: ["featured", "misc"],
        details: "",
        title: "Learning WebGL",
        author: "Gene Yang",
        made: 20230701,
        languages: ["HTML/CSS", "JS", "GLSL"],
        description: `A collection of small programs made to get familiar with WebGL. The landscape shown is my "final project."`,
        image: "images/projects/learning_webgl.png",
        linkTo: "https://github.com/gyang0/learning-webgl"
    },
    {
        type: ["contests"],
        details: "",
        title: "2023 Hackathon Entry",
        author: "Gene Yang",
        made: 20230903,
        languages: ["HTML/CSS", "JS"],
        description: `An entry for a 3-day hackathon at my school. The theme was "Climate change," and I made a program to predict flood paths
                        caused by rising sea levels. It isn't very good, and didn't win, but I still think it's neat.`,
        image: "images/projects/gcc_2023.png",
        linkTo: "https://github.com/gyang0/GCC2023"
    },
    {
        type: ["projects", "featured"],
        details: "",
        title: "Lost [Game]",
        author: "Gene Yang",
        made: 20231003,
        languages: ["HTML/CSS", "JS"],
        description: `A game for an idea that's been in my head for a long time. I prioritized atmosphere over a detailed storyline, 
                        tried to make decent pixel art, and used lighting as a tool for immersion.`,
        image: "images/projects/lost_game.png",
        linkTo: "https://github.com/gyang0/lost-game"
    }
];


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
        title: "Deriving Maxwell's Equations",
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
        title: "Some Thoughts on Product Names",
        mainImg: null,
        published: 20240117,
        updated: 20240118,
        summary: "A couple of stuff I noticed about naming products. Examples of both good and bad names.",
        pageID: 3,

        content: [
            ["p", "", `Naming is quite important. It's the first thing people see, most of the time. A good name can push people to explore further, 
                        but a bad name is easy to forget, or worse, actively weirds people out.`],
            ["p", "", `I think this is especially true for online products, whether it's a
                        <a href="https://dayssincelastjavascriptframework.com/" target="_blank">new JS framework</a> by a solo dev or a audio mixer 
                        by a huge company. There's a ton of competition online, so people want to stand out. But sometimes, they try too hard and 
                        it shows.`],
            ["p", "", `For example, C++ is a good name. It creatively shows that it's meant to be an improvement to C, while staying relevant to 
                        general programming syntax. One problem is that it's a bit of a mouthful to pronounce. But I guess "cpp" as an alternative
                        is good enough.`],
            ["figure", "width: 300px", "https://images.uncyclomedia.co/uncyclopedia/en/a/a1/Cpp_rat_mascot_2.jpeg?20170128174614",
                            `Keith, the C++ mascot`],
            ["p", "", `Another example of a good name is <a href="https://github.com/Zushah/Chalkboard" target="_blank">ChalkBoard</a>, a JS math 
                        library. It's quirky, easy to remember, and fits its topic surprisingly well &mdash; "Chalkboard" -> academics -> math? 
                        I like this approach a lot better than trying to shoehorn a direct math reference into the name. For example, something 
                        like "descartes.js" would have felt a little off.`],
            
            ["p", "", `JavaScript is a bad name. I don't even need to explain this. Just look at the number of people confused by its supposed 
                        relationship to Java. Actually, "Java" by itself is a great name, but JavaScript just had to come along and force its way 
                        into the name's fame.`],
            ["p", "", `Sometimes I see names that come from really obscure concepts. Mostly geeks writing their own libraries for math/science stuff.
                        But in certain situations, this can work well too. As long as the obscure name accurately describes the  product, it's okay.
                        For example, <a href="https://github.com/benlansdell/analemma" target="_blank">analemma.js</a> accurately describes what
                        it's supposed to do &mdash; model the <a href="https://en.wikipedia.org/wiki/Analemma" target="_blank">analemma</a>, an
                        astronomical phenomenon.`],
            ["p", "", `But if the obscure name doesn't really describe your product accurately, probably the best thing to do is to find another
                        name. Recently I saw something on Khan Academy's programming section about a user who was working on a vector library.
                        Processing.js's PVector is pretty slow, so I guess they wanted to make an alternative. That user was calling the library
                        "analemma.js." Unlike the previous example, this name doesn't pertain to the product. People who come across 
                        this library will have to think "why is it called that?" Also, the word "analemma" has an unfortunate conotation when a 
                        single space is inserted. Odds are, people will see it.`],
            ["p", "", `Another bad name, for a product used by millions of users: <a href="https://procreate.com/" target="_blank">Procreate</a>.
                        I get it, it's supposed to be Pro + Create. But if you look up the definition of "procreate," this is not what you see:`],
            ["figure", "width: 600px", "images/activity/20240117_Project_Names_1.png", ``],
            ["p", "", `That is a fancy way to say "have sex." Procreate is a great app. It should have a better name, one free of such 
                        allusions.`],

            ["p", "", `<br>(By the way, this post is half-joking. Don't take it too seriously.)`]
            
        ]
    },
    {
        title: "Sublime Text Package Configuration",
        mainImg: "images/activity/20240201_Nord_Theme_3.png",
        published: 20240201,
        updated: 20240203,
        summary: "Terminus and Nord theme",
        pageID: 5,

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
    }
];