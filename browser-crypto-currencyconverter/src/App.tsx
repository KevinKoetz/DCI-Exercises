import React, { FormEvent, useState } from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { InputGroup, Form, Button } from "react-bootstrap";

const cryptoCurrencies = Object.freeze({
  BTC: "BTC",
  XRP: "XRP",
  EOS: "EOS",
  LTC: "LTC",
  ETH: "ETH",
} as const);

function isKeyOfCryptoCurrencies(
  s: string
): s is keyof typeof cryptoCurrencies {
  if (s in cryptoCurrencies) return true;
  return false;
}

const currencies = Object.freeze({
  USD: "USD",
  EUR: "EUR",
  GBP: "GBP",
  AUD: "AUD",
} as const);

function isKeyOfcurrencies(s: string): s is keyof typeof currencies {
  if (s in currencies) return true;
  return false;
}

function App() {
  const [cryptoCurrency, setCryptoCurrency] = useState<
    "" | keyof typeof cryptoCurrencies
  >("");
  const [currency, setCurrency] = useState<"" | keyof typeof currencies>("");
  const [amount, setAmount] = useState<"" | number>("");
  const [rate, setRate] = useState<"" | string>("");

  const handleCryptoCurrencyChange: React.ChangeEventHandler<HTMLSelectElement> =
    (e) => {
      const value = e.target.value;
      if (isKeyOfCryptoCurrencies(value))
        setCryptoCurrency(cryptoCurrencies[value]);
    };

  const handleCurrencyChange: React.ChangeEventHandler<HTMLSelectElement> = (
    e
  ) => {
    const value = e.target.value;
    if (isKeyOfcurrencies(value)) setCurrency(currencies[value]);
  };

  const handleAmountChange: React.ChangeEventHandler<HTMLInputElement> = (
    e
  ) => {
    if (e.target.value === "") setAmount("");
    else {
      setAmount(Number(e.target.value));
    }
  };

  const handleSubmit: React.EventHandler<FormEvent> = async (e) => {
    e.preventDefault();
    if (!(amount && currency && cryptoCurrency))
      throw new Error(
        "amount, currency or cryptoCurrency are undefined, check Form validation."
      );
    try {
      const response = await fetch(
        `https://api.cryptonator.com/api/ticker/${cryptoCurrency.toLowerCase()}-${currency.toLowerCase()}`
      );
      const data = await response.json();
      if(!data.success) throw new Error(JSON.stringify(data))
      
      setRate((amount * Number(data.ticker.price)).toFixed(2))
    } catch (error) {
      console.log(error);
    }
    
  };

  return (
    <div className="App">
      <h1>Crypto-Rate</h1>
      <Form onSubmit={handleSubmit}>
        <InputGroup>
          <InputGroup.Text className={"bg-primary text-light"}>
            Crypto-currency
          </InputGroup.Text>
          <Form.Select
            required
            id="cryptoCurrency"
            onChange={handleCryptoCurrencyChange}
            value={cryptoCurrency}
          >
            <option>Choose...</option>
            {Object.keys(cryptoCurrencies).map((cur) => (
              <option key={cur} value={cur}>
                {cur}
              </option>
            ))}
          </Form.Select>
        </InputGroup>
        <InputGroup>
          <InputGroup.Text className={"bg-primary text-light"}>
            Amount
          </InputGroup.Text>
          <Form.Control
            required
            type={"number"}
            onChange={handleAmountChange}
            value={amount}
          ></Form.Control>
        </InputGroup>
        <InputGroup>
          <InputGroup.Text className={"bg-danger text-light"}>
            Currency
          </InputGroup.Text>
          <Form.Select
            required
            id="currency"
            onChange={handleCurrencyChange}
            value={currency}
          >
            <option>Choose...</option>
            {Object.keys(currencies).map((cur) => (
              <option key={cur} value={cur}>
                {cur}
              </option>
            ))}
          </Form.Select>
        </InputGroup>
        <InputGroup>
          <InputGroup.Text className={"bg-success text-light"}>
            {cryptoCurrency ? cryptoCurrency : "..."} in{" "}
            {currency ? currency : "..."}
          </InputGroup.Text>
          <Form.Control
            disabled
            type={"number"}
            value={rate}
          ></Form.Control>
        </InputGroup>
        <Button variant="primary" type="submit">
          Convert
        </Button>
      </Form>
    </div>
  );
}

export default App;
