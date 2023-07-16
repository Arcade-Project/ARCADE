const info = document.querySelector("info-b");
const infoTitle = document.querySelector(".info-title");
const infoD = document.getElementById("info");
const text = document.querySelector("#text");

let isDisplayed = true;

info.addEventListener("click", () => {
  if (isDisplayed) {
    infoTitle.style.visibility = "hidden";
    info.style.height = "25px";
    info.style.padding = "10px";
    info.style.width = "25px";
    infoD.style.marginBottom = "0";
    infoD.style.flexDirection = "column";
    text.style.display = "none";
    isDisplayed = false;
  } else {
    infoTitle.style.visibility = "visible";
    info.style.height = "max-content";
    info.style.padding = "10px 10px 10px 15px";
    info.style.width = "180px";
    infoD.style.marginBottom = "5px";
    infoD.style.flexDirection = "row";
    text.style.display = "block";
    isDisplayed = true;
  }
});
