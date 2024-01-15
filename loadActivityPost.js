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

function updateActivityPage(){
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

function handleActivityFilters(filter){
    localStorage.setItem("globalActivityFilter", filter);
    var arr = document.getElementsByClassName("activity-filters-li");
    for(var i = 0; i < arr.length; i++){
        arr[i].innerHTML = `<a onclick="javascript: handleActivityFilters(${i})">${activityFilters[i].name}</a>`;
        arr[i].style = "background-color: rgb(122, 194, 203)";
    }
    arr[filter].style = "background-color: rgb(80, 131, 138)";

    if(activityFilters[filter].id === "older"){
        activityPosts.sort((obj1, obj2) => {
            return obj1.published - obj2.published;
        });
    } else if(activityFilters[filter].id === "newer"){
        activityPosts.sort((obj1, obj2) => {
            return obj2.published - obj1.published;
        });
    }

    updateActivityPage();
}

handleActivityFilters(localStorage.getItem("globalActivityFilter") ?? 0);