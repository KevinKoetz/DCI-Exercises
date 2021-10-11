const l = (...para) => console.log(...para);
const line = (() => {
  let num = 1;
  return () => l("_____________________" + num++ + "_____________________");
})();

/**
 * 01
 * Create a function that accepts 2 arrays and returns an array with
 * the different items between those 2 arrays
 * example
 * diffArray(["grass", "dirt", "pink wool", "dead shrub"],  ["grass", "dirt", "dead shrub"]) should return ["pink wool"]
 *
 * diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]) should return [4]
 */

const diffArray = (arr1, arr2) => {
  result = [];

  for (const e1 of arr1) {
    if (!arr2.includes(e1)) result.push(e1);
  }

  for (const e2 of arr2) {
    if (!arr1.includes(e2)) result.push(e2);
  }
  return result;
};
line();
l(
  diffArray(
    ["grass", "dirt", "dead shrub"],
    ["grass", "dirt", "pink wool", "dead shrub"]
  )
);
l(diffArray([1, 2, 3, 4, 5], [1, 2, 3, 5]));

/**
 * 02
 * Write a function that accepts a letter and returns wether this letter
 * is upperCase or not. if It's uppercase should return 'YES'
 * else should return 'NO'
 */
line();
const isUpperCase = (char) => {
  if (char.toUpperCase() === char) return "YES";
  return "NO";
};

l(isUpperCase("n"));
l(isUpperCase("N"));

/**
 * 03
 * Write a function that counts the number of the odd digits in number.
 *
 */
line();
const numOfOddDigits = (num) => {
  const digits = String(num).split("");
  let result = 0;

  for (const digit of digits) {
    if (digit % 2 !== 0) result++;
  }
  return result;
};

l(numOfOddDigits(124213));

/**
 * 04
 * Telephone conversation price calculator
 * Write a program that calculates the price in euros of a
 * telephone conversation.
 * The Price table is:
 * numbers starting from: 0180-1 = 0.039 €/minute
 * numbers starting from: 0180-2 = 0.06 €/call plus 0.42 €/minute
 * numbers starting from: 0180-7 = first 30 seconds free, then 0.14 €/minute
 * numbers starting from 0800 = free of charge.
 * Please note that prices must be format with 2 digits precision
 */
line()
const getConversationPrice = (numberAsStr, durationInSec) => {
  let result;

  switch (true) {
    case numberAsStr.indexOf("0180-1") === 0:
        result = 0.039 * (durationInSec / 60);
      break;
    case numberAsStr.indexOf("0180-2") === 0:
        result = 0.42 * (durationInSec / 60) + 0.06;
      break;
    case numberAsStr.indexOf("0180-7") === 0:
        result = durationInSec > 30 ? 0.14 * ((durationInSec - 30) / 60) : 0;
      break;
    case numberAsStr.indexOf("0800") === 0:
        result = 0
      break;
  }
  return result.toFixed(2)
};

l(getConversationPrice("0180-1", 60))
l(getConversationPrice("0180-2", 60))
l(getConversationPrice("0180-7", 60))
l(getConversationPrice("0800", 60))

/**
 * 05
 * Write a function that accepts an array with items followed by one or more
 * arguments. The function should return another array that doesn't include
 * any of the elements that have the same values as in the arguments that
 * come after the array
 * Examples:
 * clearArray([1, 2, 3, 1, 2, 3], 2, 3) should return [1, 1]
 * clearArray([1, 2, 3, 5, 1, 2, 3], 2, 3) should return [1, 5, 1]
 * clearArray([3, 5, 1, 2, 2], 2, 3, 5) should return [1]
 * clearArray([2, 3, 2, 3], 2, 3) should return []
 */
line()
const clearArray = (arr, ...args) => arr.filter((el)=>!args.includes(el))

l(clearArray([1, 2, 3, 1, 2, 3], 2, 3))
l(clearArray([1, 2, 3, 5, 1, 2, 3], 2, 3))
l(clearArray([3, 5, 1, 2, 2], 2, 3, 5)) 
l(clearArray([2, 3, 2, 3], 2, 3)) 