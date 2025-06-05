const pageHeader = document.querySelector('.page__header');
const buttonMobileMenu = pageHeader.querySelector('.mobile-menu__link--menu');
const mobileMenu = pageHeader.querySelector('.header__user-menu');
const closeMenuButton = pageHeader.querySelector('.user-menu__close');

const onCloseMenu = () => {
  mobileMenu.classList.remove('user-menu--open');
};

const onOpenMobileMenu = () => {
  mobileMenu.classList.add('user-menu--open');
};

const initMenu = () => {
  buttonMobileMenu.addEventListener('click', onOpenMobileMenu);
  closeMenuButton.addEventListener('click', onCloseMenu);
};

export { initMenu };
