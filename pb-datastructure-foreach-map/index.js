"use strict";
const l = (...args) => console.log(...args);
const line = (() => {
    let num = 1;
    return () => l(`_______________${num++}_______________`);
})();
/* 1. Write a function called doubleValues which accepts an array and returns a new array with all the values in the array passed to the function doubled

Examples:

doubleValues([1,2,3]) // [2,4,6]
doubleValues([5,1,2,3,10]) // [10,2,4,6,20] */
line();
const doubleValues = (nums) => nums.map((item) => item * 2);
l(doubleValues([1, 2, 3]));
l(doubleValues([5, 1, 2, 3, 10]));
/* 2. Write a function called onlyEvenValues which accepts an array and returns a new array with only the even values in the array passed to the function

Examples:

onlyEvenValues([1,2,3]) // [2]
onlyEvenValues([5,1,2,3,10]) // [2,10] */
line();
const onlyEvenValues = (nums) => nums.filter((item) => item % 2 === 0);
l(onlyEvenValues([1, 2, 3]));
l(onlyEvenValues([5, 1, 2, 3, 10]));
/* 3. Write a function called showFirstAndLast which accepts an array of strings and returns a new array with only the first and last character of each string

Examples:

showFirstAndLast(['colt','matt', 'tim', 'udemy']) // ["ct", "mt", "tm", "uy"]
showFirstAndLast(['hi', 'goodbye', 'smile']) // ['hi', 'ge', 'se'] */
line();
const showFirstAndLast = (words) => words.map((word) => word[0] + word[word.length - 1]);
l(showFirstAndLast(["colt", "matt", "tim", "udemy"]));
l(showFirstAndLast(["hi", "goodbye", "smile"]));
/* 4. Write a function called addKeyAndValue which accepts an array of objects, a key, and a value and then returns the array passed to the function with the new key and value added for each object

Examples:

addKeyAndValue([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'title', 'instructor')

// [{name: 'Elie', title:'instructor'}, {name: 'Tim', title:'instructor'}, {name: 'Matt',  */
const addKeyAndValue = (persons, key, value) => persons.map((person) => {
    const personCopy = Object.assign({ key }, person);
    personCopy[key] = value;
    return personCopy;
});
l(addKeyAndValue([{ name: "Elie" }, { name: "Tim" }, { name: "Matt" }, { name: "Colt" }], "title", "instructor"));
const vowelCount = (str) => str.split("").reduce((vowels, char) => {
    const lowerCase = char.toLowerCase();
    if (["a", "e", "i", "o", "u"].includes(lowerCase)) {
        if (lowerCase in vowels) {
            vowels[lowerCase]++;
        }
        else {
            vowels[lowerCase] = 1;
        }
    }
    return vowels;
}, {});
l(vowelCount("Elie")); // {e:2,i:1};
l(vowelCount("Tim")); // {i:1};
l(vowelCount("Matt")); // {a:1})
l(vowelCount("hmmm")); // {};
l(vowelCount("I Am awesome and so are you")); // {i: 1, a: 4, e: 3, o: 3, u: 1}; */
function unique(array) {
    for (let i = 0; i < array.length; i++) {
        if (array.indexOf(array[i], i + 1) === -1 &&
            (i - 1 < 0 || array.lastIndexOf(array[i], i - 1) === -1)) {
            return array[i];
        }
    }
}
console.log("--------------------------------------");
console.log("hellooo", unique([3, 3, 3, 5, 3, 3]));
