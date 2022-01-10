"use strict";
const wrapper = document.getElementById("wrapper");
Array.from(wrapper ? wrapper.children : []).forEach((item) => {
    console.log(item.tagName, ` Childrencount: ${item.children.length}`);
    Array.from(item.children).forEach((child) => console.log(`  ${child.tagName}`));
});
function getChildWithMostClasses(element) {
    if (element.children.length === 0)
        return null;
    let child = Array.from(element.children).reduce((prev, cur) => cur.classList.length > prev.classList.length ? cur : prev);
    return { child, numClasses: child.classList.length };
}
console.log(getChildWithMostClasses(wrapper ? wrapper : new HTMLElement()));
