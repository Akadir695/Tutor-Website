const nav = document.querySelector('.navbar')
const menu = document.querySelector('.navbar .mobile-menu-toggle')
const mobileMenu = document.querySelector('.navbar .mobile-menu-items');
const toggleButton = () => {
  document.addEventListener('DOMContentLoaded', onToggle)
  
} 
const onToggle = () => {
 
menu.addEventListener('click',  clickButton)
}

const clickButton = () => {
mobileMenu.classList.toggle('active')

}
toggleButton()

// a function that changes nav changes
const scrollNav = () => {
  if(window.scrollY > 0) {
    nav.classList.add('navbar-scroll');
  }
  else {
    nav.classList.remove('navbar-scroll');
  }

}
const scrollEvent = () => {
window.addEventListener('scroll', scrollNav)
}
scrollEvent()
