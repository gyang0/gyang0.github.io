// Navbar and footer
const navbarCode = `
	<ul>
   		<li><a href="index.html">Home</a></li>
        <li><a href="projects.html">Projects</a></li>
        <li><a href="activity.html">Activity</a></li>
   	</ul>`;

const footerCode = `
	<p>Website hosted through GitHub pages</p>
	<p><i class="fa fa-copyright"></i> ${new Date().getFullYear()} by Gene Yang</p><br>
    <p>
        <a href="https://github.com/gyang0/gyang0.github.io" target="_blank"><i class="fa fa-github" style="font-size: 40px;color:white;"></i></a>
    </p>`;

document.getElementById("navbar").innerHTML = navbarCode;
document.getElementById("footer").innerHTML = footerCode;


// Navigating using project/activity filters
// id = used in code
// name = as it appears on the page
// desc = description
const projectFilters = [
    { name: "Physics", desc: "Physics is cool." },
    { name: "Classics", desc: "Enjoy my terrible essays and analyses." },
    { name: "Coding", desc: "Programs I dabbled in over the years." }
];

const activityFilters = [
    { id: "newer", name: "Newer" },
    { id: "older", name: "Older" }
];
