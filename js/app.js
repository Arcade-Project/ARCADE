// FONCTION
const colorMap = {
  red: "red",
  blue: "blue",
  purple: "#5c14e1",
  orange: "#ff322f",
  green: "#7CA87F",
  yellow: "#e0d90d",
};

const icons = {
  note: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor"><path d="M11.013 1.427a1.75 1.75 0 0 1 2.474 0l1.086 1.086a1.75 1.75 0 0 1 0 2.474l-8.61 8.61c-.21.21-.47.364-.756.445l-3.251.93a.75.75 0 0 1-.927-.928l.929-3.25c.081-.286.235-.547.445-.758l8.61-8.61Zm.176 4.823L9.75 4.81l-6.286 6.287a.253.253 0 0 0-.064.108l-.558 1.953 1.953-.558a.253.253 0 0 0 .108-.064Zm1.238-3.763a.25.25 0 0 0-.354 0L10.811 3.75l1.439 1.44 1.263-1.263a.25.25 0 0 0 0-.354Z"></path></svg>',
  info: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" /></svg>',
  warning:
    '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" /></svg>',
  bug: '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 11C10 10.4477 10.4477 10 11 10H13C13.5523 10 14 10.4477 14 11C14 11.5523 13.5523 12 13 12H11C10.4477 12 10 11.5523 10 11Z" fill="currentColor" /><path d="M11 14C10.4477 14 10 14.4477 10 15C10 15.5523 10.4477 16 11 16H13C13.5523 16 14 15.5523 14 15C14 14.4477 13.5523 14 13 14H11Z" fill="currentColor" /><path fill-rule="evenodd" clip-rule="evenodd" d="M9.09447 4.74918C8.41606 4.03243 8 3.0648 8 2H10C10 3.10457 10.8954 4 12 4C13.1046 4 14 3.10457 14 2H16C16 3.0648 15.5839 4.03243 14.9055 4.74918C16.1782 5.45491 17.1673 6.6099 17.6586 8H19C19.5523 8 20 8.44772 20 9C20 9.55229 19.5523 10 19 10H18V12H19C19.5523 12 20 12.4477 20 13C20 13.5523 19.5523 14 19 14H18V16H19C19.5523 16 20 16.4477 20 17C20 17.5523 19.5523 18 19 18H17.6586C16.8349 20.3304 14.6124 22 12 22C9.38756 22 7.16508 20.3304 6.34141 18H5C4.44772 18 4 17.5523 4 17C4 16.4477 4.44772 16 5 16H6V14H5C4.44772 14 4 13.5523 4 13C4 12.4477 4.44772 12 5 12H6V10H5C4.44772 10 4 9.55229 4 9C4 8.44772 4.44772 8 5 8H6.34141C6.83274 6.6099 7.82181 5.45491 9.09447 4.74918ZM8 16V10C8 7.79086 9.79086 6 12 6C14.2091 6 16 7.79086 16 10V16C16 18.2091 14.2091 20 12 20C9.79086 20 8 18.2091 8 16Z" fill="currentColor" /></svg>',
  quote:
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2c1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1zm12 0c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"/></svg>',
  check:
    '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>',
  example:
    '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" /></svg>',
  settings:
    '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" /></svg>',
};

const markdownContent = document.querySelector(".markdown-content");
const md = (d) => {
  fetch(d)
    .then((response) => response.text())
    .then((markdown) => {
      const coloredText = {
        type: "lang",
        filter: (text) => {
          const codeBlocks = [];

          text = text.replace(/```[\s\S]*?```/g, (match) => {
            codeBlocks.push(match);
            return `%%%CODEBLOCK%%%`;
          });

          text = text.replace(/:(\w+)\{(.*?)\}/g, (_, color, match) => {
            const selectedColor = colorMap[color] || color;
            return `<span style="color: ${selectedColor};">${match}</span>`;
          });

          text = text.replace(/%%%CODEBLOCK%%%/g, () => {
            return codeBlocks.shift();
          });

          return text;
        },
      };

      const highlighter = {
        type: "lang",
        filter: (text) => {
          const codeBlocks = [];

          text = text.replace(/```[\s\S]*?```/g, (match) => {
            codeBlocks.push(match);
            return `%%%CODEBLOCK%%%`;
          });

          text = text.replace(/\=\=(\w+)\{([^]*?)\}/g, (_, color, match) => {
            const selectedColor = colorMap[color] || color;
            return `<mark style="background-color: ${selectedColor};">${match}</mark>`;
          });

          text = text.replace(/==([^]*?)==/g, (_, match) => {
            return `<mark>${match}</mark>`;
          });

          text = text.replace(/%%%CODEBLOCK%%%/g, () => {
            return codeBlocks.shift();
          });

          return text;
        },
      };

      const customBlockQuote = {
        type: "output",
        filter: (text) => {
          const codeBlocks = [];

          text = text.replace(
            /<code(?:\s+class=".*?")?\s*>([\s\S]*?)<\/code>/g,
            (match) => {
              codeBlocks.push(match);
              return "%%%CODEBLOCK%%%";
            }
          );

          text = text.replace(
            /:::(\w+)\s*(.*?)\n(.*?):::/gs,
            (_, className, title, content) => {
              const icon = icons[className] || "";
              const iconCtnClass = icon ? "iconCtn" : "";
              return `<blockquote class="${className}"><h3><span class="${iconCtnClass}">${icon}</span>${title.trim()}</h3><p>${content.trim()}</p></blockquote>`;
            }
          );
          text = text.replace(/%%%CODEBLOCK%%%/g, () => {
            return `${codeBlocks.shift()}`;
          });

          return text;
        },
      };

      const customSpace = {
        type: "output",

        filter: (text) => {
          const codeBlocks = [];

          text = text.replace(
            /<code(?:\s+class=".*?")?\s*>([\s\S]*?)<\/code>/g,
            (match) => {
              codeBlocks.push(match);
              return "%%%CODEBLOCK%%%";
            }
          );

          text = text.replace(
            /!!!space!!!/g,

            '<span class="custom-space"></span>'
          );
          text = text.replace(/%%%CODEBLOCK%%%/g, () => {
            return `${codeBlocks.shift()}`;
          });

          return text;
        },
      };
      const expandable = {
        type: "output",
        filter: (text) => {
          const codeBlocks = [];

          text = text.replace(
            /<code(?:\s+class=".*?")?\s*>([\s\S]*?)<\/code>/g,
            (match) => {
              codeBlocks.push(match);
              return "%%%CODEBLOCK%%%";
            }
          );

          text = text.replace(
            /\[exp\]\s*(?:\[title\]\s*(.*?)\s*\[\/title\])?\s*(.*?)\s*\[\/exp\]/gs,
            (_, title, content) => {
              const titleHtml = title
                ? `<summary><h3>${title.trim()}</h3><div class="svgCnt"><svg class="arrowSvgSummary" width="14" height="18" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg" style="transform: none;"> <path d="M2.00195 2L6.00195 6L2.00195 10" stroke="#5c14e1" stroke-width="2" stroke-miterlimit="10" stroke-linecap="square"></path></svg></div></summary>`
                : "";

              const detailsTag = `<details>${titleHtml}<p>${content.trim()}</p></details>`;

              return detailsTag;
            }
          );
          text = text.replace(/%%%CODEBLOCK%%%/g, () => {
            return `${codeBlocks.shift()}`;
          });

          return text;
        },
      };

      const converter = new showdown.Converter({
        extensions: [
          coloredText,
          highlighter,
          customSpace,
          expandable,
          customBlockQuote,
        ],
        tables: true,
        tasklists: true,
      });

      const html = converter.makeHtml(markdown);

      markdownContent.innerHTML = html;

      addBlankTargetToLinks();

      const summary = markdownContent.querySelectorAll("summary");

      summary.forEach((summary) => {
        const detailsElements = markdownContent.querySelectorAll("details");

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

      const codeTags = markdownContent.querySelectorAll("code");

      codeTags.forEach((codeTag) => {
        const copyToClipboard = '<div class="copyCtn"><span>copy</span></div>';
        codeTag.insertAdjacentHTML("beforeend", copyToClipboard);
      });
      const copyCtns = markdownContent.querySelectorAll(".copyCtn");
      copyCtns.forEach((copyCtn) => {
        copyCtn.addEventListener("click", () => {
          const parentContent = copyCtn.parentElement.cloneNode(true);
          const copyElement = parentContent.querySelector(".copyCtn");
          copyElement.remove();

          const tempTextArea = document.createElement("textarea");
          tempTextArea.value = parentContent.textContent;
          document.body.appendChild(tempTextArea);
          tempTextArea.select();

          try {
            document.execCommand("copy");
          } catch (err) {
            console.error(
              "Impossible de copier le contenu dans le presse-papiers",
              err
            );
          }

          document.body.removeChild(tempTextArea);
        });
      });
    });
};
const reloadFromServer = () => {
  location.reload(true);
};
const addBlankTargetToLinks = () => {
  const container = document.querySelector(".markdown-content");

  const links = container.querySelectorAll("a");

  links.forEach((link) => {
    if (link.getAttribute("target") !== "_parent") {
      link.setAttribute("target", "_blank");
    }
  });
};
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

// ADD FOLDERS FROM JSON
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

// MENU

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

// FOLDER
const titles = document.querySelectorAll(".title");

titles.forEach((title) => {
  title.addEventListener("click", (e) => {
    e.stopPropagation();
    const parent = title.parentElement;
    const subFolder = parent.querySelector(".sub-folder");

    if (subFolder) {
      const arrowSvg = parent.querySelector(".arrowSvg");

      if (subFolder.style.display === "block") {
        subFolder.style.display = "none";
        arrowSvg.style.transform = "none";
      } else {
        subFolder.style.display = "block";
        arrowSvg.style.transform = "rotate(90deg)";
      }
    } else {
      alert("Contents not found");
    }
  });
});

md("/data/welcome.md");

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

// RELOADER
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
