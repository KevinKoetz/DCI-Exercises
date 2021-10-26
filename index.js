"use strict";
const l = (...args) => console.log(...args);
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
const createBase = (base) => {
    return (number) => number + base;
};
var addSix = createBase(6);
console.log(addSix(10)); // returns 16
console.log(addSix(21)); // returns 27 */
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQVMsRUFBRSxFQUFFLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDO0FBQ2pELE1BQU0sSUFBSSxHQUFHLENBQUMsR0FBRyxFQUFFO0lBQ2pCLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQztJQUNaLE9BQU8sR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLGtCQUFrQixHQUFHLEVBQUUsaUJBQWlCLENBQUMsQ0FBQztBQUMzRCxDQUFDLENBQUMsRUFBRSxDQUFDO0FBRUwsMkRBQTJEO0FBRTNEOztHQUVHO0FBRUg7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FzQkc7QUFFSDs7OzRCQUc0QjtBQUU1QixNQUFNLFVBQVUsR0FBRyxDQUFDLElBQVksRUFBRSxFQUFFO0lBQ2xDLE9BQU8sQ0FBQyxNQUFjLEVBQUUsRUFBRSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7QUFDM0MsQ0FBQyxDQUFDO0FBRUYsSUFBSSxNQUFNLEdBQUcsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQzNCLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxhQUFhO0FBQ3RDLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxnQkFBZ0IifQ==