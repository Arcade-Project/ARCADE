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

// Index Part

// let wiki = document.querySelector(".wiki");
// let usefulLinks = document.querySelector(".useful-links");
// let githubArcade = document.querySelector(".github-arcade");

// wiki.addEventListener(
//   "mouseover",
//   (e) => {
//     wiki.style.width = "50px";
//     usefulLinks.style.width = "47px";
//     githubArcade.style.width = "44px";

//     console.log(e.target.isTrusted);
//   },
//   false
// );
