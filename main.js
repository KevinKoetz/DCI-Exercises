'use strict';

//Variable Declarations
var varVariable;
varVariable = 1;

let array;

let letVariable;
letVariable = "let";

const constVariable = "const";

varVariable = "new Var";
letVariable = "new let";

//Functions
function functionName(array, ...rest) {}

const funcName = function (paras) {
  return paras;
};

const arrowFunc = (paras, para2) => {};

const onePara = (onePara) => {};

const oneLiner = (onePara) => ++onePara;

const increment1 = (num) => ++num;
const increment2 = (num) => num++;

const recursive = (num) => {
  if ((num = 1)) console.log(num);
  else recursive(num - 1);
};

let obj = {
  someName: function (paras) {
    return "something";
  },
  length: 5,
};

//Loops
array = [1, 2, 3];
for (let index = 0; index < array.length; index++) {
  //code
}

let counter = 1;
while (true) {
  if (counter === 3) {
    counter++;
    continue;
  }

  if (counter <= 5) {
    console.log(counter);
    counter++;
  } else {
    break;
  }
}

console.log("-------------");
array = [1, 2, 3,4,5,6,7,8,9,10];
function doSomething(item, index, array){
    console.log("item:", item)
}

/* array.forEach((item, index, array) => {
    console.log("item:", item)
}) */

function forEach(array, func) {
    for(let i = 0; i < array.length; i++){
        func(array[i], i, array)
    }
}

forEach(array, (item)=>{
    console.log("item:", item)
})


array = [1, 2, 3,4,5,6,7,8,9,10];
let evenNumbers = array.filter(item => item % 2 === 0)

function filter (array, func){
    let result = []
    for(let i = 0; i < array.length; i++){
        if(func(array[i], i, array)) result.push(array[i]);
    }
    return result
}

console.log(filter(array, item => item % 2 === 0))


function includes(array, element){
    for(let i = 0; i < array.length; i++){
        if(array[i] === element) return true;
    }
    return false;
}



console.log(includes([1,2,3,4,5], 4) === true)
console.log(includes([1,2,3,4,5], 6) === false)

function max(...array){

    if (array.length === 0) {
        return NaN
    }

    for(let i = 0; i < array.length; i++){
        if(!isNumber(array[i])) return NaN
    }

    let max = -Infinity
    for(let i = 0; i < array.length; i++){
        if(array[i] >= max) max = array[i];
    }

    console.log(max);
    return max
}

function isNumber(element){
    return typeof element === "number" && !Number.isNaN(element)
}

console.log("________________");
console.log(max(1,3,5) === 5)
console.log(max(-15,-20,-40) === -15)
console.log(max(1,2,3,4,5,5,6,7,8,9,7,5,8,10) === 10)
console.log(Number.isNaN(max()) === true)
console.log(Number.isNaN(max("string")) === true)

console.log("________________");


console.log(Math.abs(2.56846))


console.log(Math.pow(2,5) === 2 ** 5);






/* 
console.log("switch_____________");
color = "red";
switch (color) {
  case "red":
    console.log("red");
    break;
  case "blue":
    console.log("blue");
    break;
  case "violet":
    console.log("violet");
    break;
}

console.log("IFs_____________");
if (color === "red") {
  console.log("red");
} else if (color === "blue") {
  console.log("blue");
} else if (color === "violet")
  if (color === "blue") {
    console.log("violet");
  } */

//Scope




