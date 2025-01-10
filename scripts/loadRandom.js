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


let boxes = {
    // Latest commit
    'commit': {
        load: function(){
            let commit_overview = document.getElementById('commit-overview');
            let commit_desc = document.getElementById('commit-desc');
            
            // Cache result for meager performance gains :p
            myFetch(
                'https://api.github.com/repos/gyang0/gyang0.github.io/commits?per_page=1',
                {},
                BASE_CACHE_DURATION,
                ['0.commit.committer.date', '0.sha', '0.commit.message']
            )
                .then(res => {
                    let date = res['0.commit.committer.date'].substr(0, 10);
                    let sha = res['0.sha'];
                    let msg = res['0.commit.message'];

                    commit_overview.innerHTML = `${date} (<a href="https://github.com/gyang0/gyang0.github.io/commit/${sha}" target="_blank">${sha.substr(0, 6)}</a>)`;
                    commit_desc.innerHTML = msg;
                });
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
    },

    // Passages
    'passages': {
        changeRandomPassage: function(dx, mod){
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
                    <p>${obj.text.replace(/\n/g, '<br>')}</p>
                `;
                document.getElementById('random-passage-info').innerHTML = `
                    <p>${obj.author}, <a href="${obj.url}" target="_blank"><em>${obj.work}</em></a></p>
                `;

                document.getElementById('random-passage-text').setAttribute('class', 'fade-in');
            }, 500);
        },
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
                        <p>${obj.text.replace(/\n/g, '<br>')}</p>
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
    },

    'tracks': {
        getTracks: function(){
            // Check if cached
            if(isCached('lastfm-getrecenttrack')){
                return new Promise((resolve, reject) => {
                    let cachedRes = JSON.parse(localStorage.getItem('lastfm-getrecenttrack'));
                    resolve(cachedRes.data);
                });
            }

            // Not cached :(
            return new Promise((resolve, reject) => {
                fetch(`http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=cnode0&api_key=${secrets.LASTFM_API_KEY}&format=json&limit=100`)
                    .then(res => res.json())
                    .then(res => {
                        // Cache
                        let obj = {};

                        for(let i = 0; i < res.recenttracks.track.length; i++){
                            let el = res.recenttracks.track[i];
                            if(el.name in obj){
                                obj[el.name].num++;

                            } else {
                                obj[el.name] = {
                                    name: el.name,
                                    num: 1,
                                    url: el.url,
                                    artist: el.artist['#text'],
                                    image: el.image[1]['#text']
                                }
                            }
                        }

                        // Cache
                        cacheCall('lastfm-getrecenttrack', obj, BASE_CACHE_DURATION);

                        resolve(obj);
                    })
                    .catch(err => {
                        reject(err);
                    });
            });
        },
        load: function(){
            this.getTracks()
            .then(res => {
                let arr = [];
                for(const [key, val] of Object.entries(res)){
                    arr.push(val);
                }
                arr.sort((obj1, obj2) => { return obj2.num - obj1.num; });
    
                let text_limit = 55;
                let str = `
                    <h3>Music (via <a href="https://www.last.fm">last.fm</a>)</h3>
                    <table>
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
    
                str += `</table>`;
                document.getElementById('random-tracks').innerHTML = str;
            });
        }
    }
};

// *fireworks*
readData('./data/randomData.json')
    .then(res => res.json())
    .then((obj) => {
        randomData = obj;

        document.getElementById('cache-duration').innerText = BASE_CACHE_DURATION/(1000 * 60);

        // Load boxes
        for(const [key, val] of Object.entries(boxes)){
            val.load();
        }
    });

