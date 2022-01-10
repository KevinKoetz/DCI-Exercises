"use strict";
const handleMouseIn = {
    mouseEnterY: null,
    handleEvent(e) {
        var _a, _b;
        if (!(e.type === "mousemove")) {
            (_a = e.currentTarget) === null || _a === void 0 ? void 0 : _a.removeEventListener(e.type, this);
        }
        if (this.mouseEnterY === null)
            this.mouseEnterY = e.clientY;
        if (e.clientY - this.mouseEnterY > 10 || this.mouseEnterY + 10 > window.innerHeight) {
            document.body.append(document.createElement("newsletter-popup"));
            (_b = e.currentTarget) === null || _b === void 0 ? void 0 : _b.removeEventListener(e.type, this);
        }
        console.log("innerHeight", window.innerHeight);
        console.log("mouseEnterY", this.mouseEnterY);
    }
};
window.addEventListener("mousemove", handleMouseIn);
