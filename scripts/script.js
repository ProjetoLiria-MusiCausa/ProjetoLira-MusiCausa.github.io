const btnMenuHamburger = document.querySelector('.menu-hamburger');
const headerResponsive = document.querySelector('.header-nav-responsive');

let activeMenu = 0;

btnMenuHamburger.addEventListener('click', () => {
  if (activeMenu === 1) {
    headerResponsive.style.width = '0%'
    headerResponsive.style.left = '100%'
    activeMenu = 0
  }
  else {
    headerResponsive.style.width = '45%'
    headerResponsive.style.left = '55%'
    activeMenu = 1
  }
})
