customElements.define(
  "newsletter-popup",
  class extends HTMLElement {
    constructor() {
      super();
      const template = document
        .getElementById("newsletter-popup")
        ?.cloneNode(true);
      if (!template)
        throw new Error("Unable to find newsletter-popup template");
      if (!(template instanceof HTMLTemplateElement))
        throw new Error(
          "UElement with ID newsletter-popup is not a HTML Template Element"
        );

      const shadow = this.attachShadow({ mode: "closed" });
      shadow.append(template.content);

      shadow
        .getElementById("close")
        ?.addEventListener("click", this.handleClose.bind(this));
      shadow
        .getElementById("form")
        ?.addEventListener("submit", this.handleSubmit.bind(this));
      shadow
        .getElementById("email")
        ?.addEventListener("input", this.handleInput.bind(this));

    }


    private email: undefined | string;

    handleInput(e: Event) {
      if (!(e.target instanceof HTMLInputElement)) return;
      this.email = e.target.value;
    }

    handleClose(e: Event) {
      this.remove();
    }

    handleSubmit(e: Event) {
      e.preventDefault();
      console.log(this.email);
      this.handleClose(e)
    }
  }
);
