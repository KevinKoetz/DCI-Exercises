import React from "react";
import { BoatState } from "./App";
import "./Boat.css";

function Boat({ isStarted, speed, gear }: BoatState) {
  return (
    <>
      <div
        className="Boat"
        style={{ animationDuration: String(10/speed)+"s" }}
      ></div>
      <div>
        isStarted: {String(isStarted)}, 
        speed: {String(speed)}, 
        gear: {String(gear)}, 
      </div>
    </>
  );
}

export default Boat;
