const l = (...args: any) => console.log(...args);
const line = (() => {
  let num = 1;
  return () => l(`_______________${num++}_______________`);
})();

/* Write pseudo-code for the following exercises on pen and paper.

1. Lowest to Highest
Given an array of numbers from 1-9:

[4, 2, 5, 3, 9, 7, 1, 8, 2, 6];
Sort the array from lowest value to highest. */

const randomNumbers = Array(100000).fill(null).map(()=>Math.random() * 10000)

function sortNumbersBubble(arr: number[]):number[]{
  const sortedArray: number[] = [...arr];
  let swappedItems = false
  do{
    swappedItems = false
    for(let i = 0; i < sortedArray.length; i++){
      if(sortedArray[i] > sortedArray[i+1]){
        const tmp = sortedArray[i+1]
        sortedArray[i+1] = sortedArray[i]
        sortedArray[i] = tmp
        swappedItems = true
      }
    }
  }while(swappedItems)
  return sortedArray
}

function sortNumbers(arr: number[]): number[] {
  const sortedArray: number[] = [];
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    insertNumberInSortedArray(sortedArray, element);
  }
  return sortedArray;
}

function sortNumbersBinary(arr: number[]): number[] {
  const sortedArray: number[] = [];
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    insertNumberInSortedArrayBinary(sortedArray, element);
  }
  return sortedArray;
}

function insertNumberInSortedArrayBinary(
  sortedArr: number[],
  number: number
): number[] {
  let lowerBound = 0;
  let upperBound = sortedArr.length;
  let indexToInsert = lowerBound;

  while (lowerBound !== upperBound) {
    if (sortedArr[lowerBound] <= number) {
      lowerBound += Math.ceil((upperBound - lowerBound) / 2);
    } else {
      upperBound = lowerBound;
      lowerBound -= Math.ceil(upperBound / 2);
    }
    indexToInsert = lowerBound;
  }
  /* for (let index = 0; index < sortedArr.length; index++) {
    const element = sortedArr[index];
    if(element <= number) indexToInsert = index+1;
    if(element > number) break;
  } */
  sortedArr.splice(indexToInsert, 0, number);
  return sortedArr;
}

function insertNumberInSortedArray(
  sortedArr: number[],
  number: number
): number[] {
  let lowerBound = 0;
  let upperBound = sortedArr.length;
  let indexToInsert = lowerBound;

  for (let index = 0; index < sortedArr.length; index++) {
    const element = sortedArr[index];
    if (element <= number) indexToInsert = index + 1;
    if (element > number) break;
  }
  sortedArr.splice(indexToInsert, 0, number);
  return sortedArr;
}




console.time("sortNumbers")
const arr1 = sortNumbers(randomNumbers)
console.timeEnd("sortNumbers")

console.time("sortNumbersBinary")
const arr2 = sortNumbersBinary(randomNumbers)
console.timeEnd("sortNumbersBinary")

console.time("sortNumbersBubble")
const arr3 = sortNumbersBubble(randomNumbers)
console.timeEnd("sortNumbersBubble")

console.time("sort Method")
const newarr = [...randomNumbers]
const arr4 = newarr.sort((a,b)=>a-b)
console.timeEnd("sort Method") 

function checkAllEqual(...arrays: any){
  let allEqual = true
  const first = arrays[0]
  for (let index = 0; index < first.length; index++) {
    const element = first[index]
    for(let j = 1; j < arrays.length; j++) {
      if(element !== arrays[j][index]) {
        allEqual = false;
        break
      } 
    }
    if(!allEqual) break
  }
  return allEqual
}

console.log(checkAllEqual(arr1, arr2, arr3, arr4));
