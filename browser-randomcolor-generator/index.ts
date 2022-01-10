const colorCardTemplate = queryElementWithTypeFrom(document, "#colorCardTemplate", HTMLTemplateElement)

const form = queryElementWithTypeFrom(document, "form", HTMLFormElement)

const colorCards = queryElementWithTypeFrom(document, "#colorCards", HTMLElement)

form.onsubmit = (e) => {
  e.preventDefault();

  for (let i = 0; i < parseInt(form["colorCardAmount"].value); i++) {
    const card = colorCardTemplate.content.firstElementChild?.cloneNode(true);
    if (!card) throw new Error("colorCardTemplate has no Element inside");
    if (!(card instanceof HTMLElement))
      throw new Error("firtElementChild is no HTMLElement");

    const controller = new AbortController();
    card.onclick = () => controller.abort();

    const color = generateRandomColor();

    card.style.backgroundColor = color;

    const colorValue = queryElementWithTypeFrom(card, ".colorValue", HTMLParagraphElement);
    colorValue.innerText = color;

    const removeBtn = queryElementWithTypeFrom(card, ".removeBtn", HTMLInputElement);

    removeBtn.addEventListener(
      "click",
      () => {
        card.remove();
      },
      { signal: controller.signal }
    );

    colorCards.append(card);
  }
};

function generateRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

  return `#${r.toString(16).padStart(2, "0")}${g
    .toString(16)
    .padStart(2, "0")}${b.toString(16).padStart(2, "0")}`;
}

function queryElementWithTypeFrom<
  T extends Element,
  E extends Element | Document | DocumentFragment
>(from: E, query: string, type: { new (): T }) {
  const el = from.querySelector<T>(query);
  if (!el)
    throw new Error(
      `Unable to find any elements matching the provided query '${query}' within ${from}'`
    );
  if (!(el instanceof type))
    throw new Error(
      `Element querried with '${query}' is of type ${el.constructor.name} but should be of type ${type.name}`
    );
  return el;
}
