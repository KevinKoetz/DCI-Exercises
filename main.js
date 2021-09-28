/**
 * * 07
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


function checkErrors(msg){
    let expectation = "SOS";
    let iterator = 0;
    return Array.from(msg).reduce((prev, curr) => {
        if(iterator > 2) iterator = 0;
        return prev + !(curr === expectation[iterator++]);
    },0)
}

console.log(checkErrors("SOSSOSSOS"));
console.log(checkErrors("SOSSOT"));
console.log(checkErrors("SOSOOSOSOSOSOSSOSOSOSOSOSOS"));
console.log(checkErrors("SOSSPSSQSSOR"));
console.log(checkErrors("SOSSPSSQSSORSOQQOSEVS"));


