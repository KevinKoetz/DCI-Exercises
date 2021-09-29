//Declare a variable named isDog. If true, print 'pat, pat' and if not, print 'find me a dog to pat!'
isDog = false
console.log(isDog ? 'pat, pat' : 'find me a dog to pat!');

//Declare a variable named speedCheck. If speedlimit is 50km/h, and your speed is above that, print 'you're going too fast!'. If speed is lower than 50km/h, print 'You're driving below the speed limit, Oma'.
let speed = 80
console.log(speed > 50 ? "you're going too fast!" : "You're driving below the speed limit, Oma" ); 

//Declare a variable named age. If age is below 16, print "serve butter beer". Otherwise print "serve beer".
let age = 18
console.log(age < 16 ? "serve butter beer" : "serve beer");

//Declare a variable named isStudent. If true, print "Ticket costs €5,00". If false, print "Ticket costs €12,00".
let isStudent = true
console.log(isStudent ? "Ticket costs €5,00" : "Ticket costs €12,00");

//Declare a variable named okMarie. Check if there is 'cake' - if so, print "Let them eat cake". If not, print "Oh, bother".
let okMarie = "cheese";
console.log(okMarie.includes("cake") ? "Let them eat cake" : "Oh, bother"); 

//Check if the following numbers are even numbers. Use a ternary and if the number is even print 30 is even, else print that it is odd.
/*
30
939
40.9
*/

function isEven(a){
    return a % 2 === 0 ? `${a} is even` : `${a} is odd`
}

console.log(isEven(30));
console.log(isEven(939));
console.log(isEven(40.9));