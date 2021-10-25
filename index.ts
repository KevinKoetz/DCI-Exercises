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

const randomNumbers = Array(1000000).fill(null).map(()=>Math.random() * 10000)

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

/////Merge Sort Copied from Web/////////////////////////////////////////////////////////

// JavaScript program for Merge Sort
  
// Merges two subarrays of arr[].
// First subarray is arr[l..m]
// Second subarray is arr[m+1..r]
function merge(arr:number[], l: number, m: number, r: number)
{
    var n1 = m - l + 1;
    var n2 = r - m;
  
    // Create temp arrays
    var L = new Array(n1); 
    var R = new Array(n2);
  
    // Copy data to temp arrays L[] and R[]
    for (var i = 0; i < n1; i++)
        L[i] = arr[l + i];
    for (var j = 0; j < n2; j++)
        R[j] = arr[m + 1 + j];
  
    // Merge the temp arrays back into arr[l..r]
  
    // Initial index of first subarray
    var i = 0;
  
    // Initial index of second subarray
    var j = 0;
  
    // Initial index of merged subarray
    var k = l;
  
    while (i < n1 && j < n2) {
        if (L[i] <= R[j]) {
            arr[k] = L[i];
            i++;
        }
        else {
            arr[k] = R[j];
            j++;
        }
        k++;
    }
  
    // Copy the remaining elements of
    // L[], if there are any
    while (i < n1) {
        arr[k] = L[i];
        i++;
        k++;
    }
  
    // Copy the remaining elements of
    // R[], if there are any
    while (j < n2) {
        arr[k] = R[j];
        j++;
        k++;
    }
}
  
// l is for left index and r is
// right index of the sub-array
// of arr to be sorted */
function mergeSort(arr: number [],l: number, r: number){
    if(l>=r){
        return;//returns recursively
    }
    var m = l+ Math.floor((r-l)/2);
    mergeSort(arr,l,m);
    mergeSort(arr,m+1,r);
    merge(arr,l,m,r);
}

/////////////////////////////////////////////////////////////////////



/* console.time("sortNumbers")
const arr1 = sortNumbers(randomNumbers)
console.timeEnd("sortNumbers") */

/* console.time("sortNumbersBinary")
const arr2 = sortNumbersBinary(randomNumbers)
console.timeEnd("sortNumbersBinary") */

/* console.time("sortNumbersBubble")
const arr3 = sortNumbersBubble(randomNumbers)
console.timeEnd("sortNumbersBubble") */

console.time("sort Method")
const newarr = [...randomNumbers]
const arr4 = newarr.sort((a,b)=>a-b)
console.timeEnd("sort Method")

console.time("Merge Sort")
const newarr2 = [...randomNumbers]
mergeSort(newarr2, 0, newarr2.length - 1 )
console.timeEnd("Merge Sort")

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

console.log(checkAllEqual(arr1, arr2, newarr2, arr4));
