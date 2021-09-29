let age = 31;
let name = "Kevin";
let output;

//Strings in 3 different ways
// single quotes
output = "My Name is " + name + " and i am " + age + " years old.";
console.log(output);
// double quotes
output = "My Name is ${name}.\n" + "I am ${age} years old.";
console.log(output);
//backticks
output = `My Name is ${name}. 
I am ${age} years old.`; //Variables inside Strings with ${} can only be done in backticks
//Line breaks are ezpz with backticks
l(output);

let str = "this is also a string";
let searchStr = "";

for (let i = 0; i < str.length; i++) {
  let char = str[i];
  l(`${char} is at Index: ${i}`);
}

console.log("My String: \n", str); // \n is a line break
l(str.indexOf(searchStr));

//When we are using for loops?
//1. Take one potatoe
//2. Chop potatoe
//3. Put the chops into bowl
//4. If we have potatoes left? Then go to 1., if not? then go to number 5
//5. add some mayo

// You are using loops, if you need to do the same thing again and again.

console.log("Numbers from 1 - 10");
let number = 1;
while (number <= 10) {
  console.log(number);
  number++;
}

//equivalent to
for (let number = 1; number <= 10; number++) {
  l(number);
}

l("Iterations to get a random number > 0.9");
//You can use a while loop if you dont know how many iterations it will take
let expression = true;
while (expression) {
  let randomNumber = Math.random();
  if (randomNumber > 0.9) expression = false;
  console.log(randomNumber);
}

//When are we using if...else?
age = 14;
if (age >= 18) {
  console.log("This is the dirty stuff.");
} else {
  console.log("Here have some Hello Kitty.");
}
//YOu use if...else or only if, if you want to alter the flow of your program

//When we are using functions?

//You use function to encapsulate parts of your program
function newPage() {
  let age = 15; //this age has function scope
}

//You use function to re-use parts of your code on different occasions.
function l(...remainingParameters) {
  console.log(...remainingParameters);
}

//Short Circuiting with logical OR and logical AND
l("Short-Circuits");
l("op1 && op2"); // Returns the op2 if op1 is truthy, otherwise returns the op1.
l(true && 5); //Returns the second operand because the first is truthy
l("kevin" && "falsey"); //Returns the second operand because the first is truthy
l("truthy" && { name: "kevin" }); //Returns the second operand because the first is truthy
l(null && "falsey"); //Returns the first operand because the first is falsey
l(undefined && false); //Returns the first operand because the first is falsey
l(20 && 60); // will log 60

l("op1 || op2"); // Returns the op1 if op1 is truthy, otherwise returns the op2.
l("truthy" || 5); //Returns the first, because the first is already truthy
l(5 || 60); //Returns the first, because the first is already truthy
l(undefined || 50); //Returns the second, because the first is falsy

l("Before function call:");
function expectsParameter(para) {
  para = para || 1; //Or Short Circuiting can be used for setting a default value. (be careful with 0 because it's also falsy)
  l(para);
}

expectsParameter();

l("---------");

//falsy values are null, undefined, 0, -0, NaN, ""

/**
 *  01
 *  Write a function which accepts 2 numbers and checks whether both numbers are
 *  in range 40..60 or in the range 70..100 inclusive
 */

function checkNumber(number1, number2) {
  let number1IsInRange =
    (number1 >= 40 && number1 <= 60) || (number1 >= 70 && number1 <= 100);
  let number2IsInRange =
    (number2 >= 40 && number2 <= 60) || (number2 >= 70 && number2 <= 100);
  let both =
    ((number1 >= 40 && number1 <= 60) || (number1 >= 70 && number1 <= 100)) &&
    ((number2 >= 40 && number2 <= 60) || (number2 >= 70 && number2 <= 100));
  return both;
  return number1IsInRange && number2IsInRange;
}

l(checkNumber(40, 70));

/**
 * 02
 * Write a function to compute the difference between a specified number and 19.
 * Returns triple their absolute difference if the specified number is greater than 19
 */

/**
 * 03
 * Write a JavaScript program to check two given numbers
 * and return true if one of the numbers is 50 or if their sum is 50
 */

/**
 * 04
 * Write a function to check from two given integers,
 * and returns 'Yes' if one is positive and another one is negative
 * or 'No' if both are positive/negative
 */

/**
 * 05
 * Write a function to create a new string adding "Py" in front of a given string.
 * If the given string begins with "Py" then return the original string
 */

/**
 * 06
 * Write a function to create a new string from a given string taking the last 3 characters
 * and added at both the front and back.
 * The string length must be 3 or more
 */

function padString(str) {
  //Check if str is at least 3 chars
  if (str.length >= 3) {
    //Get the last 3 characters of the string
    let lastLetters = str.substr(str.length - 3);
    //Add the characters to the front and back
    let combinedStr = lastLetters + str + lastLetters;
    return combinedStr;
  }
}
l("---padString()---");
l(padString("lol"));
l(padString("Hello"));
l(padString("H"));

/**
 * 07
 * Write a function that accepts 3 numbers and returns the biggest of them
 */

/**
 * 08
 * Write a function to find a value which is nearest to 100
 * from two different given integer values
 */

/**
 * 09
 * Write a function to check whether a specified character exists within
 * the 2nd to 4th position in a given string
 * E.g.
 * "Console" and "o" should return true
 * "Console" and "e" should return false
 */

/**
 * 10 - could be challenging
 * Write a function to check whether the last digit of the three given positive integers is same
 */

//1.Take one potatoe
//2. Chop potatoe
//3. put into bowl
//4. check if we have potatoes left. if yes go to 1. if no go to 5.
//5. add mayo

let bowl;





//Falsey values are: false, ""''``, null, undefined, 0, -0, 0n, NaN, document.all
//while(expression is thruthy){this code is executed}
bowl = [];
let numberOfPotatoe = 20;
while (numberOfPotatoe > 0) {
  //1.Take one potatoe
  
  //2. Chop potatoe
  //whatever we do here
  //3. put into bowl
  bowl.push("Potatoe");

  numberOfPotatoe = numberOfPotatoe - 1; //Very last statement of the while loop
}
console.log(bowl); //This line is executed if when numberOfPotatoe reaches 0


bowl = [];
//the third statement inside the for(1;2;3 <- this) is executed as the very last statement of your code in each iteration
for(let numberOfPotatoes = 20;numberOfPotatoes > 0; numberOfPotatoe = numberOfPotatoe - 1){ 
    bowl.push("Potatoe"); //This line is only executed as long as numberOfPotatoes > 0
    //bunsh of code
}
console.log(bowl); //This line is executed if when numberOfPotatoe reaches 0
