import "./scss/main.scss";

const openMenuBtn = document.querySelector(".header-menu__button");
const closeMenuBtn = document.querySelector(".menu__button-close");
const mobileMenu = document.querySelector(".menu--mobile");

openMenuBtn.addEventListener("click", (e) => {
  e.preventDefault();
  mobileMenu.classList.add("open");
});

closeMenuBtn.addEventListener("click", (e) => {
  e.preventDefault();
  mobileMenu.classList.remove("open");
});
