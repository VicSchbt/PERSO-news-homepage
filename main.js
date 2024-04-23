import './scss/main.scss';

const openMenuBtn = document.querySelector('.header-menu__button');
const closeMenuBtn = document.querySelector('.menu__button-close');
const mobileMenu = document.querySelector('.menu--mobile');
const overlay = document.querySelector('.overlay');

openMenuBtn.addEventListener('click', (e) => {
	e.preventDefault();
	overlay.classList.add('open');
	mobileMenu.classList.add('open');
});

closeMenuBtn.addEventListener('click', (e) => {
	e.preventDefault();
	overlay.classList.remove('open');
	mobileMenu.classList.remove('open');
});
