import React from "react"; //Main React.js library
import ReactDOM from "react-dom"; //we use ReactDOM to render into the DOM

// only update the value of this array
class Link {
  constructor(href, text) {
    this.href = href;
    this.text = text;
  }
  href;
  text;
}
const navlinkItems = [
  new Link("https://www.google.de/", "Link to Google"),
  new Link("https://www.facebook.com/", "Link to Facebook"),
  new Link("https://www.amazon.de//", "Link to Amazon"),
];

const content = (
  <ul className="nav">
    {navlinkItems.map((link) => (
      <li class="nav-item">
        <a class="nav-link" href={link.href}>
          {link.text}
        </a>
      </li>
    ))}
  </ul>
);

ReactDOM.render(content, document.querySelector("#root"));
