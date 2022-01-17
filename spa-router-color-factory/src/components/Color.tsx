import React, { useContext } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { ColorsContext } from "./Context";
import colorLib from "color"

function Color() {
    const {name} = useParams();
    const {colors} = useContext(ColorsContext)
    const color = colors.find((color) => color.name === name)
    
  return (
    <div className="Color" style={{width: "100%", height: "100%", backgroundColor: color?.rgbValue, color: colorLib(color?.rgbValue).isLight() ? "black" : "white"}}>
        <p>This is {name}</p>
        <p>Isn't it beautiful?!?</p>
        <Link to="/colors">Back</Link>
        {color && name ? null : <Navigate to="/colors" />}
    </div>
  );
}

export default Color;
