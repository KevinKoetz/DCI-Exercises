import React, { useState } from "react";
import logo from "./logo.svg";
import "./LuckyNumbers.css";

function LuckyNumbers() {
  const [numbers, setNumbers] = useState<number[]>([]);

  const handleReset = () => {
    setNumbers([]);
  };

  const handleShowNumbers = () => {
    setNumbers(generateLuckyNumbers());
  };

  return (
    <div className="LuckyNumbers">
      <h1>Lotto 6 / 49</h1>
      <p>Generating lucky numbers</p>
      <ol>
        {numbers.map((number, idx) => (
          <li key={idx}>{number}</li>
        ))}
      </ol>
      <div>
        <input
          className="reset"
          type="button"
          value="Reset"
          onClick={handleReset}
        />
        <input
          className="showLuckyNumbers"
          type="button"
          value="Show me lucky numbers"
          onClick={handleShowNumbers}
        />
      </div>
    </div>
  );
}

export function generateLuckyNumbers() {
  const possibleNumbers = new Array(49)
    .fill(0)
    .map((value, index) => index + 1);
  return new Array(7).fill(0).map((value, index, array) => {
    if (index === array.length - 1) return Math.floor(Math.random() * 10) + 1;
    const numberIndex = Math.floor(Math.random() * possibleNumbers.length);
    const number = possibleNumbers[numberIndex];
    possibleNumbers.splice(numberIndex, 1);
    return number;
  });
}

export default LuckyNumbers;
