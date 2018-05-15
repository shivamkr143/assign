
var home=document.getElementById("home_button");
var projects=document.getElementById("projects_button");
var resume=document.getElementById("resume_button");

var homepage=document.getElementById("content");
var skill=document.getElementById("skill");
var projectspage=document.getElementById("projects");
var resumepage=document.getElementById("Resume");
var flag = 0;

// var hide = function  {
// 	homepage.className = 'inactive';
// }
	home.addEventListener("click",toggle);
	projects.addEventListener("click",toggle);
	resume.addEventListener("click",toggle);



function toggle(){

	if(home.clicked == true)
	{
		
		homepage.style.display="block";
		alert("home");	
	}
	else if (projects.clicked == true){
		
		projectspage.style.display="block";
		
	}
	else if(resume.clicked==true){
		projectspage.style.display="block";
	}
}