const l = (...para) => console.log(...para);
const line = (() => {
  let num = 1;
  return () => l(num++ + "_____________________");
})();

/**
 * 01 easy
 * Write a JavaScript function to generate an array between two integers of 1 step length.
 * Test Data :
 * console.log(rangeBetween(4, 7));
 * [4, 5, 6, 7]
 * console.log(rangeBetween(-4, 7));
 * [-4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7]
 */
line();
const rangeBetween = (n1, n2) => {
  let arr = [];
  for (let i = n1; i <= n2; i++) arr.push(i);
  return arr;
};

l(rangeBetween(4, 7));
l(rangeBetween(-4, 7));

/**
 * 02 easy medium
 * Write a JavaScript function to generate an array of specified length,
 * filled with integer numbers, increase by one from starting position.
 * console.log(arrayRange(1, 4));
 * [1, 2, 3, 4]
 * console.log(arrayRange(-6, 4));
 * [-6, -5, -4, -3]
 */
line();
const arrayRange = (start, length) => {
  let arr = [];
  for (let i = 0; i < length; i++) arr.push(start + i);
  return arr;
};
l(arrayRange(1, 4));
l(arrayRange(-6, 4));

/**
 * 03 easy medium
 * Write a JavaScript function to switch positions of one array element.
 * The function should accept the array, the current position and the new position
 * console.log(moveIt([10, 20, 30, 40, 50], 0, 2));
 * [30, 20, 10, 40, 50]
 * console.log(moveIt([10, 20, 30, 40, 50], 1, 4));
 * [10, 50, 30, 40, 20]
 */
line();

const moveIt = (arr, oldPos, newPos) => {
  const tmp = arr[newPos];
  arr[newPos] = arr[oldPos];
  arr[oldPos] = tmp;
  return arr;
};

l(moveIt([10, 20, 30, 40, 50], 0, 2));
l(moveIt([10, 20, 30, 40, 50], 1, 4));

/**
 * 04 easy
 * Write a function that accepts a string and and number of times that this string will fill
 * and return an array
 * example fillArray('some string', 4) should return
 * ['some string', 'some string', 'some string', 'some string']
 */
line();
const fillArray = (str, length) => {
  let arr = [];
  for (let i = 0; i < length; i++) arr.push(str);
  return arr;
};

l(fillArray('some string', 4))

/**
 * 05 easy
 * Write a JavaScript function to get a random item from an array
 * const items = [254, 45, 212, 365, 2543];
 * console.log(randomItem(items));
 */
line()
const randomItem = (array) => array[Math.floor(Math.random() * array.length)]
l(randomItem([254, 45, 212, 365, 2543]))

/**
 * 06 easy
 * Write a function to find if an array contains a specific element
 * checkItem([2, 5, 9, 6], 5) should return true
 * checkItem([2, 5, 9, 6], 1) should return false
 */

const checkItem = (arr, item) => {
    for (const el of arr) {
        if(el === item) return true;
    }
    return false;
}

l(checkItem([2, 5, 9, 6], 5))
l(checkItem([2, 5, 9, 6], 1))

/**
 * 07 medium
 * Write a function which merges two arrays and removes all duplicates elements
 * Example:
 * array1 = [1, 2, 3];
 * array2 = [2, 30, 1];
 * mergeArrays(array1, array2) should return [3, 2, 30, 1] (the items can be with any order)
 */
line()

const mergeArrays = (arr1, arr2) => {
    let result = []
    for (const el of arr1) {
        result.push(el)
    }

    for (const el of arr2) {
        if(!result.includes(el)) result.push(el);
    }

    return result;
}

l(mergeArrays([1, 2, 3], [2, 30, 1]))

/**
 * 08 easy medium
 * Write a JavaScript function to remove. 'null', '0', '""', 'false',
 * 'undefined' and 'NaN' values from an array.
 * Sample array: [NaN, 0, 15, false, -22, '',undefined, 47, null]
 * Expected result: [15, -22, 47]
 */
line()
const removeFalsy = arr => arr.reduce((prev,curr)=>{
    if(curr) prev.push(curr);
    return prev;
},[])

l(removeFalsy([NaN, 0, 15, false, -22, '',undefined, 47, null]))