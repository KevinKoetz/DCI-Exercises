/**
 * 01 Easy
 * Repeat a given string str (first argument) for num times (second argument).
 * Return an empty string if num is not a positive number
 * Examples:
 * ("*", 3) should return the string ***
 * ("abc", 3) should return the string abcabcabc
 * ("abc", -2) should return an empty string ("")
 */

function repeat(str, times){
    let result = "";
    for(let i = times; i > 0; i--){
        result+=str;
    }
    return result;
}

console.log(repeat("*", 3));
console.log(repeat("abc", 3));
console.log(repeat("abc", -2));

/**
 * 02 Easy
 * Write a function addTo that accepts a number as a parameter 
 * and adds all natural numbers smaller or equal than the parameter. 
 * The result is to be returned.
 * Example: addTo(3) should return 1+2+3 = 6.
 */

 function addTo(num){
     let sum = 0;
     for(let i = num; i > 0; i--) sum+=i;
     return sum
}

//Recursive Version
function addToRec(num){
    return num === 1 ? 1 : addTo(num-1) + num;
}

console.log(addTo(3));

/**
 * 03 Easy
 * Write a function spaces that takes a natural number n and 
 * returns a string of n dashes.
 * Example: spaces(1) should return '-'
 */

function spaces(num){
    let result = "";
    for(let i = 0; i < num; i++){
        result+="-";
    }
    return result
}
console.log(spaces(1));
console.log(spaces(3));

/**
 * 04 medium
 * Write a function lcm that takes two natural numbers and 
 * calculates their least common multiple (lcm). 
 * The lcm of two natural numbers a und b is the smallest natural number 
 * that is divisible by a and b.
 * Example: lcm(4, 6) should return 12
 * Hint: use a do while loop
 */

function lcm(a,b) {
    let tmp = a > b ? a : b;
    while(a !== 0 && b !== 0 && tmp !== Infinity){
        if(tmp % a === 0 && tmp % b === 0) return tmp;
        tmp+= a > b ? a : b
    }
    return NaN
}

console.log(lcm(6,4));

/**
 * 05 Medium
 * Write a function isPrime that checks whether a passed number is prime.
 * Prime number is the one that is divisible only by itself and 1 
 * (e.g. 2, 3, 5, 7, 11)
 * In case of a prime number it should return true, otherwise false.
 * Example: isPrime(7) should return true and isPrime(8) should return false
 */

function isPrime(num) {
    for(let i = Math.floor(num/2); i>1; i--){
        if(num % i === 0) return false;
    }
    return true;
}

console.log(isPrime(11));

/**
 * 6 medium
 * Create your own trim() function. That is, a function that accepts a string and
 * searches for white spaces from the begining and from the end of the string and removes them
 * The function should return the 'cleaned' string
 */

function trim(str){
    let tmpArr = str.split("")
}

/**
 * 7 Hard
 * Write a function to construct the following pattern, using a nested for-loop.
*
**
***
****
*****
******
 */