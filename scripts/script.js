AOS.init();

const bodyElement = document.querySelector('body');
const btnMenuHamburger = document.querySelector('.menu-hamburger');
const headerResponsive = document.querySelector('.header-nav-responsive');

let screen = window.outerWidth;

let activeMenu = 0;

btnMenuHamburger.addEventListener('click', () => {
  if (activeMenu === 1) {
    headerResponsive.style.width = '0%';
    headerResponsive.style.left = '100%';
    activeMenu = 0;
  }
  else {
    if (screen > 600) {
      headerResponsive.style.width = '45%';
      headerResponsive.style.left = '55%';
    }
    else {
      headerResponsive.style.width = '75%';
      headerResponsive.style.left = '25%';
    }
    activeMenu = 1;
  }
});

bodyElement.addEventListener('touchmove', () => {
  if (activeMenu === 1) {
    headerResponsive.style.width = '0%';
    headerResponsive.style.left = '100%';
    activeMenu = 0;
  }
})