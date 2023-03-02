window.onload = (event) => {
  console.log("page is fully loaded");

  const menuHamburger = document.querySelector(".menu-hamburger");
  const navlinks = document.querySelector(".navlinks");
  const cross = document.querySelector(".cross");
  const nav = document.querySelector("nav")
  const logo = document.querySelector(".logo")
  const backexit = document.querySelector(".backexit")
  const btndownload = document.querySelector(".btnr")

  menuHamburger.addEventListener("click", () => {
    btndownload.style.visibility = 'visible'
    logo.classList.add("logofix")
    nav.style.height = '100%'
    backexit.style.display = 'block'
    logo.style.position = 'fixed'
    navlinks.style.display = 'block'
    menuHamburger.classList.add("menuHamburger-active");
    cross.classList.add("cross-active");
  });

  cross.addEventListener("click", () => {
    btndownload.style.visibility = 'hidden'
    logo.classList.remove("logofix")
    nav.style.height = '80px'
    backexit.style.display = 'none'
    logo.style.position = 'absolute'
    navlinks.style.display = 'none'
    menuHamburger.classList.remove("menuHamburger-active");
    cross.classList.remove("cross-active");
  });

    backexit.addEventListener("click", () => {
      btndownload.style.visibility = 'hidden'
      logo.classList.remove("logofix")
      nav.style.height = '80px'
      backexit.style.display = 'none'
      logo.style.position = 'absolute'
      navlinks.style.display = 'none'
      menuHamburger.classList.remove("menuHamburger-active");
      cross.classList.remove("cross-active");
  });
  
};
