export class Carousel extends HTMLElement {
    constructor() {
        var _a, _b;
        super();
        const shadow = this.attachShadow({ mode: "closed" });
        shadow.append(Carousel.shadowTemplate.content.cloneNode(true));
        const current = shadow.getElementById("current");
        if (!(current instanceof HTMLImageElement))
            throw new Error("Element with id current is required to be an HTMLImageElement");
        this.currentImage = current;
        const prevImg = shadow.getElementById("prev");
        if (!(prevImg instanceof HTMLImageElement))
            throw new Error("Element with id prev is required to be an HTMLImageElement");
        this.prevImage = prevImg;
        const nextImg = shadow.getElementById("next");
        if (!(nextImg instanceof HTMLImageElement))
            throw new Error("Element with id next is required to be an HTMLImageElement");
        this.nextImage = nextImg;
        const slider = shadow.getElementById("slider");
        if (!(slider instanceof HTMLDivElement))
            throw new Error("Element with id slider is required to be an HTMLDivElement");
        this.slider = slider;
        this.imageUrlArray = [];
        const imageUrls = this.getAttribute("imageUrls");
        if (imageUrls)
            this.attributeChangedCallback("imageUrls", "", imageUrls);
        (_a = shadow
            .getElementById("nextBtn")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", this.handleNext.bind(this));
        (_b = shadow
            .getElementById("prevBtn")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", this.handlePrevious.bind(this));
    }
    handleNext() {
        if (this.slider.classList.contains("moveNext") || this.slider.classList.contains("movePrev"))
            return;
        this.slider.classList.add("moveNext");
        this.slider.addEventListener("animationend", () => {
            this.prevImage.src = this.currentImage.src;
            this.currentImage.src = this.nextImage.src;
            this.slider.classList.remove("moveNext");
            const currentIndex = this.imageUrlArray.indexOf(this.currentImage.src);
            this.nextImage.src = this.imageUrlArray[(currentIndex + 1) % this.imageUrlArray.length];
        }, { once: true });
    }
    handlePrevious() {
        if (this.slider.classList.contains("moveNext") || this.slider.classList.contains("movePrev"))
            return;
        this.slider.classList.add("movePrev");
        this.slider.addEventListener("animationend", () => {
            this.nextImage.src = this.currentImage.src;
            this.currentImage.src = this.prevImage.src;
            this.slider.classList.remove("movePrev");
            const currentIndex = this.imageUrlArray.indexOf(this.currentImage.src);
            this.prevImage.src = this.imageUrlArray[(currentIndex - 1) < 0 ? this.imageUrlArray.length - 1 : currentIndex - 1];
        }, { once: true });
    }
    /**Invoked each time the custom element is appended into a document-connected element.
     * This will happen each time the node is moved,
     * and may happen before the element's contents have been fully parsed. */
    connectedCallback() { }
    /** Invoked each time the custom element is disconnected from the document's DOM. */
    disconnectedCallback() { }
    /** Invoked each time the custom element is moved to a new document.*/
    adoptedCallback() { }
    /** Invoked each time one of the custom element's attributes is added, removed, or changed.
     * Which attributes to notice change for is specified in a static get observedAttributes method */
    attributeChangedCallback(name, oldValue, newValue) {
        switch (name) {
            case "imageUrls":
                const imageUrls = JSON.parse(newValue);
                if (!Array.isArray(imageUrls))
                    throw new Error("Invalid String passed in imageUrls Attribute. You need to pass a JSON string[]");
                this.imageUrlArray = imageUrls;
                this.currentImage.src = imageUrls[0];
                this.nextImage.src = imageUrls[1 % imageUrls.length];
                this.prevImage.src = imageUrls[imageUrls.length - 1];
                break;
        }
    }
    /** a static get observedAttributes() method inside custom element class - this should return  an array containing the names of the attributes you want to observe*/
    static get observedAttributes() {
        return ["imageUrls"];
    }
}
Carousel.shadowTemplate = (() => {
    const template = document.createElement("template");
    template.innerHTML = `
        <style>
        :host {
            display: block;
            position:relative;
            overflow: hidden;
            width:20em;
            height:20em;
        }

        img {
            width: calc(100% / 3);
            height: 100%;
            object-fit: cover;
        }

        input  {
            position: absolute;
            top: 0;
            bottom: 0;
            border: none;
            background: hsla(0, 0%, 50%, 0.5)
        }

        #prevBtn {
            left: 0;
        }

        #nextBtn {
            right: 0;
        }

        .movePrev {
            --translate: ;
            animation-duration: 1s;
            animation-name: movePrev;
            animation-fill-mode:forwards;
        }

        .moveNext {
            --translate: calc(-100% / 3);
            animation-duration: 1s;
            animation-name: moveNext;
            animation-fill-mode:forwards;
        }

        @keyframes moveNext {
            from {
                transform: translateX(0);
            }
            to {
                transform: translateX(calc(-100% / 3));
            }
        }
        @keyframes movePrev {
            from {
                transform: translateX(0);
            }
            to {
                transform: translateX(calc(100% / 3));
            }
        }

        #slider {
            position: absolute;
            top: 0;
            bottom: 0;
            left: -100%;
            right: -100%;
            display: flex;
            
        }
        </style> 
        <div id="slider">
          <img src="" alt="" srcset="" id="prev">
          <img src="" alt="" srcset="" id="current">
          <img src="" alt="" srcset="" id="next">
        </div>
        <input type="button" value="Previous" id="prevBtn">
        <input type="button" value="Next" id="nextBtn">
    `;
    return template;
})();
export function createImageCarousel(images) {
    if (!customElements.get("image-carousel"))
        customElements.define("image-carousel", Carousel);
    const carousel = document.createElement("image-carousel");
    carousel.setAttribute("imageUrls", JSON.stringify(images));
    return carousel;
}
if (!customElements.get("image-carousel"))
    customElements.define("image-carousel", Carousel);
