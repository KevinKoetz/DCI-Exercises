type Owner = {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  received_events_url: string;
  type: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  site_admin: boolean;
};

type License = {
  key: string;
  name: string;
  url: string;
  spdx_id: string;
  node_id: string;
  html_url: string;
};

type Repository = {
  id: number;
  node_id: string;
  name: string;
  full_name: string;
  owner: Owner;
  private: boolean;
  html_url: string;
  description: string;
  fork: boolean;
  url: string;
  created_at: string;
  updated_at: string;
  pushed_at: string;
  homepage: string;
  size: number;
  stargazers_count: number;
  watchers_count: number;
  language: string;
  forks_count: number;
  open_issues_count: number;
  master_branch: string;
  default_branch: string;
  score: number;
  archive_url: string;
  assignees_url: string;
  blobs_url: string;
  branches_url: string;
  collaborators_url: string;
  comments_url: string;
  commits_url: string;
  compare_url: string;
  contents_url: string;
  contributors_url: string;
  deployments_url: string;
  downloads_url: string;
  events_url: string;
  forks_url: string;
  git_commits_url: string;
  git_refs_url: string;
  git_tags_url: string;
  git_url: string;
  issue_comment_url: string;
  issue_events_url: string;
  issues_url: string;
  keys_url: string;
  labels_url: string;
  languages_url: string;
  merges_url: string;
  milestones_url: string;
  notifications_url: string;
  pulls_url: string;
  releases_url: string;
  ssh_url: string;
  stargazers_url: string;
  statuses_url: string;
  subscribers_url: string;
  subscription_url: string;
  tags_url: string;
  teams_url: string;
  trees_url: string;
  clone_url: string;
  mirror_url: string;
  hooks_url: string;
  svn_url: string;
  forks: number;
  open_issues: number;
  watchers: number;
  has_issues: boolean;
  has_projects: boolean;
  has_pages: boolean;
  has_wiki: boolean;
  has_downloads: boolean;
  archived: boolean;
  disabled: boolean;
  visibility: string;
  license: License;
};

type SearchRepositoriesResponse =
  | {
      total_count: number;
      incomplete_results: boolean;
      items: Repository[];
    }
  | {
      message: "Validation Failed";
      errors: [
        {
          message: "The listed users and repositories cannot be searched either because the resources do not exist or you do not have permission to view them.";
          resource: "Search";
          field: "q";
          code: "invalid";
        }
      ];
      documentation_url: "https://docs.github.com/v3/search/";
    };

customElements.define(
  "github-username-widget",
  class GithubUserNameWidget extends HTMLElement {
    constructor() {
      super();
      this._shadow = this.attachShadow({ mode: "open" });
      this._shadow.append(GithubUserNameWidget.shadowContent);
      this._shadow.querySelector("form")?.addEventListener("submit", this.handleSubmit.bind(this))
    }

    async handleSubmit(e: Event) {
      e.preventDefault();
      if (!(e.currentTarget instanceof HTMLFormElement))
        throw new Error("handleSubmit supposed to be attached to Form Element");

      const name =
        e.currentTarget.querySelector<HTMLInputElement>(".nameInput")?.value;

      if (!name) throw new Error("Form was submitted without a name");

      const repositoriesForName = await GithubUserNameWidget.getRepositoriesForUser(
        name
      );

      const repositoryLis = repositoriesForName.map((repository) =>
        GithubUserNameWidget.createRepositoryLi(
          repository.html_url,
          repository.name,
          repository.description,
          repository.created_at
        )
      );

      this._shadow.append(...repositoryLis)
      
    }

    private _shadow;

    static async getRepositoriesForUser(username: string) {
      const url = `https://api.github.com/search/repositories?q=user%3A${username}`;
      try {
        const response = await fetch(url);
        const data: SearchRepositoriesResponse = await response.json();
        console.log(data);
        if ("items" in data) {
          return data.items;
        } else {
          return [];
        }
      } catch (error) {
        return [];
      }
    }

    static createRepositoryLi(
      link: string,
      name: string,
      description: string,
      created_at: string
    ) {
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
      if(!template.content.firstElementChild) throw new Error("Should never happen")
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
  }
);
