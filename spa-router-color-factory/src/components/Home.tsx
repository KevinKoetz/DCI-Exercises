import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { ColorsContext } from "./Context";

function Home() {
  const { colors } = useContext(ColorsContext);
  useEffect(() => {
      console.log(colors);
  }, [colors])
  return (
    <div className="Home">
      <header>
        <h1>Welcome to the color factory</h1>
        <Link to="/colors/new">
          <h2>Add a color</h2>
        </Link>
      </header>
      <main>
        <ul aria-label="colors">
          {[...colors].reverse().map((color, idx) => (
            <li key={idx} aria-label="color">
              <Link to={`/colors/${color.name}`}>{color.name}</Link>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}

export default Home;
