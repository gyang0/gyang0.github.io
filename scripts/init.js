// Global variables
const FILTER_SELECTED_COL = `80, 131, 138`;
const FILTER_INACTIVE_COL = "122, 194, 203";


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
        </ul>`;

    document.getElementById("footer").innerHTML = `
        <p>Website hosted through GitHub pages</p>
	    <p><i class="fa fa-copyright"></i> ${new Date().getFullYear()} by Gene Yang</p><br>
        <p>
            <a href="https://github.com/gyang0/gyang0.github.io" target="_blank"><i class="fa fa-github" style="font-size: 40px;color:white;"></i></a>
        </p>`;
}

pageSetup();