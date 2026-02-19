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
    "Shell": [158, 250, 125],

    // Arbitrary decisions for languages
    "Greek": [0, 0, 200],
    "Latin": [200, 0, 0],
    
    // School
    "Multivariable Calc": [95, 222, 245],
    "Linear Algebra": [49, 148, 75],
    "Differential Equations": [26, 85, 173],

    "Classical Mech": [189, 6, 33],
    "Thermodynamics": [235, 100, 162],
    "Optics": [167, 200, 252],
    "Relativity": [219, 215, 105],
    "Quantum Mech": [43, 37, 219],
    "Electromagnetism": [29, 135, 27],
    "Particles": [115, 40, 166],

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

                    <p style="color:var(--txt-color)">Created ${Math.floor(proj.made/10000)}</p>
                </div>
            </a>`;
    }

    addNotes(filter);
}

/**
 * Add lecture notes & book notes
 * (Only used in "Physics / Math" section for the time being)
 */
function addNotes(filter){
    // Store filter
    localStorage.setItem("globalProjectFilter", filter);
    
    // Set filter colors
    let allFilters = document.getElementsByClassName('project-filters-li');
    for(let i = 0; i < allFilters.length; i++){
        allFilters[i].style = `background-color: var(${Object.keys(allProjects)[i] == filter ? "--bluegreen2" : "--bluegreen1"})`;
    }

    let el = document.getElementById("all-projects-container");
    
    // Lecture notes
    if(allProjects[filter].lectures.length != 0){
        el.innerHTML += `
            <hr style="width:50%; margin: 0 auto; margin-top: 75px"> 
            <p style="margin-left: 100px; margin-right: 100px; margin-top: 25px; line-height: 1.6em; font-size: 1.3em">Below are some notes I made for my physics and math classes. I use a hybrid Markdown/LaTeX system to take notes and convert them to a PDF with Pandoc.</p>
        `;
        
        // Lecture notes
        for(let i = 0; i < allProjects[filter].lectures.length; i++){
            let proj = allProjects[filter].lectures[i];

            // Populate lecture notes
            el.innerHTML += `
                <p>${proj.title}</p>
            `;
        }

    }

    // ==============================================
    // ==============================================

    // Book notes
    let book_notes = ``;
    if(allProjects[filter].books.length != 0){
        for(let i = 0; i < allProjects[filter].books.length; i++){
            let proj = allProjects[filter].books[i];

            let status_color, status_text, status_icon1, status_icon2;
            if(proj.status == "incomplete-handwritten") {
                status_color = "--reddish";
                status_text = "In progress";
                status_icon1 = "bi bi-stopwatch";
                status_icon2 = "bi bi-pencil";
            }
            else if(proj.status == "incomplete-typed") {
                status_color = "--reddish";
                status_text = "In progress";
                status_icon1 = "bi bi-stopwatch";
                status_icon2 = "bi bi-code-slash";
            }
            else if(proj.status == "complete-handwritten"){
                status_color = "--bluish";
                status_text = "Complete (written)";
                status_icon1 = "bi bi-check2-circle";
                status_icon2 = "bi bi-pencil";
            }
            else if(proj.status == "complete-typed"){
                status_color = "--greenish";
                status_text = "Complete (typed)";
                status_icon1 = "bi bi-stopwatch";
                status_icon2 = "bi bi-code-slash";
            }


            // Populate book notes
            book_notes += `
            <a class="notes-box" style="display: flex" target="_blank" href="${proj.linkTo}">
                <div style="width: 5%">
                    <div style="height: 100%; width: 100%; margin-top: -10px; margin-left: -10px; margin-right: 10px; padding-right: 20px; padding-bottom: 20px; clip-path: polygon(0% 0%, 35px 0%, 0% 35px);background-color:var(${status_color})"></div>
                    
                </div>
                <div style="width: 85%">
                    <h1 style="font-size: 20px; color: var(--txt-color)">${proj.title}</h1>
                    <p style="line-height: 20px; font-size: 0.9em; color: var(--txt-color)">${proj.author}</p>
                </div>

                <div style="width: 10%">
                    <p style="font-size: 20px"><i style="color:var(${status_color})" class="${status_icon2}">&nbsp;&nbsp;</i><i style="color:var(${status_color})" class="${status_icon1}"></i></p>
                </div>
            </a>`;
        }
    }

    el.innerHTML += `
        <hr style="width:50%; margin: 0 auto; margin-top: 75px"> 
        <p style="margin: 0 auto; margin-left: 100px; margin-right: 100px; margin-top: 25px; line-height: 1.6em; font-size: 1.3em">Starting 2024, I did some independent reading to supplement my school courses. I made the notes listed below for easy review. The topics should cover a solid baseline in theoretical physics &mdash; from rigorous classical mechanics to general relativity.</p>
        
        <div class="notes-container">${book_notes}</div>
    `;
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