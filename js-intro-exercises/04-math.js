/**
 * Exercise 01
 * Write a function hypotenuse that calculates the length of the hypotenuse
 *  of a right triangle. 
 * The length of the hypotenuse is calcultaed from this formula: 
 * a² + b² = c². 
 * Since 3² + 4² = 5² applies, hypotenuse(3, 4) should return 5.
 */

function hypotenuse(a,b) {
    return (a**2 + b**2)**(1/2)
}

console.log(hypotenuse(3,4));

/**
 * Exercise 02
 * Write a function midrange, that calculates the midrange of 3 numbers. 
 * The midrange is the mean of the smallest and largest number.
 * Example: midrange(3, 9, 1) should return (9+1)/2 = 5
 */

function midrange() {
    return (Math.max(...arguments) + Math.min(...arguments)) / 2;
}

console.log(midrange(3, 9, 1));

/**
 * Exercise 03
 * Write a function area that calculates the area of a circle. 
 * The function is given the radius of the circle.
 * Example: area(1) should return π and area(2) should return 4 * π
 */

function circleArea(r) {
    return Math.PI*(r**2);
}

console.log(circleArea(1).toFixed(5) === Math.PI.toFixed(5));
console.log(circleArea(2).toFixed(5) === (4*Math.PI).toFixed(5));

/**
 * Exercise 04
 * Write a function dice that returns a random number between 1 and 6 like in dices
 */

function dice(sides){
    sides = sides ?? 6;

    return Math.floor(Math.random()*sides + 1);
}

console.log(dice());
console.log(dice(20));

 /**
  * Exercise 05
  * Write a function round100 that rounds a number to the nearest hundred.
  * Example: round100(1749) should return 1700 and round100(856.12) should return 900
  */

function round100(num) {
    return Math.round(num / 100) * 100;
}

console.log(round100(1749));
console.log(round100(856.12));

 /**
  * Exercise 06 Attention: Loops and conditional are required
  * Write a function parseFirstInt that takes a string and returns the first integer present in the string. 
  * If the string does not contain an integer, you should get NaN.
  * Example: parseFirstInt('No. 10') should return 10 and parseFirstInt('Babylon') should return NaN
  */

 function parseFirstInt(str) {
     return parseInt(str.match(/\d+/) ? str.match(/\d+/)[0] : NaN);
 }

console.log(parseFirstInt("j68s")); 
console.log(parseFirstInt("68ku")); 
console.log(parseFirstInt("68huk46")); 
console.log(parseFirstInt("daw")); 