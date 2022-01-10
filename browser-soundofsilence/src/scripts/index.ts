// The following line makes sure your styles are included in the project. Don't remove this.
import { data } from "autoprefixer";
import "../styles/main.scss";
// Import any additional modules you want to include below \/

// \/ All of your javascript should go here \/

type APIResponse = {
  pagination: {
    page: number;
    pages: number;
    per_page: number;
    items: number;
    urls: { last: string; next: string };
  };
  results: {
    country: string;
    cover_image: string;
    title: string;
    year: string;
  }[];
};

async function getData(query = "", page = 1, perPageCount = 5) {
  const token = "dACjywaAmnbEXUxYorujSCBUKfeKnNigdXufKqqt";
  const response = await fetch(
    `https://api.discogs.com/database/search?q=${query}&type=release&per_page=${perPageCount}&page=${page}&token=${token}`
  );
  const data = await response.json();
  console.log(data);
  return data as APIResponse;
}

async function renderData(query = "") {
  const songs = document.querySelector("#songs");
  if (!(songs && songs instanceof HTMLUListElement))
    throw new Error("Songs is not a HTMLUListElement");
  songs.innerHTML = "";

  const template = document.querySelector("#releaseInfoTemplate");
  if (!(template && template instanceof HTMLTemplateElement))
    throw new Error("Template not found");
  const data = (await getData(query));

  data.results.forEach((release) => {
    const releaseInfo = template.content.querySelector("li")?.cloneNode(true);
    if (!(releaseInfo instanceof HTMLElement))
      throw new Error("firstElementChild of Template is not an HTMLElement");

    const img = releaseInfo.querySelector(".albumImg");
    if (!(img instanceof HTMLImageElement))
      throw new Error("img not HTMLImageElement");
    img.src = release.cover_image;

    const title = releaseInfo.querySelector(".title");
    if (!(title instanceof HTMLSpanElement))
      throw new Error("title not HTMLSpanElement");
    title.innerText = release.title;

    const releaseYear = releaseInfo.querySelector(".releaseYear");
    if (!(releaseYear instanceof HTMLSpanElement))
      throw new Error("title not HTMLSpanElement");
    releaseYear.innerText = release.year;

    songs.append(releaseInfo)
  });
}

document.body.onload = () => renderData();

const form = document.body.querySelector("form");
if (!(form instanceof HTMLFormElement))
  throw new Error("form not found on page");
form.onsubmit = (ev) => {
  ev.preventDefault();
  if (ev.currentTarget instanceof HTMLFormElement){
    renderData(ev.currentTarget["filterString"].value);
  }
};
