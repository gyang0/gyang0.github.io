function closeDescription(){
    document.getElementById("cover-projects-page").style = "opacity: 0%";

    let el = document.getElementById("project-description");
    el.style = "opacity: 0%; pointer-events: none";
}

// filter - filter string
// nodeID - numeric value assigned to each element
function showDescription(filter, nodeID){
    document.getElementById("cover-projects-page").style = "opacity: 99%";

    let proj = projects[filter][nodeID];

	// Popup
	let el = document.getElementById("project-description");
    el.style = "opacity: 100%";
	el.innerHTML = `
        <div id="close-description">
		  <a onclick="javascript:closeDescription()">
	   		<i class="fa fa-close"></i>
    		</a>
        </div>
		
		<div>
			<h1 style="margin-left: 30px; margin-right: 30px">${proj.title}</h1>
			<p style="margin-left: 30px; margin-right: 30px">
            <p style="margin-left: 30px; margin-right: 30px">${proj.description}</p>
			<p style="margin-left: 30px"><a href="${proj.linkTo}" target="_blank">Click here to go to project</a></p>
		</div>
	`;
}

function tagColor(tag){
    // Languages for code
    // Modeled after the GitHub schemes as closely as possible
    switch(tag){
    case "C++":
        return [214, 36, 134];
    case "Java":
        return [143, 74, 26];
    case "HTML/CSS":
        return [194, 31, 53];
    case "JS":
        return [230, 232, 97];
    case "Processing.js":
        return [11, 144, 189];
    case "GLSL":
        return [28, 93, 102];
    }

    // Arbitrary decisions
    // Greek/Latin
    switch(tag){
    case "Greek":
        return [0, 0, 255];
    case "Latin":
        return [255, 0, 0];
    }

    // Unknown
    return [95, 222, 245];
}


// Update page
// filterID - numeric ID of the filter string
function handleProjectFilters(filterID){
    // Store
    localStorage.setItem("globalProjectFilter", filterID);

    // Display filters
    let arr = document.getElementsByClassName("project-filters-li");
    for(let i = 0; i < projectFilters.length; i++){
        arr[i].innerHTML = `<a onclick="javascript: handleProjectFilters(${i})">${projectFilters[i].name}</a>`;
        arr[i].style = "background-color: rgb(122, 194, 203)";
    }
    arr[filterID].style = "background-color: rgb(80, 131, 138)";
    
    // Set filter description
    document.getElementById("filter-description").innerHTML = `<p>${projectFilters[filterID].desc}</p>`;
    
    // Update data depending on filter
    let el = document.getElementById("all-projects-container");
    el.innerHTML = "";

    // Set the description of the filter
    let filter = projectFilters[filterID].name.toLowerCase();

    for(let i = 0; i < projects[filter].length; i++){
        let proj = projects[filter][i];
        
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

        // Language list
        let tagsCode = "";

        for(let j = 0; j < proj.tags.length; j++){
            let tagCol = tagColor(proj.tags[j]);
            tagsCode += `
                <div class="project-tags" style="background-color: rgb(${tagCol[0]}, ${tagCol[1]}, ${tagCol[2]}, 0.5)">
                    <p>${proj.tags[j]}</p>
                </div>`;
        }


        // Add the project thumbnail code
        el.innerHTML += `
            <div class="project-thumbnails" onclick="javascript:showDescription('${filter}', ${i})">

                <!-- Image thumbnail -->
                <div class="project-thumbnails-img">
                    <img src="${proj.image}">
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
            </div>`;
    }
}

// Sort by date
for(let key in projects){
    projects[key].sort((obj1, obj2) => {
        return obj2.made - obj1.made;
    })
}

// Display relevant projects
handleProjectFilters(localStorage.getItem("globalProjectFilter") ?? 0);
