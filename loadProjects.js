// TODO: confetti
// TODO: for the project description popup, explain what language the project was coded in.

// Data
var projects = [
    {
        type: ["misc"],
        details: "",
        title: "Grades Overview",
        author: "Gene Yang",
        made: 20220621,
        languages: ["C++"],
        description: `An old program I made in the summer of 2022 after finishing my schools's C++ course. I decided to refurbish the code
                    in the summer of 2023 and basically rewrote the whole thing. Learned about C++ file splitting and menu-driven design.`,
        image: "images/projects/grades_overview.png",
        linkTo: "https://github.com/gyang0/Grades_Overview"
    },
    {
        type: ["contests"],
        details: "",
        title: "The Evil Twin Strategy",
        author: "Gene Yang",
        made: 20210625,
        languages: ["Processing.js"],
        description: `Entry for Khan Academy's Contest: Illustrate a Math Concept. This program was supposed to introduce a concept
                      I saw in the University of Northern Colorado's math contest archives. Half the contest period was spent understanding
                      the formulas.`,
        image: "https://www.khanacademy.org/computer-programming/the-evil-twin-strategy/4839632158015488/latest.png",
        linkTo: "https://www.khanacademy.org/computer-programming/the-evil-twin-strategy/4839632158015488"
    },
    {
        type: ["contests"],
        details: "",
        title: "The Little Things",
        author: "Gene Yang",
        made: 20210827,
        languages: ["Processing.js"],
        description: `Entry for Khan Academy's Contest: The Great Outdoors. I learned a lot about image masking in ProcessingJS making
                      this graphic. Inspired by my family's yearly trip to Colorado and the Rockies. There was a small roadstop with a stream
                      that I liked.`,
        image: "https://www.khanacademy.org/computer-programming/the-little-things/6734816294682624/latest.png",
        linkTo: "https://www.khanacademy.org/computer-programming/the-little-things/6734816294682624"
    },
    {
        type: ["contests"],
        details: "won-2",
        title: "Skyview Inn",
        author: "Gene Yang",
        made: 20211226,
        languages: ["Processing.js"],
        description: `Entry for Khan Academy's Contest: Mysteries. This earned 2nd place in the Advanced bracket. You play as the owner
                        of a Skyview Inn, rumored to be haunted. The graphics and ghost mechanics took some time to implement.`,
        image: "https://www.khanacademy.org/computer-programming/skyview-inn/6523416028954624/latest.png",
        linkTo: "https://www.khanacademy.org/computer-programming/skyview-inn/6523416028954624"
    },
    {
        type: ["contests"],
        details: "",
        title: "Sorting & Searching",
        author: "Gene Yang",
        made: 20220225,
        languages: ["HTML/CSS", "JS"],
        description: `Entry for Khan Academy's Contest: Introduce a CS Concept. This was my first time making an HTML entry. I tried to
                      make a slideshow covering a few basic sorting and searching concepts.`,
        image: "images/projects/sorting_and_searching.png",
        linkTo: "https://www.khanacademy.org/computer-programming/sorting-and-searching-an-intro/5666805503803392"
    },
    {
        type: ["contests"],
        details: "won-3",
        title: "Diagon Alley",
        author: "Gene Yang",
        made: 20221028,
        languages: ["Processing.js"],
        description: "Entry for Khan Academy's Contest: Magic. This earned 3rd place in the Advanced bracket. Pardon the crude pixel art.",
        image: "https://www.khanacademy.org/computer-programming/diagon-alley/5460353548337152/latest.png",
        linkTo: "https://www.khanacademy.org/computer-programming/diagon-alley/5460353548337152"
    },
    {
        type: ["contests", "featured"],
        details: "won-1",
        title: "Linux Simulator",
        author: "Gene Yang",
        made: 20221230,
        languages: ["Processing.js"],
        description: `Entry for Khan Academy's Contest: Inventions. This won 1st place in the Advanced bracket.
                        The program simulates the Linux termainal with a few working commands. Inspired by my recent installation of
                        Ubuntu on a spare Chromebook.`,
        image: "https://www.khanacademy.org/computer-programming/linux-simulator/6467088633348096/latest.png",
        linkTo: "https://www.khanacademy.org/computer-programming/linux-simulator/6467088633348096"
    },
    {
        type: ["projects", "featured"],
        details: "",
        title: "Hackberry: Chess Engine",
        author: "Gene Yang",
        made: 20220510,
        languages: ["Java"],
        description: `The culmination of a 4-month effort: a working chess engine in Java. It's still pretty slow and makes bad decisions
        			  sometimes, but it can avoid checkmate and capture sensibly.`,
        image: "images/projects/hackberry.png",
        linkTo: "https://github.com/gyang0/Hackberry"
    },
    {
        type: ["learning"],
        details: "",
        title: "Procrastination Buster",
        author: "Gene Yang",
        made: 20230607,
        languages: ["C++"],
        description: `Made because I was wasting way to much time online. The idea was that whenever I wanted to doom scroll, I'd have to
                        learn a new algorithm/concept first as "payment." Was moderately successful, learned quite a bit of graph algorithms.`,
        image: "images/projects/procrastination_buster.png",
        linkTo: "https://github.com/gyang0/ProcrastinationBuster"
    },
    {
        type: ["misc"],
        details: "",
        title: "Statistics Library",
        author: "Gene Yang",
        made: 20230530,
        languages: ["JS"],
        description: `Something to make drawing graphs/charts and carrying out statistical testing easier for HTML environments. I used
                        the concepts I had learned from my school's science (core, MSB) course.`,
        image: "images/projects/statistics_library.png",
        linkTo: "https://github.com/gyang0/Statistics-Library"
    },
    {
        type: ["contests"],
        details: "",
        title: "Perspective in Art",
        author: "Gene Yang",
        made: 20230625,
        languages: ["HTML/CSS", "JS"],
        description: `Entry for Khan Academy's Contest: New Perspectives. My program was designed to showcase the examples of perspective 
                        in different works, from "The Odyssey" to "Joker" (2019 film). I used a lot of ideas from my English essays.`,
        image: "images/projects/perspective_in_art.png",
        linkTo: "https://www.khanacademy.org/computer-programming/perspective-in-art/6031994034372608"
    },
    {
        type: ["featured", "misc"],
        details: "",
        title: "Learning WebGL",
        author: "Gene Yang",
        made: 20230701,
        languages: ["HTML/CSS", "JS", "GLSL"],
        description: `A collection of small programs made to get familiar with WebGL. The landscape shown is my "final project."`,
        image: "images/projects/learning_webgl.png",
        linkTo: "https://github.com/gyang0/learning-webgl"
    },
    {
        type: ["contests"],
        details: "",
        title: "2023 Hackathon Entry",
        author: "Gene Yang",
        made: 20230903,
        languages: ["HTML/CSS", "JS"],
        description: `An entry for a 3-day hackathon at my school. The theme was "Climate change," and I made a program to predict flood paths
                        caused by rising sea levels. It isn't very good, and didn't win, but I still think it's neat.`,
        image: "images/projects/gcc_2023.png",
        linkTo: "https://github.com/gyang0/GCC2023"
    },
    {
        type: ["projects", "featured"],
        details: "",
        title: "Lost [Game]",
        author: "Gene Yang",
        made: 20231003,
        languages: ["HTML/CSS", "JS"],
        description: `A game for an idea that's been in my head for a long time. I prioritized atmosphere over a detailed storyline, 
                        tried to make decent pixel art, and used lighting as a tool for immersion.`,
        image: "images/projects/lost_game.png",
        linkTo: "https://github.com/gyang0/lost-game"
    }
];

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

// Set the background of the filter element depending on whether it's active.
function handleProjectFilters(id, filter){
	var arr = document.getElementsByClassName("project-filters-li");
	for(var i = 0; i < arr.length; i++){
		arr[i].style = "background-color: rgb(122, 194, 203)";
	}
	arr[id].style = "background-color: rgb(80, 131, 138)";

    // Set filter description
    var filter_desc = document.getElementById("filter-description");
    if(filter == "all") filter_desc.innerHTML = `<p>Everything in one page</p>`;
    else if(filter === "featured") filter_desc.innerHTML = `<p>A showcase of my projects that I'm particularly proud of.</p>`;
    else if(filter === "contests") filter_desc.innerHTML = `<p>Projects entered into contests (usually Khan Academy).</p>`;
    else if(filter === "projects") filter_desc.innerHTML = `<p>Some long-term or large-scale projects.</p>`;
    else if(filter === "learning") filter_desc.innerHTML = `<p>Projects used to further my experience or knowledge with something.</p>`;
    else if(filter == "misc") filter_desc.innerHTML = `<p>Miscellaneous</p>`;

	// Update data depending on filter
    var el = document.getElementById("all-projects-container");
	el.innerHTML = "";

    // Set the description of the filter
	for(var i = 0; i < projects.length; i++){
		if(projects[i].type.includes(filter) || filter == "all"){

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
handleProjectFilters(0, "all");
closeDescription();