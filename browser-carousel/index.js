import { Carousel } from "./carousel.js";
const images = [
    "https://picsum.photos/id/237/200/400",
    "https://picsum.photos/id/1/300/300",
    "https://picsum.photos/id/122/400/400",
    "https://picsum.photos/id/165/600/600",
    "https://picsum.photos/id/248/700/300",
    "https://picsum.photos/id/235/200/300",
    "https://picsum.photos/id/225/100/300",
    "https://picsum.photos/id/238/250/300",
    "https://picsum.photos/id/236/300/300",
];
function defineCustomElements() {
    if (!customElements.get("image-carousel"))
        customElements.define("image-carousel", Carousel);
}
defineCustomElements();
