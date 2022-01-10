import React from "react";
import "./App.css";
import {BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavLink to="/">
          <h1>Black Sabbath</h1>
        </NavLink>
        <nav>
          <NavLink to="/vocals">vocals</NavLink>
          <NavLink to="/guitar">guitar</NavLink>
          <NavLink to="/bass">bass</NavLink>
          <NavLink to="/drums">drums</NavLink>
        </nav>
        <Routes>
          <Route
            path="/"
            element={
              <img
                src="https://images.kerrangcdn.com/black-sabbath-classic.jpg"
                alt="Black Sabbath"
              />
            }
          />
          <Route
            path="/vocals"
            element={
              <img
                src="http://brumbeat.net/tonyanddave.jpg"
                alt="Dave Walker"
              />
            }
          />
          <Route
            path="/guitar"
            element={
              <img
                src="https://garajedelrock.com/wp-content/uploads/2020/03/Tony-Iommi-1024x683.jpg"
                alt="Tony Iommi"
              />
            }
          />
          <Route
            path="/bass"
            element={
              <img
                src="https://www.rocks-magazin.de/sites/default/files/styles/header_gross_skaliert_489/public/articles/geezer-butler-black-sabbath-alamy-rocks-837x489px.jpg?itok=NzewQesO"
                alt="Geezer Butler"
              />
            }
          />
          <Route
            path="/drums"
            element={
              <img
                src="https://cdn.mos.cms.futurecdn.net/f0eea6c484f5b3086815b852325c100c-1200-80.jpg"
                alt="Bill Ward"
              />
            }
          />
          <Route path="/*" element={<p>Not found</p>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
