import React from 'react'
import Envelope from './components/Envelope/Envelope'
import "./App.scss"

const fromPerson = {
    title: "Mr.",
    name: "Sender",
    street: "123 Fake St.",
    city: "Boston",
    state: "MA",
    postCode: "02118"
}

const toPerson = {
    title: "Mr.",
    name: "Receiver",
    street: "123 Fake St.",
    city: "San Francisco",
    state: "CA",
    postCode: "94101"
}
export default function App() {
    return (
        <div className='app'>
            <Envelope fromPerson={fromPerson} toPerson={toPerson}></Envelope>
        </div>
    )
}
