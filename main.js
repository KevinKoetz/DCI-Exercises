// 1. What is Javascript and what makes it special? https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/What_is_JavaScript
// Compiled Languages: C, C++, (Java, C#)
// Interpreted Languages: JavaScript, Python

const { count } = require("console");

// 2. Variables - var, let and const https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Variables
//keyword identifier = value

var varName = "value"; //Can be reassigned, Can be redeclared, Globally Scoped, Function/Locally Scoped
let letName = "value"; //Can be reassigned, Globally Scoped, Function/Locally Scoped or Block Scoped

let declaredLetVariable; //Variable is declared but not initialized
var declaredVarVariable;

//let declaredLetVariable; // Not possible: SyntaxError: Identifier 'declaredLetVariable' has already been declared
var declaredVarVariable; // No problem here.

/* 
console.log(letName);
letName = "newValue";
console.log(letName); */

const constName = "constValue"; //Can not be changed to somthing else

// 3. Variable Scope https://developer.mozilla.org/en-US/docs/Glossary/Scope
// Scope is where it can be accessed/changed
// Everything without {} or a function around is globally scoped
var varScopeExample = "var: iam global";
let letScopeExample = "let: iam global";

function funcName() {
  var varScopeExample = "var: iam local";
  let letScopeExample = "let: iam local";
  console.log(varScopeExample);
  console.log(letScopeExample);
} //Declare function

funcName(); //Use the function, shows "iam local"
console.log(letScopeExample); // "iam global"
console.log(varScopeExample); // "iam global"

{
  //Only Curly brackets are needed to create a block
  var varScopeExample = "var: iam block Scope"; //This will change the globally defined varScopeExample! Block Scope is not supported by var
  let letScopeExample = "let: iam block Scope";
  console.log(letScopeExample);
}

console.log(letScopeExample);
console.log(varScopeExample); //Logs the changed Variable because var does not support block scope

// 4. Data Types https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures
// Bolean Values true or false https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean
let trueVar = true;
let falseVar = false;

// Null intentional absence of any value https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null
let nullVar = null;

// Undefined uninentional absence of any value https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined
let undefinedVar = undefined;
let undefinedVar2; //Has a value of undefined;

// Number Type every number up until 2^53 − 1 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number
let numberVar = 42;
let floatVar = 4.2; //Point declares the decimal point
let scientificVar = 5e2; //Can use scientific notation
//NaN <- Not a Number
let nanVar = NaN;

// Strings. Strings are many Characters in a given order. '', "", `` https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
let quoteString = "This is a single quote String";
let doubleQuoteString = "This is a double quote String";
let backticksString = `This is a backticks String`;

// Can access them like an array
console.log(quoteString[0]); //Will log "T"
console.log(quoteString.length); //Gives me the length of the String 29 chars

// Objects https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
let kevin = {
  //Property-Name: value
  //key: value pairs
  name: "Kevin",
  nationality: "German",
  eyeColor: "Green-Brown",
  age: 31,
  cleanRoom: function () {
    console.log("Hello from a Method!");
  },
};

// How to use them?
// with . after the object Name
console.log(kevin.name); //will log Kevin
//Assign something new to a property
kevin.name = "Kevin Kötz";
console.log(kevin.name); //will log "Kevin Kötz"

// With Square Brackets by saying which key i want to have objectName["Key"]
console.log(kevin["nationality"]);
kevin["age"] = 32;
console.log(kevin.age); // will log 32

kevin.cleanRoom(); //Will Execute the Method.

// You can add properties on the fly
kevin.newProperty = "some new value";
console.log(kevin.newProperty);

// Arrays, can be created with [] https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/array
let emptyArrayVar = []; //Empty array
let fullArrayVar = ["String", 42, kevin /*The object kevin*/, true];

//Access with position, counting from 0
console.log(fullArrayVar[2]); // want to access kevin
console.log(fullArrayVar.length); //Will give me the number of elements inside the array

//Add something new to a array is done with array.push(value)
fullArrayVar.push("Beer");
console.log(fullArrayVar);

//Remove the last element from an array with array.pop()
console.log(fullArrayVar.pop());
console.log(fullArrayVar);

//Strange things with const and arrays or Objects
const constArray = [0, 1, 2];
constArray.push(3); // Works because i am not using the = "asignment operator"
console.log(constArray); // will log [0, 1, 2, 3]

const constObject = { name: "george" };
constObject.name = "Kevin"; // Works because i am only changing the inner property of the Object
console.log(constObject);

// 5. Operators https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators
// 6. Expressions https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators
// Expressions can either be true or false
//Assignment Operator "=", asigns the value on the right to the variable on the left
let x = 2;
// Basic Math Operator +, -, *, /, %
x = "2" + 4; // x will 24
x = 2 + 4; // x will be 6
x = 2 * 4; // x will be 8
x = 4 / 2; // x will be 2
x = 4 - 2; // x will be 2
// % will give you the remainder of the integer division
x = 4 % 2; // 0
x = 15 % 4; // 3
x = 16 % 4; // 0
x = 17 % 2; // 1

// Comparision Operators, <, >, <=, >=, == "loose equality", === "strict equality", !== "strict not equal"
let compareResult;
compareResult = 8 < 10; // will assign true to compareResult
console.log(compareResult);
compareResult = 8 > 10; // will assign false to compareResult
console.log(compareResult);
console.log(2 == "2"); // Loose equality will try to convert the string into a number https://262.ecma-international.org/5.1/#sec-11.9.3
console.log("2" === 2); // Needs to be of same type and value, so this will log false

// 7. If...else https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else
// if(expression) {--code--}
if (8 < 10) {
  console.log("This is inside an if"); //We get inside here because the expression is true
}

if (12 < 10) {
  console.log("This is inside an if"); //We are not getting inside here because the expression is false
} 
// Else (if the expression is NOT true do this)
else {
    console.log("This is inside an else") //It will get executed because our expression is not true
}

let compareVar1 = "Kevin";
let compareVar2 = "Kevin";

if(!(compareVar1 === compareVar2)) {
    console.log("Hello World");
}
// ! can be used to invert the result of an expression like that !(expression)
console.log(!(true) === false);

// 9. Truthyness and Falsyness https://developer.mozilla.org/en-US/docs/Glossary/Truthy https://developer.mozilla.org/en-US/docs/Glossary/Falsy
if(compareVar2) {
    console.log("Will get logged because compareVar2 is truthy");
}

if(""){
    console.log("Will not be logged");
}

if(-1) {
    console.log("Will be logged because -1 is truthy");
}

//In Javascript everything is treathed as true inside of an expression, except it is defined to be falsy:
//falsy values are: false, 0, -0, 0n, "", null, undefined, NaN, document.all

// 9. Loops - for, while, do...while, for...of, for...in https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration
// for:
// for(let i = 1; i < 5; i = i + 1) {--code--}
// 1. declares variable named i and set it equal to 1
// 2. Check if expression is true
// 3. If it is true, execute code inside
// 4. After the code execution do what is specified in the right most part of for() statement
// 5. Return to start and check expression again
for(let i = 1; i <= 5; i = i + 1 /*can be written as i++*/) {
    console.log(i);
}

//while:
//while(expression) {code}
//1. Checks Expression is true
//2. if yes, execute code inside

//While loops can be used when you do not know before hand how many iterations you need
let counter = 1;
while(counter < 5) {
    console.log(counter);
    counter = Math.random() * 10; // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
}

//do...while:
// do {code} while(expression)
//will enter the code at least once and loop if the expression is true
counter = 1;
do {
    console.log(counter);
    counter = counter + 1;    
} while (counter < 3);


//for...of:
//Loops through arrays (iterables)
let fruits = ["Banana", "Apple", "Pumpkin", "Strawberry", "Peach"];
for(const fruit of fruits) {
    console.log(fruit);
}

//for...in:
//Loops through keys in an object
for(const key in kevin) {
    console.log(key); //Will print out the name of the key
    console.log(kevin[key]); //Will print out the value corresponding to the key
}

// 10. Functions https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions

// function functionName(argument) { code }
function printName(name) {
    console.log(name);
}

printName("Kevins Name");

//functions can have return values with the "return" keyword
function getName(person) {
    return person.name;
}

let personName = getName(kevin); //getName will return "Kevin Kötz" and it will be assigned to personName
console.log(personName);

//You can assign a function to a variable
let functionVariable = function(parameter) {
    return parameter + 1;
}

console.log(functionVariable(2)); //You do not need to assign a functions return value to a variable, you can directly use it.