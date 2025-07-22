let darkmode = true;
let content = document.documentElement;

let BASE_CACHE_DURATION = 30*1000*60; // Cache duration in millis (current: 30 minutes)

/**
 * Fetches data from a file to use.
 * @param {String} file - name of file to read
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

// Helps to access a nested element in an Object with a String
// https://stackoverflow.com/a/72928956
function access(obj, path){
    let res = obj;
    path.split('.').forEach(item => {
        res = res[item];
    });

    return res;
}

function isCached(key){
    // Check if it's already cached
    if(localStorage.getItem(key) != null){
        // Check if it's too old
        // { data: ..., time: ... }
        let obj = JSON.parse(localStorage.getItem(key));

        // 30 minute base expiration time
        if(Date.now() - obj.time < obj.expiration){
            return true;
        }
    }

    return false;
}

function cacheCall(key, obj, expiration){
    localStorage.setItem(key, JSON.stringify({
        data: obj,
        time: Date.now(),
        expiration: expiration
    }));
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
 * Gets a random element from an array
 * @param {Array} arr - Do I really need to explain this, JSDoc?
 */
function getRand(arr){
    return arr[Math.floor(Math.random() * arr.length)];
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