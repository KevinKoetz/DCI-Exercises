import React, { useState } from "react";

export default function App() {
  const [numbers, setNumbers] = useState([]);
  return (
    <div>
      <button
        onClick={() => setNumbers([...numbers, Math.random() * 10])}
      >Generate Number</button>
      <ul>
        {numbers.map((number, idx) => (
          <li key={idx}>{number}</li>
        ))}
      </ul>
    </div>
  );
}
