import React from "react";
import "./App.css";
import User from "./components/User";
import Navbar from "./components/Navbar";

interface IUser {
  firstName: string;
  avatarUrl: string;
}

interface IAppState {
  userA: IUser;
  userB: IUser;
  clickCount: number;
  backColor: string;
  bootcamp: string;
}

class App extends React.Component<{}, IAppState> {
  state = {
    userA: {
      firstName: "Harper",
      avatarUrl:
        "https://www.refreshmiami.com/wp-content/uploads/2018/07/55085_logo-ironhack.png",
    },
    userB: {
      firstName: "Ana",
      avatarUrl:
        "https://s3.amazonaws.com/owler-image/logo/ironhack_owler_20180828_221413_original.png",
    },
    clickCount: 0,
    backColor: "yellow",
    bootcamp: "Ironhack",
  };

  colorMapper = () => {
    const hexColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    return hexColor;
  };

  clickHandler = () => {

    if ((this.state.clickCount + 1) % 5 === 0)
      this.setState({ backColor: this.colorMapper() });

    this.setState(({ clickCount }) => {
      return { clickCount: clickCount + 1 };
    });
    
  };

  render() {
    return (
      <div className="App" style={{ backgroundColor: this.state.backColor }}>
        <Navbar></Navbar>
        <h1>React - state</h1>
        <p>Count is: {this.state.clickCount}</p>
        <button onClick={this.clickHandler}> Click me </button>
        <User bootcamp={this.state.bootcamp}></User>
      </div>
    );
  }
}

export default App;
