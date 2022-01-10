import React from "react";
import "./App.scss";
import Avatar from "./components/avatar/Avatar";

function App() {
  return (
    <div className="App">
      <Avatar src="https://picsum.photos/400/400" />
      <Avatar src="https://picsum.photos/400/400" size="s" type="circle" />
      <Avatar src="https://picsum.photos/400/400" size="m" type="circle" />
      <Avatar src="https://picsum.photos/400/400" size="l" type="circle" />
      <Avatar src="https://picsum.photos/400/400" size="xl" type="circle" />

      <Avatar src="https://picsum.photos/400/400" size="s" type="rounded" />
      <Avatar src="https://picsum.photos/400/400" size="m" type="rounded" />
      <Avatar src="https://picsum.photos/400/400" size="l" type="rounded" />
      <Avatar src="https://picsum.photos/400/400" size="xl" type="rounded" />

      <Avatar src="https://picsum.photos/400/400" size="s" type="square" />
      <Avatar src="https://picsum.photos/400/400" size="m" type="square" />
      <Avatar src="https://picsum.photos/400/400" size="l" type="square" />
      <Avatar src="https://picsum.photos/400/400" size="xl" type="square" />

    </div>
  );
}

export default App;
