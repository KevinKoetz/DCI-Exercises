/**
 * Exercise 01
 * Write a function toFahrenheit that converts a temperature from Celsius to Fahrenheit.
 * Example: toFahrenheit(0) should return 32.
 */
let toFahrenheit = (celsius) => celsius * 9/5 + 32;
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

function digits(num) {
    return Math.abs(num) / 10 < 1 ? 1 : digits(num / 10) + 1;
}
console.log(digits(63546));
console.log(digits(-12));

/**
 * Exercise 03
 * Which value does x have after execution of the following code?
 */
 let x = 3;
 x++;
 x = x * 2;
 x--;
 console.log(x === 7);

 /**
  * Exercise 04
  * Write a function mean that takes 2 numbers and returns their mean value.
  * Example: mean(1, 2) should return 1.5.
  */
function mean(n1,n2) {
    return (n1+n2) / 2;
}

console.log(mean(1,10));
console.log(mean(1,2));

 /**
  * Exercise 05
  * Write a JavaScript function to check whether its input parameter is a string or not 
  * and prints the result to the console
  */

 function isString(para){
     return para + "" === para
 }

 console.log(isString("Test"));
 console.log(isString(""));
 console.log(isString(undefined));
 console.log(isString(null));
 console.log(isString(1));
 console.log(isString([""]));

 /**
  * Exercise 06
  * Write a JavaScript program to find the area of a triangle.
  * the formula is base * height / 2
  */

 function triangleArea(base, height){
     return (base * height) / 2
 }

 console.log(triangleArea(3, 5));
