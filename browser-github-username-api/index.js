"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
customElements.define("github-username-widget", class GithubUserNameWidget extends HTMLElement {
    constructor() {
        var _a;
        super();
        this._shadow = this.attachShadow({ mode: "open" });
        this._shadow.append(GithubUserNameWidget.shadowContent);
        (_a = this._shadow.querySelector("form")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", this.handleSubmit.bind(this));
    }
    handleSubmit(e) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            e.preventDefault();
            if (!(e.currentTarget instanceof HTMLFormElement))
                throw new Error("handleSubmit supposed to be attached to Form Element");
            const name = (_a = e.currentTarget.querySelector(".nameInput")) === null || _a === void 0 ? void 0 : _a.value;
            if (!name)
                throw new Error("Form was submitted without a name");
            const repositoriesForName = yield GithubUserNameWidget.getRepositoriesForUser(name);
            const repositoryLis = repositoriesForName.map((repository) => GithubUserNameWidget.createRepositoryLi(repository.html_url, repository.name, repository.description, repository.created_at));
            this._shadow.append(...repositoryLis);
        });
    }
    static getRepositoriesForUser(username) {
        return __awaiter(this, void 0, void 0, function* () {
            const url = `https://api.github.com/search/repositories?q=user%3A${username}`;
            try {
                const response = yield fetch(url);
                const data = yield response.json();
                console.log(data);
                if ("items" in data) {
                    return data.items;
                }
                else {
                    return [];
                }
            }
            catch (error) {
                return [];
            }
        });
    }
    static createRepositoryLi(link, name, description, created_at) {
        const template = document.createElement("template");
        template.innerHTML = `
      <li class="repository">
        <a href="${link}">
          <div>
            <h3 class="name">${name}</h3>
            <p class="description">${description}</p>
          </div>
          <div class="creation">
          ${created_at}
          </div>
        </a>
      </li>
      `;
        if (!template.content.firstElementChild)
            throw new Error("Should never happen");
        return template.content.firstElementChild;
    }
    static get shadowContent() {
        const template = document.createElement("template");
        template.innerHTML = `
      <h2>Github Username Widget</h2>
      <form>
        <input type="text" required class="nameInput"/>
        <input type="submit" class="btn btn-primary" />
      </form>
      <ul class="repositories">
      </ul>
      `;
        return template.content;
    }
});
