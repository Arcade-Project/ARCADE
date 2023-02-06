window.onload = (event) => {
  console.log("page is fully loaded");

  const menuHamburger = document.querySelector(".menu-hamburger");
  const navlinks = document.querySelector(".navlinks");
  const cross = document.querySelector(".cross");
  const nav = document.querySelector("nav")
  const arc = document.querySelector(".logo")

  menuHamburger.addEventListener("click", () => {
    arc.style.position = 'fixed'
    navlinks.style.display = 'block'
    menuHamburger.classList.add("menuHamburger-active");
    cross.classList.add("cross-active");
  });

  cross.addEventListener("click", () => {
    arc.style.position = 'absolute'
    navlinks.style.display = 'none'
    menuHamburger.classList.remove("menuHamburger-active");
    cross.classList.remove("cross-active");
  });
  
};
