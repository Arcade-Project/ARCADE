const menuHamburger = document.querySelector(".menu-hamburger");
const navLinks = document.querySelector(".nav-links");
const cross = document.querySelector(".cross");

menuHamburger.addEventListener("click", () => {
  navLinks.classList.add("nav-links-active");
  menuHamburger.classList.add("menuHamburger-active");
  cross.classList.add("cross-active");
});
cross.addEventListener("click", () => {
  navLinks.classList.remove("nav-links-active");
  menuHamburger.classList.remove("menuHamburger-active");
  cross.classList.remove("cross-active");
});
// Contact Part

const contact = document.getElementById("contact");
const contactBox = document.querySelector(".contact-ul");

contact.addEventListener("mouseover", () => {
  contactBox.classList.add("contact-container");
});
