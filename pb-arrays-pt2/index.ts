/* 1. The Greater Numbers. Create a function which accepts two arguments: the first argument being an array of numbers, 
and the second argument being a number. The function should return the elements of the array which are greater than the second argument.

i.e.

findGreatest([3, 4, 5], 4) ➞ 5

findGreatest([10, 20, 30], 12) ➞ 20, 30

findGreatest([0, 10, 3], 4) ➞ 10 */

const findGreater = (numbers: number[], limit: number) => numbers.filter(number => number > limit)

console.log(findGreater([3, 4, 5], 4));
console.log(findGreater([10, 20, 30], 12));
console.log(findGreater([0, 10, 3], 4));


/* 2. For the longest word. Create a function to find the longest word in a given string.

i.e. longestWord("this is a web development course") ➞ "development" */

const longestWord = (str: string) => str.split(" ").reduce((word1, word2) => word1.length >= word2.length ? word1 : word2)

console.log(longestWord("this is a web development course"));

/* 3. Reverse. Create a function to reverse a number.

i.e. reverse(34532) ➞ 23543 */

const reverse = (num: number) => Number(num.toString().split("").reverse().join(""))

console.log(reverse(34532));

/* 4. AEIOU: Vowels. Create a function that takes a string in its parameters and counts the number of vowels (i.e. in English, "a, e, i, o, u") in the string.

i.e. findVowels("this is a string") ➞ 4 */

const findVowels = (str: string) => str.match(/[aeiou]/g)?.length ?? 0;

console.log(findVowels("this is a string"));

/* 5. Missing Number. Create a function that takes an array of all integers between 1 and 10 (excluding one) and returns the missing integer.

Examples:

missingNums([1, 2, 3, 4, 6, 7, 8, 9, 10]) ➞ 5
missingNums([7, 2, 3, 6, 5, 9, 1, 4, 8]) ➞ 10
missingNums([10, 5, 1, 2, 4, 6, 8, 3, 9]) ➞ 7 */

const missingNums = (nums: number[]) => (nums.sort((a,b) => a-b).find((num, index) => num !== index+1) as number - 1) || 10


console.log(missingNums([1, 2, 3, 4, 6, 7, 8, 9, 10]));
console.log(missingNums([7, 2, 3, 6, 5, 9, 1, 4, 8]))
console.log(missingNums([10, 5, 1, 2, 4, 6, 8, 3, 9]))

/* 6. Cubed. Create a function that takes in an array of numbers and returns the sum of its cubes.

Examples:

sumOfCubes([1, 5, 9]) ➞ 855 // Since 1^3 + 5^3 + 9^3 = 1 + 125 + 729 = 855
sumOfCubes([2]) ➞ 8
sumOfCubes([]) ➞ 0 */

const sumOfCubes = (nums: number[]) => nums.reduce((prev, cur)=> prev + cur**3, 0)

console.log(sumOfCubes([1, 5, 9]));
console.log(sumOfCubes([2]));
console.log(sumOfCubes([]));


/* 7. Dictionary. Create a function that takes an initial string and an array of words, and returns a filtered array of the words that start with the same letters as the initial string.

Notes:

If none of the words match, return an empty array.
Keep the filtered array in the same relative order as the original array of words.
Examples:

dictionary("bu", ["button", "breakfast", "border"]) ➞ ["button"]
dictionary("tri", ["triplet", "tries", "trip", "piano", "tree"]) ➞ ["triplet", "tries", trip"]
dictionary("beau", ["pastry", "delicious", "name", "boring"]) ➞ [] */

const dictionary = (start: string, words: string[]) => words.filter(word => word.startsWith(start))

console.log(dictionary("bu", ["button", "breakfast", "border"]))
console.log(dictionary("tri", ["triplet", "tries", "trip", "piano", "tree"]) )
console.log(dictionary("beau", ["pastry", "delicious", "name", "boring"]) )

/* 8. Even Number Generator. Create a function that finds all even numbers from 1 to the given number.

Examples:

evenNums(8) ➞ [2, 4, 6, 8]
evenNums(4) ➞ [2, 4]
evenNums(2) ➞ [2] Notes:
If there are no even numbers, return an empty array.
Do not include 0.
*/

const evenNums = (max: number) => Array(Math.floor(max/2)).fill(0).map((val,index) => (index+1)*2)

console.log(evenNums(9))
console.log(evenNums(4) )
console.log(evenNums(2) )

/* Bonus: Alphabetical Order. Create a function to sort a string into alphabetical order. 
NB: assume numbers, symbols and punctuation are not included in the string.

i.e. alphaOrder("webdev") ➞ "bdeevw" */

const alphaOrder = (str: string) => str.split("").sort().join("")

console.log(alphaOrder("webdev"));
