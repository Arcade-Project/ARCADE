const menuHamburger = document.querySelector(".menu-hamburger");
const links = document.querySelector(".links");

console.log(links);

menuHamburger.addEventListener("click", () => {
  navLinks.classList.toggle("mobile-menu");
});
