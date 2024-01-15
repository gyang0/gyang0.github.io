function closeDescription(){
	document.getElementById("project-description").innerHTML = "";
}

function showDescription(id){
	// Popup
	var el = document.getElementById("project-description");
	el.style.display = "block";
	el.innerHTML = `
        <div id="close-description">
		  <a onclick="javascript:closeDescription()">
	   		<i class="fa fa-close"></i>
    		</a>
        </div>
		
		<div>
			<h1 style="margin-left: 30px; margin-right: 30px">${projects[id].title}</h1>
			<p style="margin-left: 30px; margin-right: 30px">
            <p style="margin-left: 30px; margin-right: 30px">${projects[id].description}</p>
			<p style="margin-left: 30px"><a href="${projects[id].linkTo}" target="_blank">Click here to go to project</a></p>
		</div>
	`;
}

function languageColor(lang){
    // Modeled after the GitHub schemes as closely as possible
    switch(lang){
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
}

function updateProjectsPage(){

}

// Update page
function handleProjectFilters(filter){
    // Store
    localStorage.setItem("globalProjectFilter", filter);

    // Display filters
    let arr = document.getElementsByClassName("project-filters-li");
    for(var i = 0; i < arr.length; i++){
        arr[i].innerHTML = `<a onclick="javascript: handleProjectFilters(${i})">${projectFilters[i].name}</a>`;
        arr[i].style = "background-color: rgb(122, 194, 203)";
    }
    arr[filter].style = "background-color: rgb(80, 131, 138)";


    // To simplify code
    let obj = projectFilters[filter];
    
    // Set filter description
    document.getElementById("filter-description").innerHTML = `<p>${obj.name}</p>`;
    
    // Update data depending on filter
    var el = document.getElementById("all-projects-container");
    el.innerHTML = "";

    // Set the description of the filter
    for(var i = 0; i < projects.length; i++){
        if(projects[i].type.includes(obj.id) || obj.id == "all"){

            // Add a trophy for the project title if needed.
            var project_prize = "";
            var project_blurb = "";

            if(projects[i].details.includes("won")){
                if(projects[i].details.includes("won-1")){
                    project_prize = `<i class="fa fa-trophy" style="font-size: 55px; color: rgb(219, 172, 52)"></i>`;
                    project_blurb = `"1st place"`;
                }
                else if(projects[i].details.includes("won-2")){
                    project_prize = `<i class="fa fa-trophy" style="font-size: 55px; color: rgb(165, 169, 180)"></i>`;
                    project_blurb = `"2nd place"`;
                }
                else if(projects[i].details.includes("won-3")){
                    project_prize = `<i class="fa fa-trophy" style="font-size: 55px; color: rgb(205, 127, 50)"></i>`;
                    project_blurb = `"3rd place"`;
                }
            }

            // Language list
            var languagesCode = "";

            for(var j = 0; j < projects[i].languages.length; j++){
                var langCol = languageColor(projects[i].languages[j]);
                languagesCode += `
                    <div class="languages-used" style="background-color: rgb(${langCol[0]}, ${langCol[1]}, ${langCol[2]}, 0.5)">
                        <p>${projects[i].languages[j]}</p>
                    </div>`;
            }


            // Add the project thumbnail code
            var thumbnailCode = `<div class="project-thumbnails" onclick="javascript:showDescription(${i})">`;

            // Images and title
            thumbnailCode += `
                <div class="project-thumbnails-img">
                    <img src="${projects[i].image}">
                </div>

                <div class="project-thumbnails-text">
                    <div class="project-thumbnails-text-main">
                        <h1>${projects[i].title}</h1>
                        
                        <div class="languages-used-container">${languagesCode}</div>

                        <p><i class="fa fa-copyright"></i>${Math.floor(projects[i].made/10000) + " " + projects[i].author}</p>
                    </div>

                    <div class="project-thumbnails-text-descriptions">
                        <p>${project_prize}</p>
                        <p><em><strong>${project_blurb}</strong></em></p>
                    </div>
                </div>`;

            // Finish
            thumbnailCode += `</div>`;

            el.innerHTML += thumbnailCode;
        }
    }
}

// Sort by date
projects.sort((obj1, obj2) => {
    return obj2.made - obj1.made;
});

// Display relevant projects
handleProjectFilters(localStorage.getItem("globalProjectFilter") ?? 0);
closeDescription();