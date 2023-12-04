// Navbar and footer
var navbarCode = `
	<ul>
   		<li><a href="index.html">Home</a></li>
        <li><a href="projects.html">Projects</a></li>
        <li><a href="activity.html">Activity</a></li>
   	</ul>`;

var footerCode = `
	<p>Website hosted through GitHub pages</p>
	<p><i class="fa fa-copyright"></i> ${new Date().getFullYear()} by Gene Yang</p><br>
    <p>
        <a href="https://github.com/gyang0/gyang0.github.io" target="_blank"><i class="fa fa-github" style="font-size: 40px;color:white;"></i></a>
    </p>`;

document.getElementById("navbar").innerHTML = navbarCode;
document.getElementById("footer").innerHTML = footerCode;