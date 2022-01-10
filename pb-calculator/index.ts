/* Calculator.js
A library which contains useful calculation functions based on common formulas (aspect ratio, percentage calculation, etc…)
Create a Calculator Class with
Properties
calculate.pi // Returns PI (3.141592653589793)

calculate.e // Returns Eulner's number (2.718281828459045)
Methods
calculate.ratio(x,y,width)  //return height is --- on ratio x:y

calculate.percentage(x,y) // return percentage of x in y.

calculate.add(x, y) // Returns the sum of x added to y.

calculate.subtract(x, y) // Returns the differente of y subtracted to x.

calculate.multiply(x, y) // Returns the product of x multiplied by y.

calculate.divide(x, y) // Returns the quotient of x divided by y. WARNING: If the divisor is set to 0, an error will be thrown.

calculate.modulation(x, y) // Returns the remainder of x divided by y. WARNING: If the divisor is set to 0, an error will be thrown.

calculate.elevate(x, y) // Returns the power of x elevated to y.

calculate.sqrt(x) // Returns the square root of x.
 */

import repl from "repl";

const calculator = {
  pi: Math.PI,
  e: Math.E,
  ratio(x: number, y: number, width: number) {
    return `height is ${(x / y) * width} on ratio ${x}:${y}`;
  },
  percentage(x: number, y: number) {
    return `percentage of ${x} in ${y} is ${(x / y) * 100}%`;
  },
  add(x: number, y: number) {
    return x+y;
  },
  subtract(x: number, y: number) {
    return x-y;
  },
  multiply(x: number, y: number) {
    return x*y
  },
  divide(x: number, y: number) {
    return y === 0 ? Infinity : x / y
  },
  modulation(x: number, y: number) {
    return y === 0 ? undefined : x % y
  },
  elevate(x: number, y: number) {
    return x ** y
  },
  sqrt(x: number) {
    return x ** 0.5
  },
};

const replServer = repl.start();
Object.assign(replServer.context, calculator);
