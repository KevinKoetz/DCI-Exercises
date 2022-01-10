"use strict";
customElements.define("calculator-line", class extends HTMLElement {
    constructor() {
        var _a, _b, _c;
        super();
        const template = document.getElementById("simpleCalculatorLine");
        if (!template)
            throw new Error("Can not find Template for Element");
        if (!(template instanceof HTMLTemplateElement))
            throw new Error("Selected Element is not a template element");
        const operatorValue = this.getAttribute("operator");
        if (!(operatorValue === "+" ||
            operatorValue === "-" ||
            operatorValue === "*" ||
            operatorValue === "/" ||
            operatorValue === "%")) {
            this.innerHTML =
                "<div style='color: red;'>Element Attribute 'operator' needs to be set to one of + , - , * , / or %</div>";
            throw new Error("Operator needs to be one of + , - , * , / or %");
        }
        this.attachShadow({ mode: "open" }).appendChild(template.content.cloneNode(true));
        this.operator = operatorValue;
        const operator = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.getElementById("operator");
        if (!operator)
            throw new Error("Unable to find first Operator.");
        operator.innerText = operatorValue;
        this.a = null;
        this.b = null;
        const a = (_b = this.shadowRoot) === null || _b === void 0 ? void 0 : _b.getElementById("a");
        if (!a)
            throw new Error("Unable to find first Operand.");
        a.oninput = this.handleInput.bind(this, "a");
        const b = (_c = this.shadowRoot) === null || _c === void 0 ? void 0 : _c.getElementById("b");
        if (!b)
            throw new Error("Unable to find first Operand.");
        b.oninput = this.handleInput.bind(this, "b");
    }
    set result(res) {
        var _a;
        const result = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.getElementById("result");
        if (!result)
            throw new Error("Unable to find Result Element");
        if (!(result instanceof HTMLInputElement))
            throw new Error("Result Element is not of Type Input");
        result.value = String(res);
    }
    handleInput(operand, e) {
        if (!e.target)
            throw new Error("Handler should only be used on EventTargets");
        if (!(e.target instanceof HTMLInputElement))
            throw new Error("Handler should only be used on HTMLInputElements");
        this[operand] = Number(e.target.value);
        this.evaluateResult();
    }
    evaluateResult() {
        console.log("eval");
        if (this.a === null || this.b === null)
            return;
        switch (this.operator) {
            case "%":
                this.result = this.a % this.b;
                break;
            case "+":
                this.result = this.a + this.b;
                break;
            case "-":
                this.result = this.a - this.b;
                break;
            case "*":
                this.result = this.a * this.b;
                break;
            case "/":
                this.result = this.a / this.b;
                break;
        }
    }
});
