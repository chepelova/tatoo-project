const userMenu = document.querySelector('.header__container');
const hoverElement = userMenu.querySelector('.user-menu__item--repair');
const popoverElement = userMenu.querySelector('.popover');

const closePopover = () => {
  popoverElement.style.display = 'none';
  document.removeEventListener('click', closePopover);
};

const openPopover = () => {
  popoverElement.style.display = 'block';
  document.addEventListener('click', closePopover);
};

const initPopover = () => {
  hoverElement.addEventListener('mouseover', openPopover);
};

export { initPopover };
