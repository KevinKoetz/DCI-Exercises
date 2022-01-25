import React, { useReducer } from "react";
import "./App.css";
import Boat from "./Boat";

//Typescript
export interface BoatState {
  isStarted: boolean;
  speed: number;
  gear: number;
}

type BoatActions =
  | { type: "start" }
  | { type: "stop" }
  | { type: "gearUp" }
  | { type: "gearDown" }
  | { type: "increaseSpeed" }
  | { type: "decreaseSpeed" };

//Typescript

const initialBoatState = {
  isStarted: false,
  gear: 0,
  speed: 0,
};

/**
 Actions for Reducer:
 {type: "start"}
 {type: "stop"}
 {type: "gearUp"} 
 {type: "gearDown"}
 {type: "increaseSpeed"} 
 {type: "decreaseSpeed"} 
 */
const reducer: React.Reducer<BoatState, BoatActions> = (state, action) => {
  switch (action.type) {
    case "start":
      return { ...state, isStarted: state.isStarted || Math.random() < 0.5 };
    case "stop":
      return { ...state, isStarted: false, gear: 0 };
    case "gearUp":
      return {
        ...state,
        gear: state.isStarted ? (state.gear >= 5 ? 5 : state.gear + 1) : 0,
      };
    case "gearDown":
      return {
        ...state,
        gear: state.isStarted ? (state.gear <= -2 ? -2 : state.gear - 1) : 0,
      };
    case "increaseSpeed":
      return {
        ...state,
        speed: state.isStarted ? state.speed + state.gear : state.speed,
      };
    case "decreaseSpeed":
      return {
        ...state,
        speed: state.isStarted ? state.speed - state.gear : state.speed,
      };
    default:
      return state;
  }
};

function App() {
  const [boatState, dispatch] = useReducer(reducer, initialBoatState);
  return (
    <div className="App">
      <Boat {...boatState} />
      <div>
        <input
          type="button"
          value="Start"
          onClick={() => dispatch({ type: "start" })}
        />
        <input
          type="button"
          value="Stop"
          onClick={() => dispatch({ type: "stop" })}
        />
        <input
          type="button"
          value="Gear Up"
          onClick={() => dispatch({ type: "gearUp" })}
        />
        <input
          type="button"
          value="Gear Down"
          onClick={() => dispatch({ type: "gearDown" })}
        />
        <input
          type="button"
          value="Increase Speed"
          onClick={() => dispatch({ type: "increaseSpeed" })}
        />
        <input
          type="button"
          value="Decrease Speed"
          onClick={() => dispatch({ type: "decreaseSpeed" })}
        />
      </div>
    </div>
  );
}

export default App;
