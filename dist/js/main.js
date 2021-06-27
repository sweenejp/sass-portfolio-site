// Select DOM Items
const menuBtn = document.querySelector(".hamburger-btn");
const menu = document.querySelector(".menu");
const menuList = document.querySelector(".menu__list");
const menuBranding = document.querySelector(".menu__branding");
const menuItems = document.querySelectorAll(".menu__item");

// Set initial state of the menu
let showMenu = false;

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add("hamburger-btn--close");
    menu.classList.add("menu--show");
    menuList.classList.add("menu__list--show");
    menuBranding.classList.add("menu__branding--show");
    menuItems.forEach((item) => item.classList.add("menu__item--show"));

    // Set menu state
    showMenu = true;
  } else {
    menuBtn.classList.remove("hamburger-btn--close");
    menu.classList.remove("menu--show");
    menuList.classList.remove("menu__list--show");
    menuBranding.classList.remove("menu__branding--show");
    menuItems.forEach((item) => item.classList.remove("menu__item--show"));

    // Set menu state
    showMenu = false;
  }
}
