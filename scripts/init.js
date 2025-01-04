let darkmode = true;
let content = document.documentElement;

let CACHE_DURATION_MIN = 30; // Cache duration in millis (current: 30 minutes)

/**
 * Fetches data from a file to use.
 * @param {String} file - name of file to read
 * @returns a Promise that'll fetch the file and return it in its correct format
 */
function readData(file){
    return new Promise((resolve, reject) => {
        fetch(file)
            .then((res) => {
                if(!res.ok)
                    throw new Error("Error in readData(): " + res.status);
                
                resolve(res);
            })
            .catch((err) => {
                reject(`Error in readData(): ${err}`);
            });
    });
}

/**
 * Fetches content from an API, but caches the result for 30 minutes.
 * 
 * @param {String} url - URL to fetch
 */
function myFetch(url){
    // Check if it's already cached
    if(localStorage.getItem(url) != null){
        // Check if it's too old
        // { data: ..., time: ... }
        let obj = JSON.parse(localStorage.getItem(url));

        // 15 minute expiration time
        if(Date.now() - obj.time < CACHE_DURATION_MIN * 1000 * 60){
            return new Promise((resolve, reject) => {
                resolve(obj.data);
            });
        }
    }

    // Fetch data the hard way
    return new Promise((resolve, reject) => {
        fetch(url)
            .then((res) => {
                if(!res.ok)
                    throw new Error("Error in myFetch(): " + res.status);
                
                return res.json();
            })
            .then((fileContents) => {
                localStorage.setItem(url, JSON.stringify({ data: fileContents, time: Date.now() }));
                resolve(fileContents);
            })
            .catch((err) => {
                reject(`Error in myFetch(): ${err}`);
            })
    });
}

/**
 * Basic Fisher-Yates shuffle on array
 * @param {Array} arr - Array to shuffle
 */
function shuffleArr(arr){
    for(let i = arr.length - 1; i >= 0; i--){
        let j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
}

/**
 * Creates footer & navbar for page
 */
function pageSetup(){
    document.getElementById("navbar").innerHTML = `
        <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="projects.html">Projects</a></li>
            <li><a href="activity.html">Activity</a></li>
            <li><a href="random.html">Random</a></li>
        </ul>

        <div id="darkmode-btn">
            <i class="bi bi-sun"></i>
            <i class="bi bi-moon"></i>
        </div>
        `;

    document.getElementById("footer").innerHTML = `
        <p>Website hosted through GitHub pages</p>
	    <p>&copy; ${new Date().getFullYear()} by Gene Yang</p><br>
        <p>
            <a href="https://github.com/gyang0/gyang0.github.io" target="_blank"><i class="bi bi-github" style="font-size:40px;color:white"></i></a>
        </p>`;
}

function darkmodeToggle(el, darkmode){
    if(darkmode){
        el.children[0].style.display = "none";
        el.children[1].style.display = "block";

        content.classList.add("darkmode");
        localStorage.setItem('theme', 'dark');
    } else {
        el.children[0].style.display = "block";
        el.children[1].style.display = "none";

        content.classList.remove("darkmode");
        localStorage.setItem('theme', 'light');
    }
}

pageSetup();

let d = document.getElementById("darkmode-btn");
d.onclick = function(){
    darkmode = !darkmode;
    darkmodeToggle(d, darkmode);
}

// dark mode default
if(!localStorage.getItem('theme')){
    darkmode = true;
} else {
    darkmode = localStorage.getItem('theme') == 'dark';
}

darkmodeToggle(d, darkmode);