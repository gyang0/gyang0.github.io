// To be populated
let randomData = {};


/**
 * Converts yyyy-mm-dd date into MONTH DAY, YEAR
 * @param {String} str - The yyyy-mm-dd date
 */
function dateFormat(str){
    const months = ["January", "February", "March", "April",
                    "May", "June", "July", "August",
                    "September", "October", "November", "December"];
    
    return "" + months[Number(str.slice(5, 7)) - 1] + " " + Number(str.slice(8, 10)) + ", " + str.slice(0, 4);
}

// Latest commit
function loadCommit(){
    let commit_overview = document.getElementById('commit-overview');
    let commit_desc = document.getElementById('commit-desc');
    
    fetch('https://api.github.com/repos/gyang0/gyang0.github.io/commits?per_page=1')
        .then(res => res.json())
        .then(res => {
            let date = res[0].commit.committer.date.substr(0, 10);
            let sha = res[0].sha;

            commit_overview.innerHTML = `${date} (<a href="https://github.com/gyang0/gyang0.github.io/commit/${sha}" target="_blank">${sha.substr(0, 6)}</a>)`;
            commit_desc.innerHTML = res[0].commit.message;
        });
}

// Load setup
function loadSetup(){
    let str = "";

    str += `
        <h3>Stuff for Nerds</h3>
        <p>Website setup:</p>
        <ul>
            <li><a href="https://github.com/markedjs/marked" target="_blank">Marked.js</a> for Markdown -> HTML rendering</li>
            <li><a href="https://katex.org/" target="_blank">KaTeX</a> for math formatting</li>
            <li><a href="https://highlightjs.org/" target="_blank">Highlight.js</a> for code blocks</li>
        </ul>

        <div style="background-color: var(--grayish); width: 95%; height: 2px; margin: 0 auto"></div>
        <br>

        <div style="display: flex; justify-content: center">
            <div style="width: 345px">
                <p>Editor: VSCode</p>
                <p>Theme: <a href="https://marketplace.visualstudio.com/items?itemName=johnpapa.winteriscoming" target="_blank">Winter is Coming</a></p>
                <p>TeX distro: TeXLive</p>
                <p>Browser: FireFox w/ uBlock Origin</p>
            </div>

            <div style="width: 2px; background-color: var(--grayish)"></div>
            
            <div style="width: 350px">
                <p>Location: Earth</p>
                <p>Cause of death: Electrodynamics</p>
                <p>Drowning in work: Yes</p>
            </div>
        </div>
    `;


    document.getElementById('random-setup').innerHTML = str;
}

// Physicist birthdays
function loadPhysicistBDays(){
    let str = "";

    // Get current date in yyyy-mm-dd format
    let date = new Date().toJSON().slice(0, 10);

    // Shuffle array (Fisher-Yates)
    let arr = randomData["Physicists"];
    shuffleArr(arr);

    // Get first Physicist with matching birthday in the list (works since we shuffled)
    let res = null;
    for(let i = 0; i < arr.length; i++){
        if(arr[i].bday.slice(5, 10) == date.slice(5, 10)){
            res = arr[i];
            break;
        }
    }

    let short_desc = `Many physicists were born on this day, but unfortunately my dataset doesn't have them.<br><br>In the meantime, want a <a href="https://en.wikipedia.org/wiki/List_of_physicists" target="_blank">rabbit hole</a>?`;
    let read_more = "";

    if(res != null){
        short_desc = res.desc;
        read_more = res.url;
    }

    str = `
        <h3>Physicist Birthdays</h3>
        <i style="position: absolute; margin-left: 80px; margin-top: 250px; font-size: 70px; color: pink" class="bi bi-cake2"></i>
        <div style="display: flex; justify-content: center">
            <div style="width: 42%">
                <div style="overflow: hidden; width: 90%; height: 300px; border-radius: 50%; margin-top: 20px; margin-left: 20px">
                    <img src="${res == null ? "/images/activity/DEFAULT_POST_IMG.png" : res.image}" style="width: 100%">
                </div>
            </div>
            
            <div style="width: 52%">
                <p style="font-size: 28px; margin-top: 15px">${res == null ? "No one yet" : res.name}</p>
                ${res == null ? "" : `<p style="font-size: 17px">Born ${dateFormat(res.bday)}</p>`}
            
                <p>${short_desc}</p>

                ${res == null ? "" : `<p style="margin-top: 20px"><a href="${read_more}" target="_blank">Read more here</a></p>`}
            </div>
        </div>
    `;

    document.getElementById('random-physicists').innerHTML = str;
}

// List of resources
function loadResources(){
    let str = `
        <h3>Resources</h3>
        <div style="display: flex; flex-wrap: wrap">
    `;

    let resources = randomData["Resources"];

    for(let col in resources){
        for(let i = 0; i < resources[col].length; i++){
            let res = resources[col][i];

            str += `
            <div style="width: 330px">
                <p>
                    <a style="color:var(--${col});"
                            href="${res.url}"
                    target="_blank">
                    <strong>${res.name}</strong>
                    </a>
                </p>
            </div>`;
        }

        // New row
        str += `<div style="flex-basis: 100%; height: 10px"></div>`;
    }

    str += `</div>`;

    document.getElementById('random-resources').innerHTML = str;
}

// *fireworks*
readData('./data/randomData.json', 'json')
    .then((obj) => {
        randomData = obj;

        loadCommit();
        loadSetup();
        loadPhysicistBDays();
        loadResources();
    });

