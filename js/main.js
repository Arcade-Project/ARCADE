
const menuHamburger = document.querySelector(".menu-hamburger");
const navlinks = document.querySelector(".navlinks");
const cross = document.querySelector(".cross");
const nav = document.querySelector("nav")
const arc = document.querySelector(".logo")
const backexit = document.querySelector(".backexit")

menuHamburger.addEventListener("click", () => {
  nav.style.height = '100%'
  backexit.style.display = 'block'
  arc.style.position = 'fixed'
  navlinks.style.display = 'block'
  menuHamburger.classList.add("menuHamburger-active");
  cross.classList.add("cross-active");
});

cross.addEventListener("click", () => {
  nav.style.height = '80px'
  backexit.style.display = 'none'
  arc.style.position = 'absolute'
  navlinks.style.display = 'none'
  menuHamburger.classList.remove("menuHamburger-active");
  cross.classList.remove("cross-active");
});

  backexit.addEventListener("click", () => {
    nav.style.height = '80px'
    backexit.style.display = 'none'
    arc.style.position = 'absolute'
    navlinks.style.display = 'none'
    menuHamburger.classList.remove("menuHamburger-active");
    cross.classList.remove("cross-active");
});

