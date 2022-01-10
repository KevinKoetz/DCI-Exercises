"use strict";
document.body.style.fontFamily = "arial";
const h1 = document.querySelector("h1");
if (h1)
    h1.style.textAlign = "center";
const menuHeadings = document.querySelectorAll(".category");
menuHeadings.forEach((item) => {
    item.style.color = "crimson";
    item.style.fontStyle = "italic";
});
function generateRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    const a = (Math.random() * 0.5 + 0.5).toFixed(2);
    return `rgba(${r},${g},${b},${a})`;
}
const foodCategory = document.querySelectorAll(".food-category");
foodCategory.forEach((item) => {
    item.style.backgroundColor = generateRandomColor();
    item.style.minWidth = "15em";
});
const main = document.querySelector("main");
if (main) {
    main.style.display = "flex";
    main.style.flexWrap = "wrap";
    main.style.justifyContent = "space-between";
}
const warning = document.getElementById("warning");
if (warning) {
    warning.style.fontSize = "2em";
    warning.style.fontFamily = "monospace";
}
const allergyInfos = document.querySelectorAll(".allergy-info");
allergyInfos.forEach((item, index) => {
    item.style.backgroundColor =
        index % 2 === 1 ? "lightblue" : item.style.backgroundColor;
    item.style.minWidth = "15em";
    item.style.listStyleType = "none";
});
const allergyWarning = document.querySelector(".allergy-warning");
if (allergyWarning) {
    allergyWarning.style.display = "flex";
    allergyWarning.style.flexDirection = "column";
    allergyWarning.style.alignItems = "center";
}
const foodDescs = document.querySelectorAll(".food-desc");
foodDescs.forEach((item) => {
    item.style.border = "4px solid orange";
    item.style.borderRadius = "50%";
    item.style.minWidth = "8em";
    item.style.minHeight = "8em";
    item.style.display = "grid";
    item.style.placeContent = "center";
    item.style.margin = "2em";
});
const footer = document.querySelector(".footer");
if (footer) {
    footer.style.display = "flex";
    footer.style.flexWrap = "wrap";
    footer.style.justifyContent = "center";
}
