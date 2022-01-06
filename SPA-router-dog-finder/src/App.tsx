import React from "react";
import "./App.css";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Dogs from "./components/Dogs/Dogs";
import hazel from "./images/hazel.jpg";
import tubby from "./images/tubby.jpg";
import whiskey from "./images/whiskey.jpg";

const dogInfos = [
  {
    name: "Whiskey",
    imageUrl: whiskey,
    age: 4,
    traits: ["Whiskey loves eating Popcorn.", "Whiskey wants to cuddle with you.", "Whiskey is a terrible guard Dog."],
  },
  {
    name: "Hazel",
    imageUrl: hazel,
    age: 0,
    traits: ["Hazel has sooooo much energy.", "Hazel is highly intelligent.", "Hazel loves people more than dogs."],
  },
  {
    name: "Tubby",
    imageUrl: tubby,
    age: 3,
    traits: ["Tubby is really stupid","Tubby does not like walks", "Angelina hates Tubby"],
  },
];

function App() {
  return (
    <div className="App">
      <h1>HELLOZ. WE HAVE DOGZ. CLICK ON THEM FOR MORE INFO.</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/dogs" />} />
          <Route path="*" element={<Navigate to="/dogs" />} />
          <Route path="/dogs" element={<Dogs dogInfos={dogInfos} />}>
            <Route path=":name" element={null}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
