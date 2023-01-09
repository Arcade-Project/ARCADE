window.onload = (event) => {
  console.log("page is fully loaded");
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
  
};
