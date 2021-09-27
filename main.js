console.log(3 == "3"); // true because "3" is coerced to 3
console.log(3 === "3"); // false because typeof are different

// === should be used and we should explicitly convert values if necessary
// = will trow a Syntax Error

let v = true;

console.log(!v ? "true option" : "false option");
// expression ? returnIfTrue : returnIfFalse <-- if expression is truthy return "returnIfTrue" otherwise "returnIfFalse"

let num = 3;

console.log(
  num % 3 || num % 3) ? "FizzBuzz"  : num
);
