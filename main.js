function l(...para) {
  console.log(...para);
}

//Check if two given integer values are in the range 50 to 99 (this includes both 50 and 99). Print true if either of them are in the range.
function checkTwoIntegersBoth(num1, num2) {
  if (num1 >= 50 && num1 <= 99 && num2 >= 50 && num2 <= 99) {
    return true;
  } else {
    return false;
  }
}
l("1.----------");
l(checkTwoIntegersBoth(50, 50));
l(checkTwoIntegersBoth(50, 99));
l(checkTwoIntegersBoth(99, 50));
l(checkTwoIntegersBoth(99, 99));
l(checkTwoIntegersBoth(49, 50));
l(checkTwoIntegersBoth(50, 49));

//Check if three given integer values are in the range 50 to 99 (inclusive). Print true if one or more of them are in the range.
function checkThreeIntegersEither(num1, num2, num3) {
  if (
    (num1 >= 50 && num1 <= 99) ||
    (num2 >= 50 && num2 <= 99) ||
    (num3 >= 50 && num3 <= 99)
  ) {
    return true;
  } else {
    return false;
  }
}
l("2.----------");
l(checkThreeIntegersEither(0, 0, 0));
l(checkThreeIntegersEither(50, 0, 0));
l(checkThreeIntegersEither(0, 50, 0));
l(checkThreeIntegersEither(0, 0, 50));
l(checkThreeIntegersEither(50, 50, 50));
//Declare the variables a, b and c, and give them number values. Check which one out of the three variables has the largest value and print it to the console. Then change the values of the variables to see if your conditional still works.
let a = Math.random() * 20,
  b = Math.random() * 20,
  c = Math.random() * 20;
function max(a, b, c) {
  if (a >= b && a >= c) {
    return a;
  }
  if (b >= a && b >= c) {
    return b;
  }
  if (c >= a && c >= b) {
    return c;
  }
}

//Recursive variant of the max function with works with any number of parameters
function maxRec(...para) {
  if (para.length === 1) return para[0];
  let maxOfRemaining = maxRec(...para.slice(1));
  return para[0] >= maxOfRemaining ? para[0] : maxOfRemaining;
}
l("3.----------");
l(max(2, 5, 9));
l(maxRec(15, 80, 9));
//Create a new string adding "Py" in front of a given string. If the given string begins with "Py" then print the original string.
function addPy(str) {
  return str.indexOf("Py") === 0 ? str : "Py" + str;
}

l("4.----------");
l(addPy("Python"));
l(addPy("thon"));
//Calculate the sum of the two integers. If the sum is in the range 50 to 80, print 65, otherwise print 80.
function sumInRange(a, b) {
  return a + b >= 50 && a + b <= 80 ? 65 : 80;
}
l("5.----------");
l(sumInRange(25, 25));
l(sumInRange(25, 60));
//Check whether the sum of two integers is 8, or whether their difference is 8. If one of these is the case, print true.
function sumOrDifferenceIs8(a, b) {
  let sum = a + b;
  let difference = a - b >= 0 ? a - b : b - a;
  return sum === 8 || difference === 8;
}
l("6.----------");
l(sumOrDifferenceIs8(4, 4));
l(sumOrDifferenceIs8(0, 8));
l(sumOrDifferenceIs8(8, 16));
l(sumOrDifferenceIs8(5, 4));
//Check whether either one of two integers is 15, or if their sum is 15. If one of these is the case, print true.
function inputOrSum15(a, b) {
  let sum = a + b;
  return a === 15 || b === 15 || sum === 15;
}
l("7.----------");
l(inputOrSum15(10, 5));
l(inputOrSum15(15, 5));
l(inputOrSum15(10, 15));
l(inputOrSum15(20, 5));
//Check whether one of two integers is a multiple of 7 or 11. If so, print true.
function eitherIsMultipleOf7Or11(a, b) {
  return a % 7 === 0 || a % 11 === 0 || b % 7 === 0 || b % 11 === 0;
}

l("8.----------");
l(eitherIsMultipleOf7Or11(7, 3));
l(eitherIsMultipleOf7Or11(3, 7));
l(eitherIsMultipleOf7Or11(11, 3));
l(eitherIsMultipleOf7Or11(3, 11));
l(eitherIsMultipleOf7Or11(7, 7));
l(eitherIsMultipleOf7Or11(11, 11));
l(eitherIsMultipleOf7Or11(3, 3));
//Calculate the sum of the two given integers. If the two values are the same, then print triple their sum.
function sumIfdifferent(a, b) {
  return a !== b ? a + b : 3 * (a + b);
}
l("9.----------");
l(sumIfdifferent(5, 4));
l(sumIfdifferent(5, 5));
//Calculate the difference between a specified number and 19. Print double the difference if the specified number is greater than 19.
function differenceFrom19(a) {
  return a > 19 ? 3 * (a - 19) : 19 - a;
}
l("10.----------");
l(differenceFrom19(10));
l(differenceFrom19(20));
//BONUS CHALLENGE: Make a variable for firstName and age and give each variable values. Create an if/else statement to check whether the person's age is less than 13. If so, print "firstName is a child". If the age is equal to or more than 13 and less than 20, print "firstName is a teenager". If the person's age is equal to and more than 20 and less than 30, then print "firstName is a young adult". If none of these conditions apply, print "firstName is a adult".

function printAgeString(age, firstName){
    switch (true) {
        case age < 13:
            l(`${firstName} is child`)
          break;
        case age < 20:
          l(`${firstName} is teenager`)
          break;
        case age < 30:
          l(`${firstName} is young adult`)
          break;
        default:
          l(`${firstName} is adult`)
          break;
      }
}


l("11.----------");
printAgeString(12, "Peter")
printAgeString(13, "Peter")
printAgeString(21, "Peter")
printAgeString(31, "Peter")
//BONUS CHALLENGE: Play around with each of your results, i.e., make sure they are dynamic to different inputs; is there a more efficient way of writing your code?; etc.

