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

function trimText(str, limit){
    if(str.length >= limit - 3)
        return str.slice(0, Math.max(0, limit - 3)) + "...";
    else
        return str;
}

function changeRandomPassage(dx, mod){
    // localStorage loves strings
    let r = Number(localStorage.getItem('random_passageNum'));
        
    if(r + dx >= mod) return;
    if(r + dx < 0) return;

    r += dx;

    localStorage.setItem('random_passageNum', r);

    let obj = randomData["Passages"][r];

    document.getElementById('random-passage-text').setAttribute('class', 'fade-out');
    setTimeout(() => {
        document.getElementById('random-passage-text').innerHTML = `
            <p style="color: rgb(94, 119, 152)">${obj.text.replace(/\n/g, '<br>')}</p>
        `;
        document.getElementById('random-passage-info').innerHTML = `
            <p>${obj.author}, <a href="${obj.url}" target="_blank"><em>${obj.work}</em></a></p>
        `;

        document.getElementById('random-passage-text').setAttribute('class', 'fade-in');
    }, 500);
}


let boxes = {
    // Latest commit
    'commit': {
        load: function(){
            let commit_overview = document.getElementById('commit-overview');
            let commit_desc = document.getElementById('commit-desc');
            
            if(!isCached('github_commit')){
                fetch('https://api.github.com/repos/gyang0/gyang0.github.io/commits?per_page=1')
                    .then(res => res.json())
                    .then(res => {
                        let obj = {
                            date: res[0].commit.committer.date.slice(0, 10),
                            sha: res[0].sha,
                            message: res[0].commit.message
                        };

                        // Cache
                        cacheCall('github_commit', obj, BASE_CACHE_DURATION);

                        commit_overview.innerHTML = `
                            ${obj.date}
                            (<a href="https://github.com/gyang0/gyang0.github.io/commit/${obj.sha}" target="_blank">${obj.sha.slice(0, 6)}</a>)
                        `;
                        commit_desc.innerHTML = obj.message;
                        
                    });

            } else {
                let obj = JSON.parse(localStorage.getItem('github_commit')).data;

                commit_overview.innerHTML = `
                    ${obj.date}
                    (<a href="https://github.com/gyang0/gyang0.github.io/commit/${obj.sha}" target="_blank">${obj.sha.slice(0, 6)}</a>)
                `;
                commit_desc.innerHTML = obj.message;
            }
        }
    },

    // Setup
    'setup': {
        load: function(){
            let str = "";

            str += `
                <h3>Stuff for Nerds</h3>
                <p>Website setup:</p>
                <ul>
                    <li><a href="https://github.com/markedjs/marked" target="_blank">Marked.js</a> for Markdown -> HTML rendering</li>
                    <li><a href="https://katex.org/" target="_blank">KaTeX</a> for math formatting</li>
                    <li><a href="https://highlightjs.org/" target="_blank">Highlight.js</a> for code blocks</li>
                    <li><a href="https://www.chartjs.org/" target="_blank">Chart.js</a> for graphs</li>
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
                        <p>Cause of death: ${getRand(randomData['Death'])}</p>
                        <p>Drowning in work: Yes</p>
                    </div>
                </div>
            `;
        
        
            document.getElementById('random-setup').innerHTML = str;
        }
    },

    // Physicist birthdays
    'physicistBDays': {
        load: function(){
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
        
            let short_desc = `Many physicists were born on this day, but unfortunately my dataset doesn't have them.<br><br>Here is coquette hamster instead.`;
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
                        <div style="overflow: hidden; width: 90%; height: 300px; border-radius: 50%; margin-top: 20px; margin-left: 20px; background-color: rgb(50, 50, 50)">
                            <img src="${res == null ? "/images/projects/coquette_hamster.png" : res.image}" style="width: 100%">
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
    },

    // Passages
    'passages': {
        load: function(){
            let str = '<h3>Fuzzy Letters</h3>';
    
            let ind = 0;
            if(localStorage.getItem('random_passageNum') === null){
                ind = 0;
                localStorage.setItem('random_passageNum', ind);
            } else {
                ind = Number(localStorage.getItem('random_passageNum'));
            }
        
            let len = randomData["Passages"].length;
            let obj = randomData["Passages"][ind];
            
            str += `
                <div style="display: flex; justify-content: center">
                    <div style="width: 15%">
                        <button onclick="javascript:changeRandomPassage(-1, ${len})">
                            <i class="bi bi-arrow-left-circle"></i>
                        </button>
                    </div>
        
                    <div style="width: 70%" id="random-passage-text">
                        <p style="color: rgb(94, 119, 152)">${obj.text.replace(/\n/g, '<br>')}</p>
                    </div>
        
                    <div style="width: 15%">
                        <button onclick="javascript:changeRandomPassage(1, ${len})">
                            <i class="bi bi-arrow-right-circle"></i>
                        </button>
                    </div>
                </div>
        
                <div id="random-passage-info" style="height: 50px; margin-top: -20px">
                    <p>${obj.author}, <a href="${obj.url}" target="_blank"><em>${obj.work}</em></a></p>
                </div>
            `;
        
            document.getElementById('random-passages').innerHTML = str;
        }
    },

    // List of resources
    'resources': {
        load: function(){
            let str = `
                <h3>Links</h3>
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
                            ${res.name}
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
    },

    'tracks': {
        load: function(){
            let text_limit = 53;
            let arr = randomData['Music'];

            let str = `
                <h3>Recent Musical Taste</h3>
                <table style="margin-top: 15px">
                <tr>
                    <th style="width: 5%"></th>
                    <th style="width: 30%">Title</th>
                    <th style="width: 5%">Scrobbles</th>
                </tr>`;

            // Yes tracks
            for(let i = 0; i < Math.min(4, arr.length); i++){
                str += `
                    <tr>
                        <td><img src="${arr[i].image}"></td>
                        <td style="text-align: left; padding-left: 10px">
                            <a style="color: var(--txt-color)" href="${arr[i].url}" target="_blank">
                                ${trimText(arr[i].name, text_limit)}
                            </a>
                            <br>
                            <span style="color: var(--dark-grayish)">${arr[i].artist}</span>
                        </td>
                        <td>${arr[i].num}</td>
                    </tr>`;
            }

            // No tracks
            for(let i = 0; i < 4 - arr.length; i++){
                str += `
                    <tr>
                        <td><img src="/images/activity/DEFAULT_POST_IMG.png"></td>
                        <td style="text-align: left; padding-left: 10px">
                            -<br>
                            <span style="color: var(--dark-grayish)">-</span>
                        </td>
                        <td>-</td>
                    </tr>`;
            }

            str += `
                </table>
            <p style="color: var(--dark-grayish); float:right; font-size: 14px; margin-right: 40px; margin-top: 5px">(Updated every week from <a href="https://www.last.fm">last.fm</a>)</p>`;
            
            document.getElementById('random-tracks').innerHTML = str;
        }
    },

    'monkeytype': {
        init: function(){
            document.getElementById('random-typing').innerHTML = `
                <h3>Typing Stats</h3>
                <div style="width: 90%; margin: 0 auto">
                    <canvas id="random-typing-graph"></canvas>
                </div>
                <p style="color: var(--dark-grayish); float:right; font-size: 14px; margin-right: 40px; margin-top: 5px">(Updated every week from <a href="https://monkeytype.com/" target="_blank">MonkeyType</a>, displayed with <a href="https://www.chartjs.org/" target="_blank">Chart.js</a>)</p>
            `;
        },
        load: function(){
            this.init();

            // Maximum date that occurs in the dataset
            let maxDate = 0;

            const ctx = document.getElementById('random-typing-graph').getContext('2d');
            let dataset = [];
            for(const [lang, records] of Object.entries(randomData['MonkeyType'])){
                let arr = [];
                for(let i = 0; i < records.length; i++){
                    maxDate = Math.max(maxDate, records[i].date);

                    arr.push({
                        x: new Date(records[i].date),
                        y: records[i].wpm
                    });
                }
                
                dataset.push({
                    label: lang,
                    data: arr
                });
            }
            
            new Chart(ctx, {
                type: 'line',
                data: {
                    datasets: dataset
                },
                options: {
                    scales: {
                        xAxis: {
                            type: 'time',
                            min: new Date(maxDate - (3*2628000000)) // 3 months ago
                        }
                    }
                }
            });
        }
    }
};

// *fireworks*
readData('./data/randomData.json')
    .then(res => res.json())
    .then((obj) => {
        randomData = obj;
        
        // Load boxes
        for(const [key, val] of Object.entries(boxes)){
            val.load();
        }
    });

