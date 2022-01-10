import React, { useState } from 'react'

export default function Room() {
    const [roomLit, setRoomLit] = useState(false)
    return (
        <div className={"room " + (roomLit ? "lit" : "dark")}>
            <button onClick={()=> setRoomLit(!roomLit)}></button>
            <p>{roomLit ? "Room is lit" : "Room is dark"}</p>
        </div>
    )
}
