import React from "react";

interface INavbarState {
    username: string;
}

class Navbar extends React.Component<{},INavbarState> {
    state = {
        username: "Your Name"
    }
  render() {
    return (
      <nav id="navbar">
        <ul>
          <a href="#">
            <li>Home</li>
          </a>
          <a href="#">
            <li>Contact</li>
          </a>
          <a href="#">
            <li>About</li>
          </a>
        </ul>

        <div className="nav-details">
          <p className="nav-username"> {this.state.username} </p>
        </div>
      </nav>
    );
  }
}

export default Navbar;
