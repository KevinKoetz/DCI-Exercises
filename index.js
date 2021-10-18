"use strict";
function l(...args) {
    console.log(...args);
}
const line = (() => {
    let num = 0;
    return () => l(`____________${num++}____________`);
})();
/* 1. Object Person. Create an object named person. Loop through the object and print both the property and value of the object. */
line();
const person = {
    name: "Kevin",
    age: 31,
    email: "email@example.com",
};
for (const key in person) {
    l(`Key: ${key}, Value: ${person[key]}`);
}
/* 2. Get Values. Create a function that returns an array of all values of an object's properties.

Examples:
getObjectValues({
  choice1: "tea",
  choice2: "coffee",
  choice3: "milk"
})
Expected output:
["tea", "coffee", "milk"]  */
line();
function getObjectValues(obj) {
    return Object.values(obj);
}
l(getObjectValues({
    choice1: "tea",
    choice2: "coffee",
    choice3: "milk",
}));
/*
  3. Add A Method. Create an object and add a method to that object which prints the values of the objects in a string.

  Example
  let person = {
    firstName: "Michael",
    lastName: "Smith",
    job: "driver",
    age: 20,
    city: "Paris"
  }
  Example of Expected Output "Michael Smith is a 20 year old driver in Paris". */
line();
person.printMe = function () {
    l(`${this.name} is a ${this.age} ${this.age > 1 ? "years" : "year"} old person`);
};
person.printMe();
/*   1. Convert keys and values into an array. Create a function that converts an object into an array of keys and values.

Examples:
objectToArray({
  A: 1,
  B: 2,
  C: 3
})
Expected output:
[["A", 1], ["B", 2], ["C", 3]]
objectToArray({
  cats: 1,
  dogs: 2,
  turtles: 4
})
Expected output:
[["cats", 1], ["dogs", 2], ["turtles", 4]]  */
line();
const objectToArray = (obj) => Object.entries(obj);
l(objectToArray({
    A: 1,
    B: 2,
    C: 3,
}));
l(objectToArray({
    cats: 1,
    dogs: 2,
    turtles: 4,
}));
/*   2. List Properties. Create a function that returns an array of properties of a javascript object.

  Example
  let student = {
    name: "Mike",
    class: "4A"
    course: "English"
  }
  Expected output:
  ["name", "class", "course"] */
line();
const getProperties = (obj) => Object.keys(obj);
/*   3. Merge. Create a function that takes two objects as its parameters and merges them together into a new object.

  Example
  let first = {firstName: "John"}
  let last = {lastName: "Smith"}
  Expected output:
  {firstName: "John", lastName: "Smith"}
  Extra Credit: What happens if you merge two objects with the same property values? In merging these two objects, do you expect to change either or both of the original objects? Why or why not? Comment your answers. */
line();
let first = { firstName: "John" };
let last = { lastName: "Smith" };
const mergeObjects = (obj1, obj2) => Object.assign({}, obj1, obj2);
l(mergeObjects(first, last));
/*   4. Switch Keys and Values. Create a function to get a copy of an object. The copy must switch the keys and values.

  Example:
  let person = {
    name: "John",
    job: "teacher"
  }
  Expected Output:
  {John: "name", teacher: "job"}  */
line();
let john = {
    name: "John",
    job: "teacher",
};
const switchKeyValues = (obj) => {
    let result = {};
    for (const key in obj) {
        let value = obj[key];
        result[value] = key;
    }
    return result;
};
l(switchKeyValues(john));
/*   5. Return Keys and Values. Write a program that takes an object and returns an array which contains two arrays: one for the keys of the object and the other for the values of the object.

Examples:
{ a: 1, b: 2, c: 3 } ➞ [["a", "b", "c"], [1, 2, 3]]
{key: true} ➞ [["key"], [true]] */
line();
const getKeysAndValues = (obj) => [
    Object.keys(obj),
    Object.values(obj),
];
