// Object storing all the post data
// Populated after fetching data from a file, used as global variable.
let allPosts = {};

let ACTIVITY_FILTER = 2025;

/**
 * Converts a number to descriptive date.
 * @param {Number} num - date in YYYYMMDD format
 * @returns - String of "month day, year" format
 */
function dateFormatter(num){
    const months = ["January", "February", "March", "April",
                    "May", "June", "July", "August",
                    "September", "October", "November", "December"];

    // Current format of num: YYYYMMDD
    let day = num % 100;
    num = Math.floor(num/100);

    // Now YYYYMM
    let month = months[num % 100 - 1];
    num = Math.floor(num/100);

    // Now YYYY
    let year = num;

    return month + " " + day + ", " + year;
}

/**
 * Populates page with activity filter options
 * @param {String} name - name of filter
 */
function addActivityFilters(name){
    document.getElementById('activity-filters').innerHTML += `
        <li class="activity-filters-li">
            <a onclick="javascript: addPosts('${name}')">
                ${name}
            </a>
        </li>
    `;
}

/**
 * Displays all the posts on the page as thumbnails.
 */
function displayAllPosts(filter){
    let el = document.getElementById("all-activity-posts");
    el.innerHTML = "";
    
    for(let i = 0; i < allPosts[filter].posts.length; i++){
        el.innerHTML += `
            <div class="activity-posts-container">
                <a href="activity.html?page=${allPosts[filter].posts[i].pageID}">
                    <div class="activity-posts" style="background-color:var(--card-background); color:var(--txt-color)">
                        <img src=${allPosts[filter].posts[i].mainImg ?? "images/activity/DEFAULT_POST_IMG.png"}>
                        <h1>${allPosts[filter].posts[i].title}</h1>
                        <p style="font-size:14px; margin-left:22px;margin-top:-5px">${dateFormatter(allPosts[filter].posts[i].published)}</p>
                        <p style="line-height: 1.7em">${allPosts[filter].posts[i].summary}</p>
                    </div>
                </a>
            </div>`;
    }

    // Show/hide relevant content
    document.getElementById("activity-show-general").style.display = "block";
    document.getElementById("activity-show-specific").style.display = "none";
}

/**
 * Displays a single post (not all of them).
 * @param {Number} pageID - ID of post to display
 */
function displaySinglePost(pageID){
    let filter = localStorage.getItem("globalActivityFilter");

    // Index of content corresponding to page ID
    let index = -1;
    for(let i = 0; i < allPosts[filter].posts.length; i++){
        if(allPosts[filter].posts[i].pageID == pageID){
            index = i;
            break;
        }
    }
    if(index == -1){
        throw new Error(`Error in displaySinglePost(): Unrecognized post ID.`);
    }

    let el = document.getElementById("specific-activity-post");
    el.innerHTML = "";

    // Title and date
    el.innerHTML += `
        <h1>${allPosts[filter].posts[index].title}</h1>
        <p style="font-size: 20px; text-align: center; line-height: 40px">
            Published ${dateFormatter(allPosts[filter].posts[index].published)}
            <br>
            Updated ${dateFormatter(allPosts[filter].posts[index].updated)}
        </p>
    `;

    // Read markdown file and convert it to HTML
    readData('./data/activityPosts/' + allPosts[filter].posts[index].contentLink, 'text')
        .then((content) => {
            // KaTeX rendering
            content = content.replace(/\\{/g, '\\\\{') // {
                             .replace(/\\}/g, '\\\\}') // }
                             .replace(/\\\\/g, '\\\\\\\\'); // newlines
            
                             // Render markdown with marked.js
            el.innerHTML += marked.parse(content);
                    
            // Show/hide relevant content
            document.getElementById("activity-show-general").style.display = "none";
            document.getElementById("activity-show-specific").style.display = "block";

            return el;
        })
        .then((element) => {
            // Render math with Katex
            renderMathInElement(element, {
                delimiters: [
                    {left: '$$', right: '$$', display: true},
                    {left: '$', right: '$', display: false}
                ],
                throwOnError : false
            });
        })
        .then(() => {
            // Highlight code blocks
            hljs.highlightAll();
        })
        .catch((err) => {
            console.log(`Error in displaySinglePost(): ${err}`);
        });
}

/**
 * Populates page with multiple posts or just one, depending on the URL.
 * @param {String} filter - current filter to apply
 */
function addPosts(filter){
    // Store filter
    localStorage.setItem("globalActivityFilter", filter);

    // Check link to see whether a specific page should be displayed
    const url = new URL(window.location.href.toString());
    
    // Link doesn't specify a page -> show all posts
    // Search designated with ?page=something at end of URL
    if(url.search == ""){
        // Display & set filter colors
        let allFilters = document.getElementsByClassName('activity-filters-li');
        for(let i = 0; i < allFilters.length; i++){
            allFilters[i].style = `background-color: var(${filter == allFilters[i].textContent.trim() ? "--bluegreen2" : "--bluegreen1"})`;
        }

        // Display all post thumbnails
        displayAllPosts(filter);

    } else {
        // Display single post
        let pageID = parseInt(url.search.substring("?page=".length));
        displaySinglePost(pageID);
    }
}

/**
 * Handles filters, sorts projects, etc.
 * Called on initial page load.
 */
function updateActivityPage(){
    // Get data & store it in global variable
    readData('./data/activityData.json', 'json')
        .then((obj) => {
            // 'obj' contains post data in JSON format
            // IMPORTANT: set global variable so other functions can use it.
            allPosts = obj;

            // Years where posts were made
            let years = [];

            for(let key in obj){
                years.push(parseInt(key, 10));

                // Sort posts in each category by last updated
                obj[key].posts.sort((obj1, obj2) => {
                    return obj2.updated - obj1.updated;
                });
            }

            // Populate filters (by year) in decreasing order
            years.sort((num1, num2) => { return num2 - num1; });
            years.forEach((el) => { addActivityFilters(el); });

            addPosts(localStorage.getItem("globalActivityFilter") ?? ACTIVITY_FILTER);
        })
        .catch((err) => {
            console.log(`Error in updateActivityPage(): ${err}`);
        });
}

updateActivityPage();