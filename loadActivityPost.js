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
            ["li", "", `There is an array <span class="math-eq">a</span> with <span class="math-eq">N</span> elements.`],
            ["li", "", `We can add an element to the end of this array. The new element will have value<br>
                        <span class="math-eq">
                            a[i] \u2295 a[i + 1] \u2295 a[i + 2] \u2295 ... \u2295 a[N - 1]</sub>
                        </span><br>
                        where <span class="math-eq">i</span> is any index within the bounds of the array.`],
            ["li", "", `Using the procedure, we can add as many new elements as we want. <span class="math-eq">N</span> will increase by 1
                        whenever a new element is added.`],
            ["li", "", "What is the maximum number that can be produced?"],
            ["ol-end", "", ""],
            
            ["h2", "", "Bounds"],
            ["ol-start", "", ""],
            ["li", "", `1 <= <span class="math-eq">N</span> <= 10<sup>5</sup>`],
            ["li", "", `0 <= <span class="math-eq">a[i]</span> <= 2<sup>8</sup>`],
            ["ol-end", "", ""],
            
            ["h2", "", "Editorial"],
            ["ol-start", "", ""],
            ["li", "", `Since the problem involves XOR, let's think in terms of bits. Each element in the array will be a bitset.<br>
                        Then we can see that there's a maximum bound to the new element we can add. <span class="math-eq">a[i]</span> <= 2<sup>8</sup>,
                        which means that there's only 8 possible bit positions. The maximum possible element is (in bitset form) 11111111.
                        There's no point in continuing after we get that.`],
            ["li", "margin-top:50px", `Simulating a run is always a good idea. Let's see what happens when we add a new element, choosing index
                                        <span class="math-eq">i = 2</span> as our "pivot point."`],
            ["figure", "", "images/activity/20230916_CodeForces_XOR_3.png", `Simulating 1 run`],
            ["li", "margin-top:50px", `The complexity of the problem lies in the fact that we can choose to repeat the operation multiple times. What happens
                                        when we do that? Let's choose a second index <span class="math-eq">i = 4</span> and repeat the operation.`],
            ["figure", "", "images/activity/20230916_CodeForces_XOR_4.png", `Simulating 2 runs`],
            ["li", "margin-top:50px", `Now some key XOR concepts:<br>
                            <span class="math-eq">a<sub>i</sub></span> \u2295 <span class="math-eq">a<sub>i</sub></span> = 0<br>
                            <span class="math-eq">a<sub>i</sub></span> \u2295 0 = <span class="math-eq">a<sub>i</sub></span><br>
                            <span class="math-eq">a<sub>i</sub></span> \u2295 <span class="math-eq">a<sub>j</sub></span>
                                = <span class="math-eq">a<sub>j</sub></span> \u2295 <span class="math-eq">a<sub>i</sub></span> &nbsp;&nbsp; (we can jumble
                                the order and it still works)`],
            ["li", "margin-top:50px", `Notice anything intersting? The expression for the added value cancels down to <span class="math-eq">a[2] \u2295 a[3]</span>,
                                        which doesn't use any new values! The XOR of a subarray from i = 2 to i = 3, to be exact.
                                        <br>
                                        Any added value will just be the XOR of a subarray. This is important. Do a few edge cases
                                        (i = 0 or i = N - 1) to convince yourself that it works.`],
            ["li", "margin-top:50px", `Great, so we just need to find the maximum XOR subarray...but a naive solution (choosing two indices and 
                                        iterating all elements in between) would run in O(N<sup>3</sup>). This won't pass.
                                        
                                        <br><br>

                                        We can take advantage of XOR properties for an O(2<sup>8</sup>N) solution. Let's call an XOR
                                        subarray that starts at i = 0 an XOR prefix. Then for every index i, update the prefix to be
                                        (previous XOR prefix) \u2295 a[i]. Store the XOR prefixes that have appeared so far.
                                        
                                        <br><br>
                                        
                                        Then for every index, check
                                        (current XOR prefix) \u2295 (a previous XOR prefix) for all previous XOR prefixes. Compare these values
                                        with each other to find the maximum XOR subarray. There will be at most 2<sup>8</sup> previous XOR prefixes,
                                        hence the O(2<sup>8</sup>N) time complexity.

                                        <br><br>

                                        Why does this work? Any XOR prefix will start at i = 0. Say that a previous XOR prefix ended at
                                        i = ind1, and the current XOR prefix ends at i = ind2. Then (current XOR prefix) \u2295
                                        (a previous XOR prefix) = the XOR subarray from i = ind1 to i = ind2, because the region from i = 0 to i = ind1
                                        cancels out (check out XOR rules or map out a case). So by XORing a current prefix with a past one,
                                        we can get the XOR subarray of elements in between.`],
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
            ["p", "", `And this will pass.`],
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
    }
];

function tagConverter(arr){
    // 1st element signifies the tag.
    // 2nd element signifies any styles
    // Anything else depends on the element.

    switch(arr[0]){
    case "img":
        return `<img src="${arr[2]}" style="${arr[1]}">`;
    case "a":
        return `<p><a href="${arr[2]}" target="_blank">${arr[3]}</a></p>`;
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

        // Update posts
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