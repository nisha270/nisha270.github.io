// api for joke ;
//  function makeajoke(){
//     let space=document.querySelector(".joke");
//     let setup=document.querySelector(".joke_setup");
//     space.innerText="";
//     setup.innerText=""
//     let api='https://v2.jokeapi.dev/joke/Programming';
//    try{
//     fetch(api)
//     .then((response) => response.json())
//     .then((data) => {if(!data.delivery){
//         space.innerText=data.joke;
       
//     }
// else{
//     setup.innerText="Setup:"+data.setup
//     console.log(data)
//     space.innerText="Delivery:"+ data.delivery
// }
// });
//    }catch(err){
//     // space.innerText="Because they didn't Node how to Express themself!"
//    }


// }

// makeajoke()
// document.querySelector('.opendrawer').addEventListener('click',()=>{openNav()})
// document.querySelector('.closebtn').addEventListener('click',()=>{closeNav()})
// function openNav() {
//     document.getElementById("mySidenav").style.width = "450px";
//   }
  
  // function closeNav() {
  //   document.getElementById("mySidenav").style.width = "0px";
  // }

  GitHubCalendar(".calendar", "nisha270");
  // or enable responsive functionality
  GitHubCalendar(".calendar", "nisha270", { responsive: true });


  AOS.init();

  const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () =>{
  	const scrollY = window.pageYOffset
    console.log(sections)
	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

		if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link')
		}else{
			sectionsClass.classList.remove('active-link')
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive)

const openresume=()=>{
  window.open("https://drive.google.com/file/d/1HEEdQwPZOr50iRuH0D-svR-J-jam4AnG/view?usp=sharing")
}
