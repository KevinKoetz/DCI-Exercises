/**
 * 07 Hard
 * Write a function to construct the following pattern, using a nested for-loop.
 *
 **
 ***
 ****
 *****
 ******
 */

//
//
function pattern(lines) {
  for (let i = 1; i <= lines; i++) {
    let stars = "";
    for (let j = 1; j < i + 1; j++) {
      stars += "*";
    }
    console.log(stars);
  }
}

pattern(5);

/*
 * 07
 * Mars Exploration: Our spaceship in Mars is in trouble and transmits back to us SOS
 * There are cosmic rays interfering though and the signal arrives distorted.
 * Write a function that accepts the message from our spaceship and returns
 * the number of characters that are distorted.
 * For example:
 * SOSSOSSOS = 0 (no distorted characters)
 * SOSSOT = 1 (one character has been distorted)
 * SOSOOSOSOSOSOSSOSOSOSOSOSOS = 12
 * SOSSPSSQSSOR = 3
 */

function sos(message) {
  let numOfWrongCharacters = 0;
  let sos = "SOS";

  /*
    for(let i = 0; i < message.length / 3; i++){
        sos = sos + "SOS"
    }*/

  for (let i = 0; i < message.length; i++) {
    const char = message[i];
    if (char !== sos[i % sos.length]) numOfWrongCharacters++;
  }

  return numOfWrongCharacters;
}

console.log(sos("SOSSOS"));

/**
 * 05
 * Anagram
 * Definition:- A word is an anagram of another word if they are using the same
 * letters with the same quantity, but arranged differently.
 *
 * write a function that checks if two provided strings are anagrams of each other;
 * letter casing shouldn’t matter.
 * Also, consider only characters, not spaces or punctuation. For Example:
 * anagram('fried','fired') // true;
 * anagram('gainly', 'laying') //true;
 * anagram('listen', 'bye')  // false; (bearbeitet)
 */

console.log(anagram('listen', 'byesas'));

function anagram(word1, word2) {
  if (word1.length !== word2.length) return false;
  const letterCountWord1 = countLetters(word1);
  const letterCountWord2 = countLetters(word2);
  ///This below
  const keys = "abcdefghijklmnopqrstuvwxyz"
  for(let i = 0; i < keys.length; i++){
    if(letterCountWord1[keys[i]] !== letterCountWord2[keys[i]]) return false
  }
  /*
  Could be written with the for...in loop, like that
  for (const key in letterCountWord1) {
    if(letterCountWord1[key] !== letterCountWord2[key]) return false
  }
  */
  return true;
}

function countLetters(string) {
    string = string.toLowerCase();
   let countOfEachLetter = {};

  for(let i = 0; i < string.length;i++){
      const char = string[i];
      if(countOfEachLetter[char] === undefined) countOfEachLetter[char]=0;
      countOfEachLetter[char] = countOfEachLetter[char] + 1
  }

  return countOfEachLetter;
}


