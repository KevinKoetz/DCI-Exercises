import React from "react";
import "./CreditCard.scss"

function CreditCard({
  bankName,
  cardNumber,
  expirationDate,
  cardHolder,
  className,
}) {
  return (
    <article className={className ? className + " CreditCard" : "CreditCard"}>
      <section className="bankName">{bankName}</section>
      <section className="cardNumber">
        {formatCreditCardNumber(cardNumber)}
      </section>
      <section className="expirationDate">
        <span className="validThru"><span>valid</span><span>thru</span></span> {formatExpirationDate(expirationDate)}
      </section>
      <section className="cardHolder">{cardHolder}</section>
    </article>
  );
}

function formatCreditCardNumber(number) {
  if (!("number" === typeof number))
    throw new Error(
      `${
        formatCreditCardNumber.name
      } expects a number as an argument. ${number} is of type ${typeof number}.`
    );
  return number
    .toString()
    .split("")
    .reduce(
      (output, char, index) =>
        index % 4 === 0 && index !== 0 ? output + " " + char : output + char,
      ""
    );
}

function formatExpirationDate(date) {
  if (!(date instanceof Date))
    throw new Error(
      `${formatExpirationDate.name} expects a date as an argument. ${date} is not an instance of Date.`
    );
  return `${date.getMonth().toString().padStart(2, "0")}/${date
    .getFullYear()
    .toString()
    .slice(-2)}`;
}

export default CreditCard;
