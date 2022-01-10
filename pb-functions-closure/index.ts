const l = (...args: any) => console.log(...args);
const line = (() => {
  let num = 1;
  return () => l(`_______________${num++}_______________`);
})();

/* 1. In your own words, define closure (1-2 sentences). */

/**
 * A Closure is a function and it's outer Lexical Environment which is defined inside an encapsulating Function
 */

/*  2. Study the following code, then answer the questions below.
 function personalDice(name){
   return function(){
       // generate random number between 1 and 6
     const newRoll = Math.floor(Math.random() * 6);
     console.log(`${name} rolled a ${newRoll}`)
   }
 }
 
 const dansRoll = personalDice("Dan");
 
 const zoesRoll = personalDice("Zoe");
 
 
 dansRoll();
 dansRoll();
 a. Where is closure used in this code? How can you tell?
 Inside the Personal Dice function
 b. Compare and contrast calling dansRoll the first and second time. What is always the same? What could change?
 The name variable is always "Dan" so the Console log will print always "Dan rolled a ${newRoll}"
 c. What is the lexical scope of newRoll? 
 It's local to the anonymous function defined and returned with personalDice
 */

/*  Write a function that would allow you to do this using a closure.
var addSix = createBase(6);
addSix(10); // returns 16
addSix(21); // returns 27 */

const createBase = (base: number) => {
  return (number: number) => number + base;
};

var addSix = createBase(6);
console.log(addSix(10)); // returns 16
console.log(addSix(21)); // returns 27 */
