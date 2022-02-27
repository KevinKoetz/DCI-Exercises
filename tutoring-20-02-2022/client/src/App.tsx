import React, { useState } from "react";
import logo from "./logo.svg";
import axios from "axios";
import "./App.css";

function App() {
  const [response, setResponse] = useState("");
  const [responseAx, setResponseAx] = useState("");

  const handleClickFetch = async () => {
    const response = await fetch("/api/hello");
    console.log(response.status);
    const body = await response.json();
    setResponse(body.text);
  };

  const handleClickAxios = async () => {
    try {
      const body = await axios.get("/api/hello");
      setResponseAx(body.data.text);
    } catch (error) {
      console.log(error);
    }
  };

  const handleCreateAxios = async () => {
    const response = await axios.post("/api/users", {
      username: "Axios",
      password: "dwadwa",
    });
    console.log("Axios response:", response);
  };

  const handleCreateFetch = async () => {
    const response = await fetch("/api/users", {
      method: "POST",
      body: JSON.stringify({
        username: "Fetch",
        password: "dwadwa",
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log("Fetch response: ", response);
    console.log("Fetch body:", await response.json());
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Requested with Fetch: {response}</h1>
        <h1>Requested with Axios: {responseAx}</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <button onClick={handleClickFetch}>get with fetch</button>
        <button onClick={handleClickAxios}>get with axios</button>
        <button onClick={handleCreateFetch}>post with fetch</button>
        <button onClick={handleCreateAxios}>post with axios</button>
      </header>
    </div>
  );
}

export default App;
