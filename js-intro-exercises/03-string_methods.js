/**
 * Exercise 01
 * Name: String length
 * Write a function named "length" that accepts a string and returns the number of characters in it
 * example: length('bible') should return 5
 */

function length(str) {
    return str.length;
}

console.log(length("123"));

/**
 * Exercise 02
 * Write a function toCase that takes a string and returns that string in lowercase and uppercase 
 * with - as delimiter.
 * Example: toCase('Mthatha') should return 'mthatha-MTHATHA'.
 */

function toCase(str) {
    return str.toLowerCase() + "-" + str.toUpperCase(); 
}

console.log(toCase("test"));

/**
 * Exercise 03
 * Write a function shortcut that takes two strings and returns the initial letters of theses strings.
 * Example: shortcut('Amnesty', 'International') should return 'AI'
 */

function shortcut(s1, s2) {
    return s1[0] + s2[0];
}

console.log(shortcut('Amnesty', 'International'));

/**
 * Exercise 04
 * Write a function firstChar, which returns the first character that is not a space 
 * when a string is passed.
 * Example: firstChar(' Rosa Parks ') should return 'R'.
 */

function firstChar(s) {
    return s.trim()[0];
}

console.log(firstChar(' Rosa Parks '));

/**
 * Exercise 05
 * Write a function indexOfIgnoreCase taking two strings and determining the 
 * first occurrence of the second string in the first string. 
 * The function should be case insensitive.
 * Example: indexOfIgnoreCase('bit','it') and indexOfIgnoreCase('bit','IT') should return 1
 */

function indexOfIgnoreCase(str, test) {
    return str.toLowerCase().indexOf(test.toLowerCase());
}

console.log(indexOfIgnoreCase('bit','it'));
console.log(indexOfIgnoreCase('bit','IT'));

/**
 * Exercise 06
 * Write a function firstWord, taking a string and returning the first word in that string. 
 * The first word are all characters up to the first space.
 * Example: firstWord('see and stop') should return 'see'
 */

function firstWord(str) {
    return str.split(" ")[0];
}

console.log(firstWord('see and stop'));

/**
 * Exercise 07
 * Write a function normalize, that replaces '-' with '/' in a date string.
 * Example: normalize('20-05-2017') should return '20/05/2017'
 */

function normalize(date) {
    return date.includes("-") ? normalize(date.replace("-","/")) : date;
}

console.log(normalize('20-05-2017'));

/**
 * Exercise 08
 * Write a JavaScript function to split a string and convert it into an array of words
 */

function split(str) {
    return str.split(" ");
}

console.log(split("This is a sentence"));

/**
 * Exercise 09
 * What would following code return?
 * console.log(typeof typeof 1);
 * Explain your answer
 */

//typeof returns the type as a string so typeof 1 = "number" and typeof "number" = string
console.log(typeof typeof 1 === "string");

/**
 * Exercise 10
 * Write a function named getExtension that accepts a filename string 
 * and returns the extension of that filename
 */

function getExtension(filename) {
    return filename.slice(filename.lastIndexOf(".") + 1)
}

console.log(getExtension("main.js"));