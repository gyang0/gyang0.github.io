/*
MonkeyType data (?)
Spotify data (?)
System stuff
[DONE] Resources
*/

let resources = {
    // Helpful resources loosely related to classics
    "greenish": [
        {
            name: "Perseus Scaife Viewer",
            url: "https://scaife.perseus.org/"
        },
        {
            name: "Podium Arts (YT)",
            url: "https://www.youtube.com/@Podium-Arts/videos"
        },
        {
            name: "Accenting Polytonic Greek",
            url: "https://www.reddit.com/r/AncientGreek/comments/wbpoy2/comment/ii8fybm/?utm_source=share&utm_medium=web3x&utm_name=web3xcss&utm_term=1&utm_content=share_button"
        }
    ],

    // Helpful resources loosely related to math/science/cs
    "reddish": [
        {
            name: "Feynman Lectures on Physics",
            url: "https://www.feynmanlectures.caltech.edu/"
        },
        {
            name: "Kevin S. Huang's F=ma Solutions",
            url: "https://kevinshuang.com/2016/10/26/fma-exam-solutions/"
        },
        {
            name: "Kevin Zhou: After Intro Physics",
            url: "https://knzhou.github.io/writing/AdviceAfter.pdf"
        },
        {
            name: "Articles by Inigo Quilez",
            url: "https://iquilezles.org/articles/"
        },
        {
            name: "IBM Qiskit courses",
            url: "https://learning.quantum.ibm.com/catalog/courses"
        }
    ],

    // Insightful, brilliant, or funny stuff I found online
    "bluish": [
        {
            name: "Evil Twin Strategy for Betting",
            url: "https://math.dartmouth.edu/~doyle/docs/twin/twin.pdf"
        },
        {
            name: "Lockpicking: Detail Overkill",
            url: "https://nick.blog/wp-content/uploads/2018/04/lockpicking-detail-overkill.pdf"
        },
        {
            name: "LilyPond Essay: Engraving Music",
            url: "https://lilypond.org/doc/v2.24/Documentation/essay/the-lilypond-story"
        },
        {
            name: "Learning in Quarantine",
            url: "https://www.youtube.com/watch?v=BSxM6_zEw2k"
        },
        {
            name: "Oversimplified",
            url: "https://www.youtube.com/@OverSimplified/videos"
        },
        {
            name: "Daft Punk",
            url: "https://www.youtube.com/@daftpunk/videos"
        }
    ]
}

// Latest commit
function loadCommit(){
    let commit_overview = document.getElementById('commit-overview');
    let commit_desc = document.getElementById('commit-desc');
    
    fetch('https://api.github.com/repos/gyang0/gyang0.github.io/commits?per_page=1', {crossorigin: "anonymous"})
        .then(res => res.json())
        .then(res => {
            let date = res[0].commit.committer.date.substr(0, 10);
            let sha = res[0].sha;

            commit_overview.innerHTML = `${date} (<a href="https://github.com/gyang0/gyang0.github.io/commit/${sha}" target="_blank">${sha.substr(0, 6)}</a>)`;
            commit_desc.innerHTML = res[0].commit.message;
        });
}

// List of resources
function loadResources(){
    let str = `
        <h3 style="font-size: 30px; text-align: center">Resources</h3>
        <div style="display: flex; flex-wrap: wrap">
    `;

    for(let col in resources){
        for(let i = 0; i < resources[col].length; i++){
            let res = resources[col][i];

            str += `
            <div style="width: 330px">
                <p style="margin-bottom: -10px; margin-left: 30px; line-height: 1.7em">
                    <a style="color:var(--${col});
                            font-size: 18px"
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

loadCommit();
loadResources();
