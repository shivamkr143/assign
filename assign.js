
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

	home.addEventListener("click",toggle1);
	projects.addEventListener("click",toggle2);
	resume.addEventListener("click",toggle3);




function toggle1(){

		homepage.style.display="block";
		skill.style.display="block";
		projectspage.style.display="none";
		resumepage.style.display="none";

		alert("home");	}
	
function toggle2(){
		
		homepage.style.display="none";
		skill.style.display="none";
		projectspage.style.display="block";
		resumepage.style.display="none";
		}
	
	function toggle3(){
		homepage.style.display="none";
		skill.style.display="none";
		projectspage.style.dis	play="none";
		resumepage.style.display="block";
		
	}
