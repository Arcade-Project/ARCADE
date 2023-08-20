// --------------------------------------------------------------------
// ---------------------------- Fonction ------------------------------
// --------------------------------------------------------------------

const markdownContent = document.querySelector(".markdown-content");
const md = (d) => {
  fetch(d)
    .then((response) => response.text())
    .then((markdown) => {
      const html = marked.parse(markdown);
      markdownContent.innerHTML = html;

      addBlankTargetToLinks();

      const summary = document.querySelectorAll("summary");

      summary.forEach((summary) => {
        const svgHTML =
          '<div class="svgCnt"><svg class="arrowSvgSummary" width="14" height="18" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M2.00195 2L6.00195 6L2.00195 10" stroke="#5c14e1" stroke-width="2" stroke-miterlimit="10" stroke-linecap="square" /></svg></div>';
        summary.insertAdjacentHTML("beforeend", svgHTML);

        const detailsElements = document.querySelectorAll("details");

        detailsElements.forEach((detailsElement) => {
          const arrowSvgSummary =
            detailsElement.querySelector(".arrowSvgSummary");
          detailsElement.addEventListener("toggle", (details) => {
            if (details.target.open) {
              arrowSvgSummary.style.transform = "rotate(90deg)";
            } else {
              arrowSvgSummary.style.transform = "none";
            }
          });
        });
      });
    });
};
// --------------------------------------------
const reloadFromServer = () => {
  location.reload(true);
};
// --------------------------------------------
const addBlankTargetToLinks = () => {
  const container = document.querySelector(".markdown-content");

  const links = container.querySelectorAll("a");

  links.forEach((link) => {
    if (link.getAttribute("target") !== "_parent") {
      link.setAttribute("target", "_blank");
    }
  });
};
// --------------------------------------------
const toggleMarkdownView = (action) => {
  if (action === "show") {
    mdContent.style.display = "none";
    summary.style.display = "block";
    summary.style.margin = "10px";
    summary.style.width = "100%";
    hButton.style.display = "none";
    hButtonClose.style.display = "block";
  } else if (action === "hide") {
    mdContent.style.display = "block";
    summary.style.display = "none";
    summary.style.margin = "10px 0 10px 10px";
    summary.style.width = "unset";
    hButton.style.display = "block";
    hButtonClose.style.display = "none";
  }
};

// --------------------------------------------------------------------
// --------------------- Add folders from json ------------------------
// --------------------------------------------------------------------
// const folders = document.querySelector("folders");

// fetch("/data/folders name.json")
//   .then((response) => response.json())
//   .then((foldersName) => {
//     for (const parent in foldersName) {
//       let childTag = [];
//       if (typeof foldersName[parent] === "object") {
//         // console.log(parent);
//         const parentTag = parent;
//         for (const child in foldersName[parent]) {
//           // console.log("- ", child);
//           childTag.push(child);
//         }
//         console.log(parentTag, childTag);
//       }
//       // console.log(containerTagForFolders);
//     }
//     // folders.innerHTML = foldersName;
//   });
// folders.insertAdjacentHTML(beforeend, containerTagForFolders);
// --------------------------------------------------------------------
// ------------------------- Hamburger Menu ---------------------------
// --------------------------------------------------------------------

const hButton = document.querySelector(".hButton");
const hButtonClose = document.querySelector(".hButtonClose");
const summary = document.querySelector(".summary");
const mdContent = document.querySelector(".contents");

hButton.addEventListener("click", () => {
  toggleMarkdownView("show");
});
hButtonClose.addEventListener("click", () => {
  toggleMarkdownView("hide");
});

// --------------------------------------------------------------------
// ----------------------------- Folder -------------------------------
// --------------------------------------------------------------------
const titles = document.querySelectorAll(".title");

titles.forEach((title) => {
  title.addEventListener("click", (e) => {
    e.stopPropagation();
    const parent = title.parentElement;
    const subFolder = parent.querySelector(".sub-folder");
    const arrowSvg = parent.querySelector(".arrowSvg");

    if (subFolder.style.display === "block") {
      subFolder.style.display = "none";
      arrowSvg.style.transform = "none";
    } else {
      subFolder.style.display = "block";
      arrowSvg.style.transform = "rotate(90deg)";
    }
  });
});

md("/data/welcome.md");

// --------------------
const welcome = document.querySelector("#summary h1");
welcome.addEventListener("click", () => {
  if (window.innerWidth <= 780) {
    toggleMarkdownView("hide");
  }
  subFolders.forEach((subFolder) => {
    subFolder.classList.remove("subFolderActive");
  });
  document.querySelectorAll(".title").forEach((title) => {
    title.classList.remove("titleActive");
  });
  md("/data/welcome.md");
});
// -----------

const subFolders = document.querySelectorAll(".sub-folder li");

subFolders.forEach((subFolder) => {
  subFolder.addEventListener("click", () => {
    const p_1 = subFolder.parentElement;
    const p_2 = p_1.parentElement;
    const title_ = p_2.querySelector(".title");

    subFolders.forEach((subFolder) => {
      subFolder.classList.remove("subFolderActive");
    });
    document.querySelectorAll(".title").forEach((title) => {
      title.classList.remove("titleActive");
    });

    subFolder.classList.add("subFolderActive");
    title_.classList.add("titleActive");

    if (window.innerWidth <= 780) {
      toggleMarkdownView("hide");
    }

    const content = subFolder.textContent.toLowerCase().replace("?", "");
    console.log(content);
    const p1 = subFolder.parentElement;
    const p2 = p1.parentElement;
    const title = p2
      .querySelector(".title")
      .textContent.trim()
      .toLowerCase()
      .replace("?", "");
    let data = `/data/${title}/${content}.md`;
    md(data);
  });
});

window.addEventListener("resize", () => {
  if (window.innerWidth < 780) {
    window.addEventListener("resize", function checkWidth() {
      if (window.innerWidth >= 780) {
        reloadFromServer();
        window.removeEventListener("resize", checkWidth);
      }
    });
  }
});
