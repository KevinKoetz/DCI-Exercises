const h1 = document.querySelector("h1");
const header = h1?.closest("header");
if (header) {
  header.style.border = "5px solid black";
}

const allInfoSections = document.querySelectorAll<HTMLElement>(".info");
const infoSectionsContainingPackage = Array.from(allInfoSections).filter(
  (section) => section.querySelector(".info-package")
);
const packageTitles = infoSectionsContainingPackage.flatMap((section) =>
  Array.from(section.querySelectorAll<HTMLElement>(".package-title"))
);
packageTitles.forEach((title) => {
  const previousElement = title.previousElementSibling;
  if (!previousElement) return;
  if (!(previousElement instanceof HTMLElement)) return;
  previousElement.style.border = "2px solid red";
});

const allLabels = infoSectionsContainingPackage.flatMap((section) =>
Array.from(section.querySelectorAll<HTMLElement>("label"))
);
allLabels.forEach(label => {
    if(label.classList.contains("mild")) label.style.border = "2px solid yellow"
    if(label.classList.contains("intense")) label.style.border = "2px solid orange"
    if(!label.classList.contains("mild") && !label.classList.contains("intense")) label.style.border = "2px solid red"
})

const navList = document.body.querySelector(".nav-list")
const navListChildren = Array.from(navList ? navList.children : [])
const siteMap = document.body.querySelector(".site-map")
navListChildren.forEach(child => siteMap?.append(child.cloneNode(true)))