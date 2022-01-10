import React from "react"
import CreditCard from "./components/creditCard/CreditCard";

const cardInfo = {
  cardHolder: "Cardholder Name",
  expirationDate: new Date(2019, 8),
  cardNumber: 1234567887654321,
  bankName: "Big Bank, Inc."

}

function App() {
  return (
    <div className="App">
      <CreditCard {...cardInfo}></CreditCard>
    </div>
  );
}

export default App;
