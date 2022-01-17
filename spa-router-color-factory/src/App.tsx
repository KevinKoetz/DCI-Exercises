import React, {useContext, useEffect } from "react";
import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Color from "./components/Color";
import NewColor from "./components/NewColor";
import { ColorsContext } from "./components/Context";



function App() {

  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route path="/colors" element={<Home />} />
            <Route path="/colors/new" element={<NewColor />} />
            <Route path="/colors/:name" element={<Color />} />
            <Route path="*" element={<Navigate replace={true} to="/colors" />} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
