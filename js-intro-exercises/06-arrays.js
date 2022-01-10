/**
 * 01 easy
 * Crate an array named myLuckyNumbers with the following numbers: 1,2,3,4,5,6,7,8,9,10
 * Create a function that sums all the numbers of the array
 */

let myLuckyNumbers = [1,2,3,4,5,6,7,8,9,10]

function addAll(array) {
    return array.reduce((prev,curr)=> prev+curr);
}

console.log(addAll(myLuckyNumbers));


/**
 * 02 easy
 * Write a function toArray that takes 2 values and returns these values in an array.
 * Example: toArray(5, 9) should return the array [5, 9]
 */


function toArray(...para){
    return [...para]
} 

console.log(toArray(5,9));

/**
 * 03 easy
 * Write a function getFirstElement that takes an array and returns the first element of the array.
 * Example: getFirstElement([1, 2]) should return 1
 */

function getFirstElement(arr){
    return arr[0];
}

/**
 * 04 easy
 * Write a function setFirstElement that takes an array and one variable. 
 * Set the first element of the array with the new variable 
 * The array should be returned
 */

function setFirstElement(arr, e){
    arr[0]=e;
    return arr
}

console.log(setFirstElement([0,5],1));

/**
 * 05 easy
 * Write a function getLastElement that takes an array and 
 * returns the last element of the array
 */

function getLastElement(arr){
    return arr[arr.length - 1];
}

console.log(getLastElement([1,5,8]));

/**
 * 06 easy
 * Write a function that accepts an array and a variable. The function should
 * add the variable to the end of the array
 * The function should return the array
 */

function push(arr, e){
    arr.push(e)
    return arr;
}

console.log(push([4,5],5));

/**
 * 07 easy - medium
 * Write a function add that adds an element to the end of an array. 
 * However, the element should only be added if it is not already in the array.
 * Example: add([1, 2], 3) should return [1, 2, 3] and add([1, 2], 2) should return [1, 2]
 */

function pushIfNotThere(arr, e) {
    !arr.includes(e) && arr.push(e);
    return arr;
}

console.log(pushIfNotThere([4,5],5)); 
console.log(pushIfNotThere([4,5],3)); 

/**
 * 08 medium
 * Write a function named list that takes an array of words and returns a string 
 * by concatenating the words in the array, separated by commas and - the last word - by an 'and'.
 * An empty array should return an empty string.
 * Example: list(['Huey', 'Dewey', 'Louie']) should return 'Huey, Dewey and Louie'
 */

function namedList(arr){
    if(arr.length === 0) return ""
    if(arr.length === 1) return arr[0]

    return [arr.slice(0,arr.length - 1).join(", "), arr[arr.length - 1]].join(" and ");
}

console.log(namedList(['Huey', 'Dewey', 'Louie']));
console.log(namedList(["Kevin"]));
console.log(namedList([]));

/**
 * 09 easy
 * Write a function to get the first element of an array. 
 * Passing a parameter 'n' will return the first 'n' elements of the array
 * The function should accept the array and the number of elements
 */

function getN(arr, n){
    n = n ?? 1
    return arr.slice(0, n)
}

console.log(getN([1,2,3]));
console.log(getN([1,2,3],2));
console.log(getN([1,2,3],5));

/**
 * 10 medium
 * Write a function which accepts a string of numbers as input and inserts dashes (-) 
 * between each two even numbers. 
 * For example if you accept 025468 the output should be 0-254-6-8
 * The function should return the string output
 */ 

function addDashesOnEven(str){
    let arr = str.split("")
    let lastWasEven = false;
    let result = "";
    for (const number of arr) {
        result = lastWasEven && !(Number(number) % 2) ? result+"-"+number:result+number;
        lastWasEven = !(Number(number) % 2);
    }
    return result;
}

console.log(addDashesOnEven("0254687788"));

 /**
  * 11 medium 
  * Write a function that accepts an array and  strips from it all items that begin from 'a'
  * E.g. the array ['apple','banana','orange'] should become ['banana','orange']
  */

 function firstCharNotA(arr){
     return arr.filter((el)=>{return !(el[0] === "a")})
 }

 console.log(firstCharNotA(['apple','banana','orange',"ananas","peach"]));