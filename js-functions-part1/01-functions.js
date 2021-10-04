(async () => {

/**
 * 01 medium
 * Remove all duplicates from an array of integers
 * example: with input [1,2,3,1] the function
 * should return [1,2,3]
 */

const removeDuplicates = (arr) => {
  let foundElements = [];
  for (let i = 0; i < arr.length; i++) {
    if (!foundElements.includes(arr[i])) {
      foundElements.push(arr[i]);
    } else {
      arr.splice(i, 1);
      i--;
    }
  }
  return arr;
};

console.log(removeDuplicates([1, 2, 3, 3, 1]));

/**
 * 02 easy
 * Create an object to hold information on your favorite recipe. 
 * It should have properties for title (a string), servings (a number), 
 * and ingredients (an array of strings).
 * On separate lines (one console.log statement for each), 
 * log the recipe information so it looks like:
Mole
Serves: 2
Ingredients:
cinnamon
cumin
cocoa
 */
let favoriteRecipe = {
  title: "Cheesecake",
  servings: "2",
  ingredients: ["butter", "sugar", "eggs"],
};

console.log(favoriteRecipe.title);
console.log(favoriteRecipe.servings);
console.log("Ingredients: ");
console.log(favoriteRecipe.ingredients[0]);
console.log(favoriteRecipe.ingredients[1]);
console.log(favoriteRecipe.ingredients[2]);

/**
 * 03 easy
 * Create an array of objects, where each object describes a book
 * and has properties for the title (a string), author (a string),
 * and alreadyRead (a boolean indicating if you read it yet).
 * Iterate through the array of books.
 * For each book, log the book title and book author like so: "The Hobbit by J.R.R. Tolkien".
 * Now use an if/else statement to change the output depending on whether you read it yet or not.
 * If you read it, log a string like 'You already read "The Hobbit" by J.R.R. Tolkien',
 * and if not, log a string like 'You still need to read "The Lord of the Rings" by J.R.R. Tolkien.'
 */

let books = [
  {
    title: "Harry Potter - Part 1",
    author: "J.K. Rowling",
    alreadyRead: true,
  },
  {
    title: "Harry Potter - Part 2",
    author: "J.K. Rowling",
    alreadyRead: true,
  },
  {
    title: "Harry Potter - Part 3",
    author: "J.K. Rowling",
    alreadyRead: true,
  },
  {
    title: "Harry Potter - Part 4",
    author: "J.K. Rowling",
    alreadyRead: true,
  },
  {
    title: "Harry Potter - Part 5",
    author: "J.K. Rowling",
    alreadyRead: true,
  },
  {
    title: "The Witcher",
    author: "IDK",
    alreadyRead: false,
  },
];

for (const book of books) {
  console.log(`${book.title} by ${book.author}`);
  if (book.alreadyRead === true) {
    console.log(`You already read "${book.title}" by ${book.author}`);
  } else {
    console.log(`You still need to read "${book.title}" by ${book.author}`);
  }
}

/**
 * 04 easy
 * Write a function named helloWorld that:
 * takes 1 argument, a language code (e.g. "es", "de", "en")
 * returns "Hello, World" for the given language, for atleast 3 languages.
 * It should default to returning English.
 * Call that function for each of the supported languages and log the result to make sure it works.
 */

function helloWorld(lang) {
  switch (lang) {
    case "es":
      return "Hola mundo";
    case "de":
      return "Hallo Welt";
    default:
      return "Hello World";
  }
}

console.log(helloWorld());
console.log(helloWorld("de"));
console.log(helloWorld("es"));

/**
 * 05 easy
 * Write a function named pluralize that:
 * takes 2 arguments, a noun and a number.
 * returns the number and pluralized form, like "5 cats" or "1 dog".
 * Call that function for a few different scores and log the result to make sure it works.
 * Bonus: Make it handle a few collective nouns like "sheep" and "geese".
 *
 * example: pluralize('cat', 2) should return 2 cats
 */

const pluralize = (noun, num) => {
  return num > 1 ? `${num} ${noun}s` : `${num} ${noun}`;
};

console.log(pluralize("cat", 2));
console.log(pluralize("dog", 1));

/**
 * 06 easy
 * Write a for loop that will iterate from 0 to 20. For each iteration,
 * it will check if the current number is even or odd,
 * and report that to the screen (e.g. "2 is even").
 */

for (let i = 0; i <= 20; i++) {
  console.log(i % 2 === 0 ? `${i} is even` : `${i} is odd`);
}

/**
 * 07 medium
 * Write a for loop that will iterate from 0 to 10.
 * For each iteration of the for loop,
 * it will multiply the number by 9 and log the result (e.g. "2 * 9 = 18").
 * Bonus: Use a nested for loop to show the tables for every multiplier
 * from 1 to 10 (100 results total)
 */

for (let i = 1; i <= 10; i++) {
  for (let j = 0; j <= 9; j++) {
    console.log(`${i} * ${j} = ${i * j}`);
  }
}

/**
 * 08 medium to hard
 * Create a simple word guessing game where the user gets infinite tries to guess the word
 * (like Hangman without the hangman, or like Wheel of Fortune without the wheel and fortune).
 *
 * Create two global arrays: one to hold the letters of the word (e.g. 'F', 'O', 'X'),
 * and one to hold the current guessed letters (e.g. it would start with '_', '_', '_'
 * and end with 'F', 'O', 'X').
 * Write a function called guessLetter that will:
 * Take one argument, the guessed letter.
 * Iterate through the word letters and see if the guessed letter is in there.
 * If the guessed letter matches a word letter, changed the guessed letters array to reflect that.
 * When it's done iterating, it should log the current guessed letters ('F__')
 * and congratulate the user if they found a new letter.
 * It should also figure out if there are any more letters that need to be guessed,
 * and if not, it should congratulate the user for winning the game.
 * Pretend you don't know the word, and call guessLetter multiple times
 * with various letters to check that your program works.
 * Bonus: Make it more like Wheel of Fortune:
 * Start with a reward amount of $0
 * Every time a letter is guessed, generate a random amount and
 * reward the user if they found a letter (multiplying the reward if multiple letters found),
 * otherwise subtract from their reward.
 * When they guess the word, log their final reward amount.
 * Bonus: Make it like Hangman:
 * Keep track of all the guessed letters (right and wrong) and only let the user guess a letter once.
 * If they guess a letter twice, do nothing.
 * Keep track of the state of the hangman as a number (starting at 0),
 * and subtract or add to that number every time they make a wrong guess.
 * Once the number reaches 6 (a reasonable number of body parts for a hangman),
 * inform the user that they lost and show a hangman on the log
 */

const readline = require("readline");

async function hangman(word) {
  word = word.toLowerCase();
  const guessed = Array(word.length).fill("_");
  console.log("A new Game of Hangman!");
  console.log("What word are we looking for: ");

  let bodyparts = 0;
  let maxtries = 6
  while (bodyparts < maxtries) {
    console.log(guessed.join(""));
    console.log(`You have ${maxtries - bodyparts} tries left.`);

    let line = (await getLine("Which letter do you want?")).toLowerCase();

    for (let i = 0; i < word.length; i++) {
        if (word[i] === line) {
            guessed[i] = line;
        }
      }

    if (line === word || guessed.join("") === word) {
        console.log("You found it! The word was:", word);
        return true;
      }

    

    
    bodyparts++;
    
  }
  console.log("I am sorry, but you lost!");
  return false;
}

function getLine(str) {
  return new Promise((resolve, reject) => {
    let rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
      });
    rl.question(str, (answer) => {
        rl.close();
        resolve(answer)});
  });
}

await hangman("foxhound");


/**
 * 09 easy
 * Write a function that accepts two arguments,
 * a string and a letter and the function will count the number of occurrences
 * of the specified letter within the string
 */

let countLetter = (str, test) => {
    let num = 0;
    for(const char of str){
        if(char === test) num++
    }
    return num;
}

console.log(countLetter("lol","l"));

/**
 * 10 easy to medium
 * Write a JavaScript function to extract unique characters from a string.
 * Example string : "thequickbrownfoxjumpsoverthelazydog"
 * Expected Output : "thequickbrownfxjmpsvlazydg"
 */

let uniqueChars = (str) => {
    let result = ""
    for (const char of str) {
        if(!result.includes(char)) result+=char;
    }
    return result;
}

console.log(uniqueChars("thequickbrownfoxjumpsoverthelazydog"));


//process.exit(0)
})()