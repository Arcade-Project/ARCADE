const scrollToTopButton = document.querySelector(".scrollToTopButton");
const links = document.querySelectorAll('a[href^="#"]');
const mediaQuery = window.matchMedia("(max-width: 740px)");

const handleMediaQuery = (mediaQuery) => {
  if (mediaQuery.matches) {
    const nav = document.querySelector("nav");
    const navlinks = nav.querySelector(".navlinks");
    const logo = navlinks.querySelector(".logo");
    const sublist = navlinks.querySelector(".sublist");
    const btn_dl = sublist.querySelector("#btn-dl");
    const btn_menu = nav.querySelector(".btn-menu");
    const btn_close = nav.querySelector(".btn-close");
    const exitArea = nav.querySelector(".exit-area");

    btn_menu.addEventListener("click", () => {
      document.body.style.overflowY = "hidden";
      nav.classList.add("nav-active");
      navlinks.classList.add("navlinks-active");
      logo.classList.add("logofix");
      btn_close.style.display = "block";
      btn_menu.style.display = "none";
      btn_dl.style.display = "block";
      sublist.style.display = "block";
      exitArea.style.display = "block";
    });

    btn_close.addEventListener("click", () => {
      document.body.style.overflowY = "unset";
      nav.classList.remove("nav-active");
      navlinks.classList.remove("navlinks-active");
      logo.classList.remove("logofix");
      btn_close.style.display = "none";
      btn_menu.style.display = "flex";
      btn_dl.style.display = "none";
      sublist.style.display = "none";
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
  const scrollToTop = () => {
    if (window.scrollY > 0) {
      const scrollStep = window.scrollY / 10;
      window.scrollBy(0, -scrollStep);
      if (window.scrollY === 0) return;
    } else if (window.scrollY < 0) {
      const scrollStep = -window.scrollY / 10;
      window.scrollBy(0, scrollStep);
      if (window.scrollY >= 0) return;
    }
    requestAnimationFrame(scrollToTop);
  };
  scrollToTop();
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

const reloadFromServer = () => {
  location.reload(true);
};

window.addEventListener("resize", () => {
  if (window.innerWidth < 740) {
    window.addEventListener("resize", function checkWidth() {
      if (window.innerWidth >= 740) {
        reloadFromServer();
        window.removeEventListener("resize", checkWidth);
      }
    });
  }
});

console.log("page is fully loaded");
