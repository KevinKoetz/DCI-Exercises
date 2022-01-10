function l(...para) {
  console.log(...para);
}

/**
 * 01 easy
 * Write a function that accepts two integers and returns the larger
 */
function max(a, b) {
  return a > b ? a : b;
}

l(max(5, 9));
l(max(15, 9));

/**
 * 02 Easy
 * Write a function that will iterate from 0 to 15.
 * For each iteration, it will check if the current number is odd or even,
 * and display a message to the screen
 */

function iterateTo15() {
  for (let index = 0; index <= 15; index++) {
    l(index % 2 === 0 ? `${index} is even` : `${index} is odd`);
  }
}

//Recursive Version that iterates to the specified number and prints out the same string
function iterateToRec(num) {
  num > 0 && iterateToRec(num - 1);
  l(num % 2 === 0 ? `${num} is even` : `${num} is odd`);
}

iterateTo15();
iterateToRec(15);

/**
 * 03 Medium
 * Write a function that accepts an array of marks of students and computes
 * and prints, the class average mark:
 * David	80
 * Vinoth	77
 * Divya	88
 * Ishitha	95
 * Thomas	68
 * Then, calculate and print the grade for each student
 * Grades should be calculated based on these values:
 * Range	Grade
 * <60	F
 * <70	D
 * <80	C
 * <90	B
 * <100	A
 * Use a switch statement to solve this one
 */

let input = [
  { name: "David", mark: 80 },
  { name: "Vinoth", mark: 77 },
  { name: "Divya", mark: 80 },
  { name: "Ishitha", mark: 95 },
  { name: "Thomas", mark: 68 },
];

function calculateGrades(persons) {
  let avg = 0;
  for (let index = 1; index <= persons.length; index++) {
    const mark = persons[index - 1].mark;
    avg = (avg * (index - 1) + mark) / index;
  }
  l(`Class average mark is ${avg}`);
  for (const person of persons) {
    let grade =
      person.mark < 60
        ? "F"
        : person.mark < 70
        ? "D"
        : person.mark < 80
        ? "C"
        : person.mark < 90
        ? "B"
        : person.mark < 100
        ? "A"
        : "You cheated!";
    l(`${person.name}'s grade is ${grade}`);
  }
}

calculateGrades(input);

/**
 * 04 Easy - medium
 * Write a function to sum the multiples of 3 and 5 under 1000.
 */

function sumOfMultiples(){
    let sum = 0;
    for (let index = 0; index < 1000; index++) {
        sum = index % 3 === 0 || index % 5 === 0 ? sum + index : sum;
    }
    return sum
}

l(sumOfMultiples())


/**
 * 05 easy-medium
 * Create a function to find the longest word in a string and
 * return the number of characters of that word.
 * Example: in "What if we try a super-long word such as otorhinolaryngology"
 * the answer is 19
 * "Google do a barrel roll" should return 6
 */

 function longestWord(str){
    let longest;
    for (const word of str.split(" ")) {
        longest = longest === undefined || word.length > longest ? word.length : longest;
    }
    return longest;
}

function longestWordSort(str){
    return str.split(" ").sort((a,b)=> b.length - a.length)[0].length
}

l(longestWord("What if we try a super-long word such as otorhinolaryngology"))
l(longestWordSort("What if we try a super-long word such as otorhinolaryngology"))

/**
 * 06 easy
 * Write a function equals that checks two values for strict equality.
 * If the two values are equal, the string 'EQUAL' should be returned.
 * If they are unequal, you should get 'UNEQUAL'.
 * Example: equals(1, 1) should return 'EQUAL' and equals(1, 2)
 * should return 'UNEQUAL'.
 */

function equals(a,b){
    return a === b ? "EQUAL" : "UNEQUAL"
}

l(equals(1, 1))
l(equals(1, 2))
l(equals(1, "1"))

/**
 * 07 medium
 * Write a function to check if a string
 * ends with the given target string
 * Examples:
 * ("Bastian", "n") should return true
 * ("Open sesame", "same") should return true
 */

function endsWith1(str, end){
    return str.split("").reverse().join("").indexOf(end.split("").reverse().join("")) === 0;
}

function endsWith2(str, end){
    return str.slice(-end.length) === end;
}

l(endsWith1("Bastian", "n")) //true
l(endsWith1("Open sesame", "same")) //true
l(endsWith1("Open sesam", "same")) //false

l(endsWith2("Bastian", "n")) //true
l(endsWith2("Open sesame", "same")) //true
l(endsWith2("Open sesam", "same")) //false


/**
 * 08 Easy - medium
 * Create a function that accepts a string and the number of characters to keep
 * from the begining of that string. The rest characters should be discarded
 * and in their place should be added the '...' ending
 * Examples:
 * ("A-tisket a-tasket A green and yellow basket", 8)
 * should return the string A-tisket...
 * ("Peter Piper picked a peck of pickled peppers", 11)
 * should return the string Peter Piper...
 * ("A-", 1) should return the string A...
 */

function theEnd(str, num){
    return str.slice(0,num) + "...";
}

l(theEnd("A-tisket a-tasket A green and yellow basket", 8))
l(theEnd("Peter Piper picked a peck of pickled peppers", 11))
l(theEnd("A-", 1))

/**
 * 09 Easy
 * Write a function addWithSurcharge that adds two amounts with surcharge.
 * For each amount less than or equal to 10, the surcharge is 1.
 * For each amount greater than 10, the surcharge is 2.
 * Example: addWithSurcharge(5, 15) should return 23
 */

function addWithSurcharge(a,b){
    let sum = a + b;
    if(a <= 10) sum++
    if(b <= 10) sum++
    if(a > 10) sum = sum+2
    if(b > 10) sum = sum+2
    return sum
}

l(addWithSurcharge(5, 15))

/**
 * 10 medium
 * Write a function to check if given string is uppercase is not
 */

function isUppercase(str) {
    return str === str.toUpperCase()
}

l(isUppercase("Hello World")) //false
l(isUppercase("HELLO WORLD")) //true

/**
 * 11 easy
 * Write a function to check if a given argument is a number
 */

function isNumber(arg){
    return !Number.isNaN(arg) && typeof arg === "number"
}

l(isNumber(1))//true
l(isNumber(0xF)) //true
l(isNumber("1"))//false
l(isNumber(""))//false
l(isNumber(NaN))//false
l(isNumber(null))//false
l(isNumber(undefined))//false
l(isNumber(1n))//false

/**
 * 12 easy - medium
 * Write a function digitsum that calculates the digit sum of an integer.
 * The digit sum of an integer is the sum of all its digits.
 * Example: digitsum(192) should return 12
 */

function digitSum(num){
    return num.toString().split("").map(e => parseInt(e)).reduce((p,c)=>p+c)
}

l(digitSum(192))

/**
 * 13 easy - medium
 * Write a function that converts the case of all characters of a string
 * Example:
 * sIoJK should become SiOjk
 * aaEErt should become AAeeRT
 */

function convertCase(str){
    return str.split("").map(e => isUppercase(e) ? e.toLowerCase() : e.toUpperCase()).join("")
}

l(convertCase("sIoJK"));
l(convertCase("aaEErt"));

/**
 * 14 easy - medium
 * Write a function that finds the common elements between 2 given arrays.
 * Results should be return in array format
 * Example:
 * [1, 2, 3], [1, 2, 4] should return [1, 2]
 * [1, 8, 10], [1, 2, 4] should return [1]
 * [1, 8, 10], [1, 8, 10] should return [1, 8, 10]
 */

function intersect(arr1, arr2){
    let intersection = []
    for (const el of arr1) {
        if (arr2.includes(el)) {
            intersection.push(el)
        }
    }
    return intersection
}

l(intersect([1, 2, 3], [1, 2, 4]))
l(intersect([1, 8, 10], [1, 2, 4]))
l(intersect([1, 8, 10], [1, 8, 10]))

/**
 * 15 easy
 * Write your own 'includes' function for an array
 * The function should accept an array and another variable
 * (Implement it without using the .includes method)
 * Example:
 * [1, 2, 3, 4, 5] and 5 should return true
 * [1, 2, 3, 4, 5] and 6 should return false
 */

function includes(arr, check){
    for (const el of arr) {
        if(el === check) return true
    }
    return false;
}

l(includes([1, 2, 3, 4, 5], 5))
l(includes([1, 2, 3, 4, 5], 6))