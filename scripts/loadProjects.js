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
    "Greek": [0, 0, 255],
    "Latin": [255, 0, 0],
    
    // School
    "Multivariable Calc": [95, 222, 245],

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
        allFilters[i].style = `background-color: rgb(${Object.keys(allProjects)[i] == filter ? FILTER_SELECTED_COL : FILTER_INACTIVE_COL})`;
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
                    <p>${proj.tags[j]}</p>
                </div>`;
        }

        // Add a trophy for the project title if needed.
        let project_prize = "";
        let project_blurb = "";

        if(proj.details.includes("won")){
            if(proj.details.includes("won-1")){
                project_prize = `<i class="fa fa-trophy" style="font-size: 55px; color: rgb(219, 172, 52)"></i>`;
                project_blurb = `"1st place"`;
            }
            else if(proj.details.includes("won-2")){
                project_prize = `<i class="fa fa-trophy" style="font-size: 55px; color: rgb(165, 169, 180)"></i>`;
                project_blurb = `"2nd place"`;
            }
            else if(proj.details.includes("won-3")){
                project_prize = `<i class="fa fa-trophy" style="font-size: 55px; color: rgb(205, 127, 50)"></i>`;
                project_blurb = `"3rd place"`;
            }
        }

        // Ok now the real stuff
        el.innerHTML += `
            <a class="project-thumbnails" target="_blank" href=${proj.linkTo}>
                <!-- Image thumbnail -->
                <div class="project-thumbnails-img-container">
                    <img class="project-thumbnails-img" src="${proj.image}">
                    <p class="project-thumbnails-desc">${proj.description}</p>
                </div>

                <div class="project-thumbnails-text">
                    <div class="project-thumbnails-text-main">
                        <h1>${proj.title}</h1>
                        
                        <div class="project-tags-container">${tagsCode}</div>

                        <p><i class="fa fa-copyright"></i>${Math.floor(proj.made/10000) + " " + proj.author}</p>
                    </div>

                    <div class="project-thumbnails-text-descriptions">
                        <p>${project_prize}</p>
                        <p><em><strong>${project_blurb}</strong></em></p>
                    </div>
                </div>
            </a>
        `;
    }
}

/**
 * Handle filters, sort projects, etc.
 * Called on initial page load.
 */
function updateProjectsPage(){
    readData('./data/projectData.json', 'json')
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
                obj[key].projects.sort((obj1, obj2) => {
                    return obj2.made - obj1.made;
                });
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