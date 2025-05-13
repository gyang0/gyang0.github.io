// Object storing all projects
// Populated later after fetching from a file and used as a global variable.
let allProjects = {};

// Tags in project thumbnails (e.g. "Multivariable Calc", "HTML/CSS", "Java")
const tagColors = {
    // Modeled after GitHub's colors for code
    "C++": [214, 36, 134],
    "Java": [143, 74, 26],
    "HTML/CSS": [194, 31, 53],
    "JS": [230, 232, 97],
    "Processing.js": [11, 144, 189],
    "GLSL": [28, 93, 102],
    "LaTeX": [61, 97, 23],
    "LilyPond": [156, 204, 124],

    // Arbitrary decisions for languages
    "Greek": [0, 0, 200],
    "Latin": [200, 0, 0],
    
    // School
    "Multivariable Calc": [95, 222, 245],
    "Linear Algebra": [49, 148, 75],
    "Differential Equations": [26, 85, 173],
    "Thermodynamics": [235, 100, 162],
    "Optics": [167, 200, 252],
    "Relativity": [219, 215, 105],
    "Quantum Mech": [204, 35, 102],

    "Notes": [150, 100, 100],

    // Other
    "Unfinished": [255, 140, 0]
};

/**
 * Populates page with project filter options
 * @param {String} name - name of filter
 */
function addProjectFilters(name){
    document.getElementById('project-filters').innerHTML += `
        <li class="project-filters-li">
            <a onclick="javascript: addProjects('${name}')">
                ${name}
            </a>
        </li>
    `;
}

/**
 * Populates page with projects depending on current filter
 * @param {String} filter - current filter to apply
 */
function addProjects(filter){
    // Store filter
    localStorage.setItem("globalProjectFilter", filter);
    
    // Set filter colors
    let allFilters = document.getElementsByClassName('project-filters-li');
    for(let i = 0; i < allFilters.length; i++){
        allFilters[i].style = `background-color: var(${Object.keys(allProjects)[i] == filter ? "--bluegreen2" : "--bluegreen1"})`;
    }
    
    
    // Update data depending on filter
    let el = document.getElementById("all-projects-container");
    el.innerHTML = "";

    // Project thumbnail
    for(let i = 0; i < allProjects[filter].projects.length; i++){
        let proj = allProjects[filter].projects[i];
        
        // Tags for project
        let tagsCode = "";
        for(let j = 0; j < proj.tags.length; j++){
            let tagCol = tagColors[proj.tags[j]];
            tagsCode += `
                <div class="project-tags" style="background-color: rgb(${tagCol[0]}, ${tagCol[1]}, ${tagCol[2]}, 0.5)">
                    <p style="color:var(--txt-color)">${proj.tags[j]}</p>
                </div>`;
        }

        // Ok now the real stuff
        el.innerHTML += `
            <a class="project-thumbnails" target="_blank" href=${proj.linkTo} style="background-color:var(--card-background)">
                <!-- Image thumbnail -->
                <div class="project-thumbnails-img-container">
                    <img class="project-thumbnails-img" src="${proj.image}">
                    ${
                        (proj.details.includes("pinned")) ? 
                        `<p style="left: 255px; top: -5px; color: rgb(212, 175, 55)"><i class="bi bi-pin-angle-fill"></i></p>` :
                        ""
                    }
                    <p style="color:var(--txt-color)" class="project-thumbnails-desc">${proj.description}</p>
                </div>

                <div class="project-thumbnails-text">
                    <h1 style="color:var(--txt-color)">${proj.title}</h1>
                    
                    <div class="project-tags-container">${tagsCode}</div>

                    <p style="color:var(--txt-color)"><i class="fa fa-copyright"></i>${Math.floor(proj.made/10000) + " " + proj.author}</p>
                </div>
            </a>`;
    }
}

/**
 * Handle filters, sort projects, etc.
 * Called on initial page load.
 */
function updateProjectsPage(){
    readData('./data/projectData.json')
        .then(res => res.json())
        .then((obj) => {
            // 'obj' contains the project data in JSON format.
            // IMPORTANT: need to set the global variable so that it can be used in other functions.
            allProjects = obj;

            // 1. Read JSON and add filters
            // 2. Set description & adjust colors
            // 3. Get project data and sort by date
            for(let key in obj){
                // Populate filters
                addProjectFilters(key);

                // Sort projects in each category by creation date
                // Put pinned posts first
                const myOrderedArr = [
                    ...obj[key].projects.filter(el => el.details.includes("pinned")).sort((a, b) => {return b.made - a.made}),
                    ...obj[key].projects.filter(el => !el.details.includes("pinned")).sort((a, b) => {return b.made - a.made})
                ];
                obj[key].projects = myOrderedArr;
            }

            // Applies current filter, or if it doesn't exist, the first category.
            addProjects(localStorage.getItem("globalProjectFilter") ?? Object.keys(obj)[0]);
        })
        .catch((err) => {
            console.log(`Error in updateProjectsPage(): ${err}`);
        });
}

// When we load the page
updateProjectsPage();