
// navbar
var mainListDiv = document.getElementById("mainListDiv"),
    mediaButton = document.getElementById("mediaButton");

mediaButton.onclick = function () {
    
    "use strict";
    
    mainListDiv.classList.toggle("show_list");
    mediaButton.classList.toggle("active");
    
};

// resume view 
let ResumeBtn=document.querySelector("#nisha1")
ResumeBtn.addEventListener("click",()=>{
    window.open("", "_blank")
})

const menuBtn = document.querySelector('.menu-btn');
const navRight = document.querySelector('.nav_right');

menuBtn.addEventListener('click', () => {
  navRight.classList.toggle('show');
});

window.addEventListener('resize', () => {
  if (window.innerWidth > 768) {
    navRight.classList.remove('show');
  }
});

// Skills
function fillProgressBars() {
  var htmlProgress = document.getElementById("html-bar").querySelector(".progress");
  var cssProgress = document.getElementById("css-bar").querySelector(".progress");
  var jsProgress = document.getElementById("js-bar").querySelector(".progress");
  var javaProgress = document.getElementById("java-bar").querySelector(".progress");
  var phpProgress = document.getElementById("php-bar").querySelector(".progress");
  var bootstrapProgress = document.getElementById("bootstrap-bar").querySelector(".progress");
  var mysqlProgress = document.getElementById("mysql-bar").querySelector(".progress");

  htmlProgress.style.width = "85%";
  cssProgress.style.width = "80%";
  jsProgress.style.width = "70%";
  javaProgress.style.width = "80%";
  phpProgress.style.width = "45%";
  bootstrapProgress.style.width = "55%";
  mysqlProgress.style.width = "70%";
}

fillProgressBars();

