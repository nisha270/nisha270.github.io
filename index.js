
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
  window.open("https://drive.google.com/file/d/1NtqVUSIv9epOf6p5Me0kDnRj2HXxQdQN/view?usp=sharing")
}
