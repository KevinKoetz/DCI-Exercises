import React from "react";
import "./Stamp.scss";

export default function AdressLabel({ className }) {
  return <div className={className ? className + " stamp" : "stamp"}>STAMP</div>;
}
