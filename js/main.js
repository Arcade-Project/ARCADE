const scrollToTopButton = document.querySelector(".scrollToTopButton");
const links = document.querySelectorAll('a[href^="#"]');
const mediaQuery = window.matchMedia("(max-width: 740px)");

const handleMediaQuery = (mediaQuery) => {
  if (mediaQuery.matches) {
    const btn_menu = document.querySelector(".btn-menu");
    const navlinks = document.querySelector(".navlinks");
    const btn_close = document.querySelector(".btn-close");
    const nav = document.querySelector("nav");
    const logo = document.querySelector(".logo");
    const exitArea = document.querySelector(".exit-area");
    const btn_dl = document.querySelector("#btn-dl");
    const sublist = document.querySelector(".sublist");

    btn_menu.addEventListener("click", () => {
      document.body.style.overflowY = "hidden";
      nav.classList.add("nav-active");
      btn_close.style.display = "block";
      btn_menu.style.display = "none";
      btn_dl.style.display = "block";
      sublist.style.display = "block";
      logo.classList.add("logofix");
      navlinks.style.backgroundColor = "#353535";
      navlinks.style.right = "0";
      navlinks.style.position = "fixed";
      navlinks.style.height = "100%";
      exitArea.style.display = "block";
    });

    btn_close.addEventListener("click", () => {
      document.body.style.overflowY = "unset";
      nav.classList.remove("nav-active");
      btn_close.style.display = "none";
      btn_menu.style.display = "flex";
      btn_dl.style.display = "none";
      sublist.style.display = "none";
      logo.classList.remove("logofix");
      navlinks.style.backgroundColor = "unset";
      navlinks.style.right = "-100%";
      navlinks.style.position = "unset";
      navlinks.style.height = "40px";
      exitArea.style.display = "none";
    });

    exitArea.addEventListener("click", () => {
      document.body.style.overflowY = "unset";
      nav.classList.remove("nav-active");
      btn_close.style.display = "none";
      btn_menu.style.display = "flex";
      btn_dl.style.display = "none";
      sublist.style.display = "none";
      logo.classList.remove("logofix");
      navlinks.style.backgroundColor = "unset";
      navlinks.style.right = "-100%";
      navlinks.style.position = "unset";
      navlinks.style.height = "40px";
      exitArea.style.display = "none";
    });

    // smooth scroll for <a href=#>

    links.forEach((link) => {
      link.addEventListener("click", (event) => {
        document.body.style.overflowY = "unset";
        nav.classList.remove("nav-active");
        btn_close.style.display = "none";
        btn_menu.style.display = "flex";
        btn_dl.style.display = "none";
        sublist.style.display = "none";
        logo.classList.remove("logofix");
        navlinks.style.backgroundColor = "unset";
        navlinks.style.right = "-100%";
        navlinks.style.position = "unset";
        navlinks.style.height = "40px";
        exitArea.style.display = "none";
      });
    });
  }
};

handleMediaQuery(mediaQuery);
mediaQuery.addListener(handleMediaQuery);

links.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();

    const target = document.querySelector(link.getAttribute("href"));

    if (target) {
      const offset = target.offsetTop;

      window.scrollTo({
        top: offset,
        behavior: "smooth",
      });
    }
  });
});

scrollToTopButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

window.addEventListener("scroll", () => {
  const scrollHeight = window.pageYOffset || document.documentElement.scrollTop;
  const windowHeight = document.documentElement.clientHeight;
  const scrollPercentage =
    (scrollHeight / (document.documentElement.scrollHeight - windowHeight)) *
    100;

  if (scrollPercentage > 10) {
    scrollToTopButton.style.display = "block";
  } else {
    scrollToTopButton.style.display = "none";
  }
});

console.log("page is fully loaded");
