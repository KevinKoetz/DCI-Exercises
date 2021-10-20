"use strict";
const l = (...args) => console.log(...args);
const line = (() => {
    let num = 1;
    return () => l(`_______________${num++}_______________`);
})();
/* 1. Where Have My Four Letter Words Gone?
Create a function that takes an array of strings.
Return all words in the array that are exactly four letters.

Examples:

isFourLetters(["John", "James", "Jack", "Jeanne"]) ➞ ["John", "Jack"]
isFourLetters(["Tomato", "Corn", "Lettuce"]) ➞ ["Corn"]
isFourLetters(["Dog", "Cat", "Deer"]) ➞ ["Deer"]
*/
line();
const isFourLetters = (arr) => arr.filter((item) => item.length === 4);
l(isFourLetters(["John", "James", "Jack", "Jeanne"]));
l(isFourLetters(["Tomato", "Corn", "Lettuce"]));
l(isFourLetters(["Dog", "Cat", "Deer"]));
/* 2. Months. Create a function that takes a number (from 1 to 12) and return its corresponding month name as a string.

Examples:

monthName(3) ➞ "March"
monthName(12) ➞ "December"
monthName(6) ➞ "June" */
line();
const monthName = (num) => [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
][num - 1];
l(monthName(3));
l(monthName(12));
l(monthName(6));
/* 3. Amplify the Multiples of 4. Create a function that takes an integer and returns an array of integers ascending from 1 to the given number, where:

For each number in the array that can be evenly divided by 4, that number is amplified by 10 (i.e. return 10 times the number).
If the number cannot be divided evenly by 4, simply return the number.
The given integer will always be equal to or greater than 1.
Include the given number (the number in the parameters).
Examples:

amplify(4) ➞ [1, 2, 3, 40]
amplify(3) ➞ [1, 2, 3]
amplify(25) ➞ [1, 2, 3, 40, 5, 6, 7, 80, 9, 10, 11, 120, 13, 14, 15, 160, 17, 18, 19, 200, 21, 22, 23, 240, 25] */
line();
const amplify = (num) => Array(num)
    .fill(null)
    .map((item, index) => (index + 1) % 4 === 0 ? (index + 1) * 10 : index + 1);
l(amplify(4));
l(amplify(3));
l(amplify(25));
/* 4. One is not like the others... Create a function that takes an array of numbers and return the number that's unique.

Examples:

unique([3, 3, 3, 7, 3, 3]) ➞ 7
unique([0, 0, 0.77, 0, 0]) ➞ 0.77
unique([0, 1, 1, 1, 1, 1, 1, 1]) ➞ 0 */
line();
const unique = (arr) => arr.find((item, index, arr) => !arr.slice(index + 1).includes(item));
l(unique([3, 3, 3, 7, 3, 3]));
l(unique([0, 0, 0.77, 0, 0]));
l(unique([0, 1, 1, 1, 1, 1, 1, 1]));
/* 5. Word Ranking. Create a function that takes a string of words and returns the highest scoring word.
Each letter of a word scores points according to it's position in the alphabet: a = 1, b = 2, c = 3, etc.

The returned string should only contain alphabetic characters (a-z).
Preserve case in the returned string (see 4th example above).
Examples:

wordRank("The quick brown fox.") ➞ "brown"
wordRank("Nancy is very pretty.") ➞ "pretty"
wordRank("Check back tomorrow, man!") ➞ "tomorrow"
wordRank("Today is Wednesday.") ➞ "Wednesday" */
line();
const wordRank = (sentence) => {
    var _a, _b;
    const words = sentence.split(" ");
    const getScore = (word) => {
        const lowerWord = word.toLowerCase();
        const alphaChars = lowerWord.match(/[a-z]/g);
        const wordScore = alphaChars
            ? alphaChars.reduce((total, char) => { var _a; return total + ((_a = char.charCodeAt(0)) !== null && _a !== void 0 ? _a : 0); }, 0)
            : 0;
        return wordScore;
    };
    const wordScores = words.map((word) => getScore(word));
    const highestScore = Math.max(...wordScores);
    const indexOfHighestWord = wordScores.indexOf(highestScore);
    return (_b = (_a = words[indexOfHighestWord].match(/[a-zA-Z]/g)) === null || _a === void 0 ? void 0 : _a.join("")) !== null && _b !== void 0 ? _b : "";
};
l(wordRank("The quick brown fox."));
l(wordRank("Nancy is very pretty."));
l(wordRank("Check back tomorrow, man!"));
l(wordRank("Today is Wednesday."));
/* 6. c4n y0u r34d th15? Create a function that takes a string as an argument and returns a coded (h4ck3r 5p34k) version of the string.
NB: for your program to work properly, the function should replace all 'a's with 4, 'e's with 3, 'i's with 1, 'o's with 0, and 's's with 5.

Examples:

hackerSpeak("javascript is cool") ➞ "j4v45cr1pt 15 c00l"
hackerSpeak("programming is fun") ➞ "pr0gr4mm1ng 15 fun"
hackerSpeak("become a coder") ➞ "b3c0m3 4 c0d3r" */
line();
const hackerSpeak = (sentence) => {
    const map = {
        a: 4,
        e: 3,
        i: 1,
        o: 0,
        s: 5,
    };
    return sentence
        .split("")
        .map((char) => (char in map ? map[char] : char))
        .join("");
};
l(hackerSpeak("javascript is cool"));
l(hackerSpeak("programming is fun"));
l(hackerSpeak("become a coder"));
/* 1. Is it Symmetrical? Create a function that takes a number as an argument and returns true or false depending on
whether the number is symmetrical or not. NB: A number is symmetrical when it is the same as its reverse.

Examples:

isSymmetrical(7227) ➞ true
isSymmetrical(12567) ➞ false
isSymmetrical(44444444) ➞ true
isSymmetrical(9939) ➞ false
isSymmetrical(1112111) ➞ true */
line();
const isSymmetrical = (num) => Number(num.toString().split("").reverse().join("")) === num;
l(isSymmetrical(7227));
l(isSymmetrical(12567));
l(isSymmetrical(44444444));
l(isSymmetrical(9939));
l(isSymmetrical(1112111));
/* 2. snake_case ➞ camelCase Create a function toCamelCase() that takes a single string in snake_case and converts it into camelCase.

Examples:

toCamelCase("hello_world") ➞ "helloWorld"
toCamelCase("javascript_is_fun") ➞ "javascriptIsFun" */
line();
const snakeToCamelCase = (str) => str
    .split("_")
    .map((word, index) => index > 0 ? word[0].toUpperCase() + word.slice(1) : word)
    .join("");
l(snakeToCamelCase("hello_world"));
l(snakeToCamelCase("javascript_is_fun"));
/* 3. Pig Latin Translation. Create a function that takes a string of words and moves the first letter of each word to the end of it,
then adds 'ay' to the end of the word. This is a basic form of "Pig Latin".

Move the first letter of each word to the end of the word.
Add "ay" to the end of the word.
Words starting with a vowel (A, E, I, O, U) append "way" to the end instead.
Extra Practice

Preserve proper capitalization as in the examples below.
Examples:

pigLatin("Cats are great pets.") ➞ "Atscay areway reatgay etspay."
pigLatin("Tom got a small piece of pie.") ➞ "Omtay otgay away allsmay iecepay ofway iepay."
pigLatin("He told us a very exciting tale.") ➞ "Ehay oldtay usway away eryvay excitingway aletay." */
line();
const pigLatin = (sentence) => {
    const words = sentence.split(" ");
    const pigWords = words.map((word) => {
        var _a, _b;
        const lowerCaseWordWithoutSpecialChars = (_b = (_a = word.toLowerCase().match(/[a-z]/g)) === null || _a === void 0 ? void 0 : _a.join("")) !== null && _b !== void 0 ? _b : "";
        let pigWord;
        if (isVowel(word[0].toLowerCase())) {
            pigWord = lowerCaseWordWithoutSpecialChars + "way";
        }
        else {
            pigWord =
                lowerCaseWordWithoutSpecialChars.slice(1) +
                    lowerCaseWordWithoutSpecialChars[0] +
                    "ay";
        }
        if (endsWithSpecialChar(word))
            pigWord = pigWord + word[word.length - 1];
        if (isCapital(word))
            pigWord = pigWord[0].toUpperCase() + pigWord.slice(1);
        if (startsWithSpecialChar(word))
            pigWord = word[0] + pigWord;
        return pigWord;
    });
    return pigWords.join(" ");
};
function isCapital(word) {
    return word[0] === word[0].toUpperCase();
}
function isVowel(char) {
    const vowels = ["a", "e", "i", "o", "u"];
    return vowels.includes(char);
}
function endsWithSpecialChar(word) {
    return word[word.length - 1].match(/[a-z]/g) === null;
}
function startsWithSpecialChar(word) {
    return word[0].match(/[a-zA-Z]/g) === null;
}
l(pigLatin("Cats are great pets, which can help prevent deseases. Especially 'Mikey Mouse' can confirm this!"));
l(pigLatin("Tom got a small piece of pie."));
l(pigLatin("He told us a very exciting tale."));
