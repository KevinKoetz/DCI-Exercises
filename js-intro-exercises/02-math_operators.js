/**
 * Exercise 01
 * Write a function toFahrenheit that converts a temperature from Celsius to Fahrenheit.
 * Example: toFahrenheit(0) should return 32.
 */
//let toFahrenheit = (celsius) => celsius * 9/5 + 32;

function toFahrenheit(celsius) {
  let fahrenheit = (celsius * 9) / 5 + 32;
  return fahrenheit;

  /**
   * return celsius * 9/5 + 32;
   */
}

let result = toFahrenheit(0);

console.log(result);

console.log(toFahrenheit(0));
console.log(toFahrenheit(-273.15));
console.log(toFahrenheit(1000));
console.log(toFahrenheit(100));

/**
 * Exercise 02
 * Write a function digits that takes a natural number as input and
 * returns the number of digits of that number.
 * Example: digits(2674) should return 4.
 */

function digits(number) {
  let numberAsString = String(number);
  let numberOfDigits = numberAsString.length;
  return numberOfDigits;
}

function digits2(number) {
  let result = number / 10 < 1 ? 1 
  : digits2(number / 10) + 1;
  return result;
}

result = digits(-12); // result = 4

console.log(result);

/**
 * Exercise 03
 * Which value does x have after execution of the following code?
 */
let x = 3;
x++; //4 
x = x * 2; // 8
x--; // 7
console.log(x === 7); //true

/**
 * Exercise 04
 * Write a function mean that takes 2 numbers and returns their mean value.
 * Example: mean(1, 2) should return 1.5.
 */


function mean(numbers){
    let total = 0;
    for (const m of numbers) {
        total = total + m;
    }
    return total / numbers.length;
}

let array =  [1,2,3,4,5];

result = mean(array);
console.log(result);

/**
 * Exercise 05
 * Write a JavaScript function to check whether its input parameter is a string or not
 * and prints the result to the console
 */

function isString(parameter) {
    return typeof parameter === "string";
}

console.log(isString(""));
console.log(isString("fas"));
console.log(isString(5));
console.log(isString(NaN));
console.log(isString(undefined));
console.log(isString(null));
console.log(isString(5));
console.log(isString({}));
console.log(isString([23]));

 //should return true
isString(2354) //should return false

/**
 * Exercise 06
 * Write a JavaScript program to find the area of a triangle.
 * the formula is base * height / 2
 */

 function triangleArea( height, base) {
    return base * height / 2;
}

console.log(triangleArea(5,3));