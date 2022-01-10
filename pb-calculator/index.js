"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const repl_1 = __importDefault(require("repl"));
const calculator = {
    pi: Math.PI,
    e: Math.E,
    ratio(x, y, width) {
        return `height is ${(x / y) * width} on ratio ${x}:${y}`;
    },
    percentage(x, y) {
        return `percentage of ${x} in ${y} is ${(x / y) * 100}%`;
    },
    add(x, y) {
        return x + y;
    },
    subtract(x, y) {
        return x - y;
    },
    multiply(x, y) {
        return x * y;
    },
    divide(x, y) {
        return y === 0 ? Infinity : x / y;
    },
    modulation(x, y) {
        return y === 0 ? undefined : x % y;
    },
    elevate(x, y) {
        return Math.pow(x, y);
    },
    sqrt(x) {
        return Math.pow(x, 0.5);
    },
};
const replServer = repl_1.default.start();
Object.assign(replServer.context, calculator);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F5Qkc7Ozs7O0FBRUgsZ0RBQXdCO0FBRXhCLE1BQU0sVUFBVSxHQUFHO0lBQ2pCLEVBQUUsRUFBRSxJQUFJLENBQUMsRUFBRTtJQUNYLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNULEtBQUssQ0FBQyxDQUFTLEVBQUUsQ0FBUyxFQUFFLEtBQWE7UUFDdkMsT0FBTyxhQUFhLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEtBQUssYUFBYSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUM7SUFDM0QsQ0FBQztJQUNELFVBQVUsQ0FBQyxDQUFTLEVBQUUsQ0FBUztRQUM3QixPQUFPLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO0lBQzNELENBQUM7SUFDRCxHQUFHLENBQUMsQ0FBUyxFQUFFLENBQVM7UUFDdEIsT0FBTyxDQUFDLEdBQUMsQ0FBQyxDQUFDO0lBQ2IsQ0FBQztJQUNELFFBQVEsQ0FBQyxDQUFTLEVBQUUsQ0FBUztRQUMzQixPQUFPLENBQUMsR0FBQyxDQUFDLENBQUM7SUFDYixDQUFDO0lBQ0QsUUFBUSxDQUFDLENBQVMsRUFBRSxDQUFTO1FBQzNCLE9BQU8sQ0FBQyxHQUFDLENBQUMsQ0FBQTtJQUNaLENBQUM7SUFDRCxNQUFNLENBQUMsQ0FBUyxFQUFFLENBQVM7UUFDekIsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUE7SUFDbkMsQ0FBQztJQUNELFVBQVUsQ0FBQyxDQUFTLEVBQUUsQ0FBUztRQUM3QixPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQTtJQUNwQyxDQUFDO0lBQ0QsT0FBTyxDQUFDLENBQVMsRUFBRSxDQUFTO1FBQzFCLE9BQU8sU0FBQSxDQUFDLEVBQUksQ0FBQyxDQUFBLENBQUE7SUFDZixDQUFDO0lBQ0QsSUFBSSxDQUFDLENBQVM7UUFDWixPQUFPLFNBQUEsQ0FBQyxFQUFJLEdBQUcsQ0FBQSxDQUFBO0lBQ2pCLENBQUM7Q0FDRixDQUFDO0FBRUYsTUFBTSxVQUFVLEdBQUcsY0FBSSxDQUFDLEtBQUssRUFBRSxDQUFDO0FBQ2hDLE1BQU0sQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBRSxVQUFVLENBQUMsQ0FBQyJ9