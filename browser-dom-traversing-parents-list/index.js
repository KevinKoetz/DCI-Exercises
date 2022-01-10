"use strict";
{
    const cite = document.querySelector("cite");
    let parent = cite === null || cite === void 0 ? void 0 : cite.parentElement;
    let parentPath = getElementNameWithClasses(parent) + " > " + getElementNameWithClasses(cite);
    while ((parent === null || parent === void 0 ? void 0 : parent.tagName.toLowerCase()) !== "html") {
        parent = parent === null || parent === void 0 ? void 0 : parent.parentElement;
        parentPath = getElementNameWithClasses(parent) + " > " + parentPath;
    }
    function getElementNameWithClasses(element) {
        if (!element)
            return "";
        const classes = Array.from(element.classList).join(".");
        return (element.tagName + (classes.length > 0 ? "." + classes : "")).toLowerCase();
    }
    console.log(parentPath);
}
