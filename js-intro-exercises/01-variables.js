/**
 * Excercise 1
 * The Age Calculator
 * Find how old you will be in a future year
 */


// Store your birth year in a variable.
let birthYear = 1990;
// Store a future year in a variable.
let futureYear = 2076;
// Calculate your 2 possible ages for that year based on the stored values.
// For example, if you were born in 1988, then in 2026 you'll be either 37 or 38, depending on what month it is in 2026.
let result1 = futureYear - birthYear;
let result2 = result1 - 1;
// Output them to the screen like so: "I will be either NN or NN in YYYY", substituting the values
console.log(`I will be either ${result1} or ${result2} in ${futureYear}`);