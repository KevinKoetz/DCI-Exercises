import React from "react";
import "./AddressLabel.scss"

export default function Addresslabel({
  title,
  name,
  street,
  city,
  state,
  postCode,
  className
}) {
  return (
    <div className={className ? className + " addressLabel": "addressLabel"}>
      <div className="nameLine">
        <span className="title">{title}</span>
        <span className="name">{name}</span>
      </div>
      <div className="streetLine">
        <span className="street">{street}</span>
      </div>
      <div className="cityLine">
        <span className="city">{city}</span>,{" "}
        <span className="state">{state}</span>{" "}
        <span className="postCode">{postCode}</span>
      </div>
    </div>
  );
}
