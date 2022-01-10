"use strict";
customElements.define("newsletter-popup", class extends HTMLElement {
    constructor() {
        var _a, _b, _c, _d;
        super();
        const template = (_a = document
            .getElementById("newsletter-popup")) === null || _a === void 0 ? void 0 : _a.cloneNode(true);
        if (!template)
            throw new Error("Unable to find newsletter-popup template");
        if (!(template instanceof HTMLTemplateElement))
            throw new Error("UElement with ID newsletter-popup is not a HTML Template Element");
        const shadow = this.attachShadow({ mode: "closed" });
        shadow.append(template.content);
        (_b = shadow
            .getElementById("close")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", this.handleClose.bind(this));
        (_c = shadow
            .getElementById("form")) === null || _c === void 0 ? void 0 : _c.addEventListener("submit", this.handleSubmit.bind(this));
        (_d = shadow
            .getElementById("email")) === null || _d === void 0 ? void 0 : _d.addEventListener("input", this.handleInput.bind(this));
    }
    handleInput(e) {
        if (!(e.target instanceof HTMLInputElement))
            return;
        this.email = e.target.value;
    }
    handleClose(e) {
        this.remove();
    }
    handleSubmit(e) {
        e.preventDefault();
        console.log(this.email);
        this.handleClose(e);
    }
});
