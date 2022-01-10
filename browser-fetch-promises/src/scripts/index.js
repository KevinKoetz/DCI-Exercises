"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// The following line makes sure your styles are included in the project. Don't remove this.
require("../styles/main.scss");
// Import any additional modules you want to include below \/
// \/ All of your javascript should go here \/
var modalPromise = new Promise(function (resolve, reject) {
    setTimeout(function () { return resolve(true); }, 60000);
});
modalPromise.then(function () {
    var _a, _b;
    var styleSheet = Array.from(document.styleSheets).find(function (sheet) { var _a; return (_a = sheet.href) === null || _a === void 0 ? void 0 : _a.includes("main.css"); });
    if (!styleSheet)
        throw new Error("StyleSheet not found");
    var modalRule = Array.from(styleSheet.cssRules).find(function (rule) {
        if (rule instanceof CSSStyleRule && rule.selectorText === ".modal")
            return true;
        return false;
    });
    if (!(modalRule && modalRule instanceof CSSStyleRule))
        throw new Error("modalRule not found or rule is no CSSStyleRule");
    modalRule.style.display = "block";
    (_b = (_a = document
        .getElementById("myModal")) === null || _a === void 0 ? void 0 : _a.querySelector(".close")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", function () {
        modalRule.style.display = "none";
    });
});
