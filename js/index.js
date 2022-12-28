const menuHamburger = document.querySelector(".menu-hamburger");
const navbar = document.querySelector(".navbar");
const cross = document.querySelector(".cross");

menuHamburger.addEventListener("click", () => {
  navbar.classList.add("navbar-active");
  menuHamburger.classList.add("menuHamburger-active");
  cross.classList.add("cross-active");
});

cross.addEventListener("click", () => {
  navbar.classList.remove("navbar-active");
  menuHamburger.classList.remove("menuHamburger-active");
  cross.classList.remove("cross-active");
});

// Contact Part

const contact = document.getElementById("contact");
const contactBox = document.querySelector(".contact-ul");

contact.addEventListener("mouseover", () => {
  contactBox.classList.add("contact-container");
});
