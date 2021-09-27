console.log(3 == "3"); // true because "3" is coerced to 3
console.log(3 === "3"); // false because typeof are different

// === should be used and we should explicitly convert values if necessary
// = will trow a Syntax Error

let v = true;

console.log(!v ? "true option" : "false option");
// expression ? returnIfTrue : returnIfFalse <-- if expression is truthy return "returnIfTrue" otherwise "returnIfFalse"

let num = 1;

console.log(
    num % 3 == 0 && num % 5 == 0
    ? "FizzBuzz"
    : num % 3 == 0
    ? "Fizz"
    : num % 5 == 0
    ? "Buzz"
    : num
);

let firstName, givenName;

firstName = 'Stacey';
let name = givenName || firstName || 'John'; 

console.log("OR short circuit", name);


firstName, givenName;

givenName = true;
firstName = 'Stacey';
name = givenName && firstName && null; 

console.log("AND short circuit", name);



function divide(a, b) {
    if(b){
        return a / b;
    }else{
        return undefined
    }
}

console.log(divide(10,0));

