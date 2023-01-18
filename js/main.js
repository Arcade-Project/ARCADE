window.onload = (event) => {
  console.log("page is fully loaded");
  const menuHamburger = document.querySelector(".menu-hamburger");
  const navlinks = document.querySelector(".navlinks");
  const cross = document.querySelector(".cross");

  menuHamburger.addEventListener("click", () => {
    navlinks.classList.add("navlinks-active");
    menuHamburger.classList.add("menuHamburger-active");
    cross.classList.add("cross-active");
  });

  cross.addEventListener("click", () => {
    navlinks.classList.remove("navlinks-active");
    menuHamburger.classList.remove("menuHamburger-active");
    cross.classList.remove("cross-active");
  });
  
};
