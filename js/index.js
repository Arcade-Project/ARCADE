const menuHamburger = document.querySelector(".menu-hamburger");
const navLinks = document.querySelector(".nav-links");

menuHamburger.addEventListener("click", () => {
  navLinks.classList.toggle("nav-links-active");
});

// Contact Part

const contact = document.getElementById("contact");
const contactBox = document.querySelector(".contact-ul");

contact.addEventListener("mouseover", () => {
  contactBox.classList.add("contact-container");
});
