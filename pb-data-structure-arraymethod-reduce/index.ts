const l = (...args: any) => console.log(...args);
const line = (() => {
  let num = 1;
  return () => l(`_______________${num++}_______________`);
})();

/* 1. Let’s say we received an array of users in the form {id:..., name:..., age... }.
Create a function groupById(arr) that creates an object from it, with id as the key, and array items as values.
For example:

let users = [
  {id: 'john', name: "John Smith", age: 20},
  {id: 'ann', name: "Ann Smith", age: 24},
  {id: 'pete', name: "Pete Peterson", age: 31},
];

let usersById = groupById(users);

/*
console.log(usersById)
// after the call we should have:

usersById = {
  john: {id: 'john', name: "John Smith", age: 20},
  ann: {id: 'ann', name: "Ann Smith", age: 24},
  pete: {id: 'pete', name: "Pete Peterson", age: 31},
}

Such function is really handy when working with server data.

In this task we assume that id is unique. There may be no two array items with the same id.

Please use array .reduce method in the solution. */

type user = {
  id: string;
  name: string;
  age: number;
};

type userById = {
  [key: string]: user;
};

const groupById = (users: user[]) =>
  users.reduce((userById, user) => {
    userById[user.id] = user;
    return userById;
  }, {} as userById);

let users = [
  { id: "john", name: "John Smith", age: 20 },
  { id: "ann", name: "Ann Smith", age: 24 },
  { id: "pete", name: "Pete Peterson", age: 31 },
];

let usersById = groupById(users);

console.log(usersById);

function minMaxDifference(array: number[]) {
  const min = Math.min(...array);
  const max = Math.max(...array);
  return max - min;
}

let ARR = [
  [1, 2, 1, 24],
  [8, 11, 9, 4],
  [7, 0, 7, 27],
  [7, 4, 28, 14],
  [3, 10, 26, 7],
];

 let matrex = (arr: number[][]) => {
  let output = "";
  // for (let i = 0; i < arr.length; i++) {
  //     output += 'row ' + i + '\n'
  //     for (let j = 0; j < arr[i].length; j++) {
  //         output += arr[i][j]
  //         if ((arr[arr.length - 1])) output += '\n'
  //     }
  // }
  let lastIdx = arr.length - 1;
  for (let array of arr) {
    output += "row " + arr.indexOf(array) + "\n";
    for (let element of array) {
      output += element + "\n";
      // if(arr.indexOf(array) === lastIdx && array )
    }
  }
  return output;
}; 

/* Q2. Given the following array:

const ARR = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];
Create the following output:

row 0 
 1 
 2 
 1
 24
row 1
 8 
 11 
 9
 4
row 2
 ...
(and so on) */

ARR = [
  [1, 2, 1, 24],
  [8, 11, 9, 4],
  [7, 0, 7, 27],
  [7, 4, 28, 14],
  [3, 10, 26, 7],
];


function printArray(array: number[][]) {
  let result = "";
  for (let i = 0; i < array.length; i++) {
    const row = array[i];
    result += `row ${i} \n`;
    for (let j = 0; j < row.length; j++) {
      const item = row[j];
      result += ` ${item}`;
      if (!(j === row.length - 1 && i === array.length-1)) result += "\n"
    }
  }
  return result
}

console.log(printArray(ARR));
line()
let obj1 = {
  name: "aghy",
  grades: {
    math: 7,
    history: 90
  },
  avgGrade: function(){
    const grades = Object.values(this.grades)
    let total = 0
    for (const grade of grades) {
      total += grade
    }
    return total / grades.length
  }
}

function recursiveCopy(any:any){
  if(typeof any === "object" && any !== null){
    const copy = {...any}
    for (const key in copy) {
      if(typeof copy[key] === "object") copy[key] = recursiveCopy(copy[key])
    }
    return copy
  }else{
    return any
  }
}

let objWithRecCopy = recursiveCopy(obj1)
let objWithJson = JSON.parse(JSON.stringify(obj1))
let objWithSpread = {...obj1}
let objAssign = Object.assign({}, obj1)

obj1.grades.math = 90

console.log(obj1)
console.log(objWithSpread);
console.log(objWithJson);
console.log(objAssign)






console.log(objWithRecCopy);
