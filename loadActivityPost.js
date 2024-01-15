// Data
var activityPosts = [
    {
        title: "CodeForces XOR problem",
        mainImg: "images/activity/20230916_CodeForces_XOR_1.png",
        published: 20230916,
        updated: 20231204,
        summary: "Detailed explanation of problem 1847C (with XOR)",

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
    }
];

function tagConverter(arr){
    // 1st element signifies the tag.
    // 2nd element signifies any styles
    // Anything else depends on the element.

    switch(arr[0]){
    case "img":
        return `<img src="${arr[2]}" style="${arr[1]}">`;
    case "br":
        return "<br>";
    case "ul-start":
        return `<ul style="${arr[1]}">`;
    case "ol-start":
        return `<ol style="${arr[1]}">`;
    case "li":
        return `<li style="${arr[1]}">${arr[2]}</li>`;
    case "ul-end":
        return "</ul>";
    case "ol-end":
        return "</ol>";
    case "figure":
        return `
            <figure>
                <img src="${arr[2]}" style="${arr[1]}">
                <figcaption>${arr[3]}</figcaption>
            </figure>
        `;
    case "CUSTOM":
        return arr[2];
    case "code":
        return `
            <pre>
                <code class="${arr[2]}" style="${arr[1]}">${arr[3]}</code>
            </pre>
        `;
    default:
        return `<${arr[0]} style="${arr[1]}">${arr[2]}</${arr[0]}>`;
    }
}

function dateFormatter(num){
    var months = ["January", "February", "March", "April",
                  "May", "June", "July", "August",
                  "September", "October", "November", "December"];

    // Current format of num: YYYYMMDD
    var day = num % 100;
    num = Math.floor(num/100);

    // Now YYYYMM
    var month = months[num % 100 - 1];
    num = Math.floor(num/100);

    // Now YYYY
    var year = num;

    return month + " " + day + ", " + year;
}

function updatePage(){
    var link = window.location.href;

    // Link doesn't specify a page -> show all posts
    if(!link.includes("?page=")){
        var posts = "";
        for(var i = 0; i < activityPosts.length; i++){

            // First half
            posts += `
                <div class="activity-posts-container">
                    <a href="activity.html?page=${i}">
                        <div class="activity-posts">
            `;

            // Include a main image if it exists
            if(activityPosts[i].mainImg != null){
                posts += `<img src=${activityPosts[i].mainImg}>`;
            }

            // Second half
            posts += `
                            <h1>${activityPosts[i].title}</h1>
                            <p style="font-size:14px; margin-left:30px;">${dateFormatter(activityPosts[i].published)}</p>
                            <p>${activityPosts[i].summary}</p>
                        </div>
                    </a>
                </div>`;
        }

        // Update posts
        document.getElementById("all-activity-posts").innerHTML = posts;

        // Show/hide relevant content
        document.getElementById("activity-show-general").style.display = "block";
        document.getElementById("activity-show-specific").style.display = "none";

    } else {
        var index = parseInt(link.charAt(link.length - 1), 10);
        var postContent = "";

        // Title and date
        postContent += `
            <h1>${activityPosts[index].title}</h1>
            <p style="font-size: 20px; text-align: center; line-height: 40px">
                Published ${dateFormatter(activityPosts[index].published)}
                <br>
                Updated ${dateFormatter(activityPosts[index].updated)}
            </p>
        `;

        // Interpret every tag and add to content
        var arr = activityPosts[index].content;
        for(var i = 0; i < arr.length; i++){
            postContent += tagConverter(arr[i]);
        }

        document.getElementById("specific-activity-post").innerHTML = postContent;

        // Show/hide relevant content
        document.getElementById("activity-show-general").style.display = "none";
        document.getElementById("activity-show-specific").style.display = "block";
    }
}

function handleActivityFilters(id, filter){
    var arr = document.getElementsByClassName("activity-filters-li");
    for(var i = 0; i < arr.length; i++){
        arr[i].style = "background-color: rgb(122, 194, 203)";
    }
    arr[id].style = "background-color: rgb(80, 131, 138)";

    if(filter === "older"){
        activityPosts.sort((obj1, obj2) => {
            return obj1.published - obj2.published;
        });
    } else if(filter === "newer"){
        activityPosts.sort((obj1, obj2) => {
            return obj2.published - obj1.published;
        });
    }

    updatePage();
}

handleActivityFilters(0, "newer");