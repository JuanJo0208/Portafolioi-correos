/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
        showButton();
    })
}
const showButton = () =>{
  if(navToggle){
    navClose.classList.add('show-button')
  }else{
    navClose.classList.remove('show-button')
  }
}
/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


/*=============== ADD BLUR TO HEADER ===============*/
const blurHeader = () =>{
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the blur-header class to the header tag
    this.scrollY >= 50 ? header.classList.add('blur-header') 
                       : header.classList.remove('blur-header')
}
window.addEventListener('scroll', blurHeader)


/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form'),
      contactMessage = document.getElementById('contact-message')

const sendEmail = (e) =>{
    e.preventDefault()

    // serviceID - templateID - #form - publicKey
    emailjs.sendForm('service_j6rdpjj', 'template_8hx5hjw', '#contact-form', '3Tp9oT6ifq_tosFJ1')
        .then(() => {
            // Mostrar mensaje enviado
            contactMessage.textContent = 'Mensaje Mandado Correctamente ✅'

            // Remover el mensaje luego de 5 secundos
            setTimeout(() =>{
                contactMessage.textContent = ''
            }, 5000)

            // Limpiar los campos
            contactForm.reset()
        }, () =>{
            // Mostrar mensaje de error
            contactMessage.textContent = 'Mensaje no Enviado (service error) ❌'
        })
}

contactForm.addEventListener('submit', sendEmail)


/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () =>{
	const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
	this.scrollY >= 790 ? scrollUp.classList.add('show-scroll')
						: scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () =>{
  	const scrollY = window.pageYOffset

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


/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    reset: true // Repetir animacion
})

sr.reveal('.home__data, .home__social, .contact__container, .footer__container')
sr.reveal('.home__image', {origin: 'bottom'})
sr.reveal('.about__data, .skills__data', {origin: 'left'})
sr.reveal('.about__image, .skills__content', {origin: 'right'})
sr.reveal('.services__card, .projects', {interval: 100})


/*=============== THEME/DISPLAY CUSTOMIZATION ===============*/
const theme = document.querySelector('.custom__button');
const themeModal = document.querySelector(".customize-theme");
const colorPalette = document.querySelectorAll('.choose-color span');
var root = document.querySelector(':root');

// abrir el modal
const openThemeModal = () => {
  themeModal.style.display = 'grid';
}
// cerrar el modal
const closeThemeModal = (e) => {
  if(e.target.classList.contains('customize-theme'))
  {
    themeModal.style.display = 'none';
  }
}
theme.addEventListener("click", openThemeModal);
themeModal.addEventListener("click", closeThemeModal);


/*===== PRIMARY COLORS =====*/
// remover clase activa de los colores
const changeActiveColorClass = () => {
    colorPalette.forEach(colorPicker => {
      colorPicker.classList.remove('active');
    })
  }
  
  colorPalette.forEach(color => {
    color.addEventListener('click', () => {
      let primaryHue;
      changeActiveColorClass();
  
      if(color.classList.contains('color-1'))
      {
        primaryHue = 162;
        ligtness = 40;
      }else if(color.classList.contains('color-2'))
      {
        primaryHue = 14;
        ligtness = 65;
      }
      else if(color.classList.contains('color-3'))
      {
        primaryHue = 210;
        ligtness = 70;
      }
      else if(color.classList.contains('color-4'))
      {
        primaryHue = 250;
        ligtness = 75;
      }
      else if(color.classList.contains('color-5'))
      {
        primaryHue = 356;
        ligtness = 75;
      }
      color.classList.add("active");
      root.style.setProperty('--hue', primaryHue)
      root.style.setProperty('--ligtness', ligtness + '%')
    })
  })