let darkmode = true;
let content = document.documentElement;

/**
 * Fetches data from a file to use.
 * @param {String} file - name of file to read
 * @param {String} type - type of file to return as (JSON, text)
 * @returns a Promise that'll fetch the file and return it in its correct format
 */
function readData(file, type){
    return new Promise((resolve, reject) => {
        fetch(file)
            .then((res) => {
                if(!res.ok)
                    throw new Error("Error in readData(): " + res.status);
                
                if(type == "json") return res.json();
                else return res.text();
            })
            .then((fileContents) => {
                resolve(fileContents);
            })
            .catch((err) => {
                reject(`Error in readData(): ${err}`);
            });
    });
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