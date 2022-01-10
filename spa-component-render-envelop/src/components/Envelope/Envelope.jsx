import React from 'react';
import AdressLabel from '../AddressLabel/AddressLabel';
import Stamp from "../Stamp/Stamp";
import "../../../node_modules/bootstrap/scss/bootstrap.scss"
import "./Envelope.scss"

export default function Envelope({toPerson, fromPerson, className}) {
    return (
        <div className={className ? className + ' envelope' : "envelope"}>
            <AdressLabel className="from" {...fromPerson}></AdressLabel>
            <AdressLabel className="to" {...toPerson} ></AdressLabel>
            <Stamp className="stamp"></Stamp>
        </div>
    )
}