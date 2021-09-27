/**
 *  01
 *  Write a function which accepts 2 numbers and checks whether both numbers are
 *  in range 40..60 or in the range 70..100 inclusive
 */

function checkNumbers(a, b) {
  return (
    ((a >= 40 && a <= 60) || (a >= 70 && a <= 100)) &&
    ((b >= 40 && b <= 60) || (b >= 70 && b <= 100))
  );
}

console.log(checkNumbers(40, 0));
console.log(checkNumbers(40, 40));
console.log(checkNumbers(40, 70));
console.log(checkNumbers(70, 0));
console.log(checkNumbers(70, 70));
console.log(checkNumbers(70, 40));
console.log(checkNumbers(0, 40));
console.log(checkNumbers(0, 70));
console.log(checkNumbers(0, 0));

/**
 * 02
 * Write a function to compute the difference between a specified number and 19.
 * Returns triple their absolute difference if the specified number is greater than 19
 */

function differenceFrom19(num) {
  return num > 19 ? (num - 19) * 3 : 19 - num;
}

function differenceFrom19var2(num) {
  if (num > 19) {
    return (num - 19) * 3;
  } else {
    return 19 - num;
  }
}

/**
 * 03
 * Write a JavaScript program to check two given numbers
 * and return true if one of the numbers is 50 or if their sum is 50
 */

function fifty(a, b) {
  return !(a - 50) || !(b - 50) || !(a + b - 50);
}

function fifty2(a, b) {}

console.log("fifty");
console.log(fifty(0, 0));
console.log(fifty(50, 0));
console.log(fifty(0, 50));
console.log(fifty(25, 25));
console.log(fifty(100, 100));

/**
 * 04
 * Write a function to check from two given integers,
 * and returns 'Yes' if one is positive and another one is negative
 * or 'No' if both are positive/negative
 */

function checkSign(a, b) {
  return a * b < 0 ? "yes" : "no";
}

console.log("checkSign");
console.log(checkSign(1, 1));
console.log(checkSign(-1, -1));
console.log(checkSign(1, -1));
console.log(checkSign(-1, 1));

/**
 * 05
 * Write a function to create a new string adding "Py" in front of a given string.
 * If the given string begins with "Py" then return the original string
 */

function addPy(str) {
  return str.indexOf("Py") === 0 ? str : "Py" + str;
}

console.log(addPy("Python"));
console.log(addPy("thon"));

/**
 * 06
 * Write a function to create a new string from a given string taking the last 3 characters
 * and added at both the front and back.
 * The string length must be 3 or more
 */

function padString(str) {
  if (str.length < 3) {
    return undefined;
  }
  return str.slice(-3) + str + str.slice(-3);
}

console.log("padString");
console.log(padString("Python"));

/**
 * 07
 * Write a function that accepts 3 numbers and returns the biggest of them
 */

function max(...nums) {
  return Math.max(...nums);
}

console.log(max(1, 2, 5));

/**
 * 08
 * Write a function to find a value which is nearest to 100
 * from two different given integer values
 */

function nearestTo100(a, b) {
  return Math.abs(100 - a) <= Math.abs(100 - b) ? a : b;
}

console.log(nearestTo100(105, 106));
console.log(nearestTo100(105, 95));

/**
 * 09
 * Write a function to check whether a specified character exists within
 * the 2nd to 4th position in a given string
 * E.g.
 * "Console" and "o" should return true
 * "Console" and "e" should return false
 */

function isIn2ndTo4th(str, char) {
  return str.slice(1, 4).includes(char);
}

console.log(isIn2ndTo4th("Console", "o"));
console.log(isIn2ndTo4th("Console", "n"));
console.log(isIn2ndTo4th("Console", "s"));
console.log(isIn2ndTo4th("Console", "C"));
console.log(isIn2ndTo4th("Consxle", "x"));

/**
 * 10 - could be challenging
 * Write a function to check whether the last digit of the three given positive integers is same
 */

function haveSameLastDigit(...nums) {
    if (nums.length === 0) {
        return undefined;
    }
  for (let i = 1; i < nums.length; i++) {
      const e0 = String(nums[i-1]);
      const e1 = String(nums[i]);

      if(e0[e0.length - 1] !== e1[e1.length - 1]) return false;
      
  }
  return true;
}

console.log(haveSameLastDigit(1,11, 1242321));