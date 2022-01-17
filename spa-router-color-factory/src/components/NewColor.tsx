import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ColorsContext } from "./Context";

function NewColor() {
  const { colors, setColors } = useContext(ColorsContext);
  const [name, setName] = useState("");
  const [rgbValue, setRgbValue] = useState("#000000");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const colorIndex = colors.findIndex((color) => color.name === name);

    if(colorIndex !== -1){
        const newColors = colors.map((color, index) =>
        index === colorIndex ? { name, rgbValue } : color
      )    
        setColors(newColors)
    }else {
        const newColors = [...colors, {name, rgbValue}]
        console.log("NewColors: ", newColors);
        setColors(newColors);
    }
    navigate("/colors");
  };
  return (
    <div className="NewColor">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="colorName">Name:</label>
          <input
            type="text"
            name="colorName"
            id="colorName"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="colorValue">Color:</label>
          <input
            type="color"
            name="colorValue"
            id="colorValue"
            required
            value={rgbValue}
            onChange={(e) => setRgbValue(e.target.value)}
          />
        </div>
        <input type="submit" value="Add Color" />
      </form>
    </div>
  );
}

export default NewColor;
