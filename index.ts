function l(...args: any) {
    console.log(...args);
  }
  
  const line = (() => {
    let num = 0;
    return () => l(`____________${num++}____________`);
  })();

/* 1. Check if a number is within a given range. Write a program that checks if a number is within the range of an object's min and max properties. Assume min <= max is always true.

Examples:

4, { min: 0, max: 5 }) ➞ true
4, { min: 4, max: 5 }) ➞ true
4, { min: 6, max: 10 }) ➞ false
5, { min: 5, max: 5 }) ➞ true */
line()

type Interval = {
    min: number;
    max: number;
}


function numberInRange(n: number, range: Interval){
    return n >= range.min && n <= range.max
}

l(numberInRange(4, { min: 0, max: 5 }))
l(numberInRange(4, { min: 4, max: 5 }))
l(numberInRange(4, { min: 6, max: 10 }))
l(numberInRange(5, { min: 5, max: 5 }))

/* 2. Scrabble. Write a program that, given an array of scrabble tiles, counts the maximum score that a player can earn from the tiles in their hand. 
Example: [ { tile: "N", score: 1 }, { tile: "K", score: 5 }, { tile: "Z", score: 10 }, { tile: "X", score: 8 }, { tile: "D", score: 2 }, { tile: "A", score: 1 }, { tile: "E", score: 1 } ]

The player's maximum score: 1 + 5 + 10 + 8 + 2 + 1 + 1 = 28 */
line()
type ScrabbleTile = {
    tile: string;
    score: number;
}

function getMaxScrabbleScore(scrabbleTiles: ScrabbleTile[]){
    return scrabbleTiles.reduce((sum, cur) => sum += cur.score,0)
}

l(getMaxScrabbleScore([ { tile: "N", score: 1 }, { tile: "K", score: 5 }, { tile: "Z", score: 10 }, { tile: "X", score: 8 }, { tile: "D", score: 2 }, { tile: "A", score: 1 }, { tile: "E", score: 1 } ]))

/* 3. Is it an empty object? Write a program that returns true if an object is empty, and false if otherwise.

Examples:

{} ➞ true
{a: 1} ➞ false */
line()
const isEmpty = (obj: object) => Object.keys(obj).length === 0

l(isEmpty({}))
l(isEmpty({a: 1}))


/* 4. Counting Letters. Create a function that counts the number of occurrences of each letter in a string. Return an object with key pair values of letters and the number of occurrences for each letter.

Example:

countLetters("tree") ➞ {t: 1, r: 1, e: 2} */
line()

interface LetterCount {
    [key: string]: number;
}

const countLetters = (str: string) => str.split("").reduce((obj, cur)=> {
   obj[cur] === undefined ? (obj[cur] = 1) : obj[cur]++
   return obj
},{} as LetterCount)

l(countLetters("tree"))

/* 
5. Free Shipping. Create a function that determines whether an online order should get free shipping. An order gets free shipping if the total cost of items exceeds €50.

Examples:

freeShipping({ "Sponge": 3.50, "Soap": 5.99 }) ➞ false
freeShipping({ "Surround Sound Equipment": 499.99 }) ➞ true
freeShipping({ "Wool": 13.99, "Knitting Needles": 15.50, "Bag": 13.99 }) ➞ false */
line()

type Cart = {
    [key: string]: number
}

const freeShipping = (cart: Cart) => Object.values(cart).reduce((prev, cur)=> prev + cur) > 50

l(freeShipping({ "Sponge": 3.50, "Soap": 5.99 }) )
l(freeShipping({ "Surround Sound Equipment": 499.99 }) )
l(freeShipping({ "Wool": 13.99, "Knitting Needles": 15.50, "Bag": 13.99 }))


/* 6. Programming Object.

const programming = {
  languages: ["JavaScript", "Python", "Ruby"],
  isChallenging: true,
  isRewarding: true,
  difficulty: 8,
  jokes:
    "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke"
};
Write the command to add the language "Go" to the end of the languages array.

Change the difficulty to the value of 7.

Using the delete keyword, write the command to remove the jokes key from the programming object.

Write a command to add a new key called isFun and a value of true to the programming object.

Using a loop, iterate through the languages array and console.log all of the languages.

Using a loop, console.log all of the keys in the programming object.

Using a loop, console.log all of the values in the programming object.

Create an object method where if the keys "isChallenging" and "isRewarding" have values of "true", then return "Learning the programming languages: "JavaScript, Python, Ruby, Go" is rewarding and challenging. Bonus: In a comment, explain what is printed if we console.log an object method without calling it and why.

Bonus:

Make sure that any other code cannot delete or change properties of the object. */

type Programming = {
    languages: string[],
    isChallenging: boolean,
    isRewarding: boolean,
    difficulty: number,
    jokes?: string,
    isFun?: boolean,
    print?() : void,
}

const programming: Programming = {
    languages: ["JavaScript", "Python", "Ruby"],
    isChallenging: true,
    isRewarding: true,
    difficulty: 8,
    jokes:
      "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke"
  };

programming.languages.push("Go")
programming.difficulty = 7;
delete programming.jokes;
programming.isFun = true;

for (const language of programming.languages) {
    l(language)
}

for (const key in programming) {
    l(key)
}

for (const key in programming) {
    l(programming[key as keyof Programming])
}

programming.print = function () {
    if(this.isChallenging && this.isRewarding) l(`Learning the programming languages: "${this.languages.join(", ")}" is rewarding and challenging.`)
}

programming.print()
