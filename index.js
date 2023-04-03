
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
    window.open("./images/fw21_0411-Nisha-Gupta-Resume.pdf", "_blank")
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
