"use strict";
/* 1. Combining Arrays
Create two arrays. e.g. euroCountries and asianCountries. Add asianCountries items to the end of euroCountries array.
Once again create two arrays. Save all elements of both arrays to another variable. */
const euroCountries = ["Berlin", "Praque", "Rome"];
const asianCountries = ["Hongkong", "Wuhan", "Shanghi"];
euroCountries.push(...asianCountries);
console.log(euroCountries);
/* 2. Copying Arrays
Copy an array using the spread operator. Store the copied array in another variable. */
const newArray = [...euroCountries];
/* 3. Find the Largest...
Create a function to find the largest number in an array. */
const numbers = [1, 5, 8, 9, 3, 1, 5, 7, 9, 4];
Math.max(...numbers);
/* 4. Find the Smallest
Create a function to find the smallest number in an array. */
Math.min(...numbers);
/* 5. Clone and Merge
Given two objects:

const person = {name: "John"}
const job = {role: "Teacher"}
5.1 Clone the person object.
5.2 Merge these two objects into one object: "employee". Use the spread operator to do so.
5.3 Then change the values of the properties in the employee object. */
const person = { name: "John" };
const job = { role: "Teacher" };
const employee = Object.assign(Object.assign({}, person), job);
employee.name = "Kevin";
console.log(employee);
console.log(person);
/* Bonus: 6. Is the average a whole number?
Create a function that takes 4 integers as parameters and returns true or false
depending on whether the average of all the arguments is a whole number or not.

Examples

isWhole(1, 2, 3, 4) ➞ false

isWhole(9, 2, 2, 5) ➞ false

Once you have created a function, pass in an array as an argument which contains four elements -
check if this method still outputs the correct result!

 */
const isAverageInteger = (...args) => (args.reduce((prev, curr) => prev + curr) / args.length) % 1 === 0;
console.log(isAverageInteger(1, 2, 3, 4));
console.log(isAverageInteger(9, 2, 2, 5));
console.log(isAverageInteger(5, 5, 5, 5));
