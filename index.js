"use strict";
const l = (...args) => console.log(...args);
const line = (() => {
    let num = 1;
    return () => l(`_______________${num++}_______________`);
})();
/* Recursion
Calculate factorial of n. Reminder n! = 1 * 2 * ... * n
Write a JavaScript program to calculate the factorial of a number.

In mathematics, the factorial of a non-negative integer n, denoted by n!, is the product of all positive integers less than or equal to n. For example, 5! = 5 x 4 x 3 x 2 x 1 = 120

    factorial(5)  // return 120 */
function factorial(n) {
    if (n === 0)
        return 1;
    return n * factorial(n - 1);
}
console.log(factorial(5));
/*
Write a function which can reverse string
Write a JavaScript function that reverse a string. Sample Data and output: Example reverse("hello world") Expected Output: dlrow olleh
    const string="hello world"
    reverse(string)  // return dlrow olleh */
function reverseString(str) {
    if (str.length <= 1)
        return str;
    return str[str.length - 1] + reverseString(str.slice(1, str.length - 1)) + str[0];
}
const string = "hello world";
console.log(reverseString("string")); // return dlrow olleh */
/* Recursion
Find the nth Fibonacci number
Write a JavaScript program to get the first n Fibonacci numbers.

Note: The Fibonacci Sequence is the series of numbers: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, . . . Each subsequent number is the sum of the previous two.

fibonnaci(0)=> [0]
fibonnaci(1)=> [0,1]
fibonnaci(2)=> [0,1,1]
fibonnaci(8)=> [0, 1, 1, 2, 3, 5, 8, 13,21]
    fibonnaci(8) //  [0, 1, 1, 2, 3, 5, 8, 13,21]   */
function Fibonacci(n, map = new Map()) {
    if (map.get(n) !== undefined)
        return map.get(n);
    if (n === 0n)
        return 0n;
    if (n === 1n)
        return 1n;
    const nthFib = Fibonacci(n - 1n, map) + Fibonacci(n - 2n, map);
    map.set(n, nthFib);
    return nthFib;
}
console.log(Fibonacci(800n));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQVMsRUFBRSxFQUFFLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDO0FBQ2pELE1BQU0sSUFBSSxHQUFHLENBQUMsR0FBRyxFQUFFO0lBQ2pCLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQztJQUNaLE9BQU8sR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLGtCQUFrQixHQUFHLEVBQUUsaUJBQWlCLENBQUMsQ0FBQztBQUMzRCxDQUFDLENBQUMsRUFBRSxDQUFDO0FBRUw7Ozs7OztrQ0FNa0M7QUFFbEMsU0FBUyxTQUFTLENBQUMsQ0FBUztJQUMxQixJQUFHLENBQUMsS0FBSyxDQUFDO1FBQUUsT0FBTyxDQUFDLENBQUE7SUFDcEIsT0FBTyxDQUFDLEdBQUcsU0FBUyxDQUFDLENBQUMsR0FBQyxDQUFDLENBQUMsQ0FBQTtBQUMzQixDQUFDO0FBRUQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUUxQjs7Ozs2Q0FJNkM7QUFFN0MsU0FBUyxhQUFhLENBQUMsR0FBVztJQUNoQyxJQUFHLEdBQUcsQ0FBQyxNQUFNLElBQUksQ0FBQztRQUFFLE9BQU8sR0FBRyxDQUFBO0lBQzlCLE9BQU8sR0FBRyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLEdBQUcsYUFBYSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFDLEdBQUcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUE7QUFDbEYsQ0FBQztBQUVELE1BQU0sTUFBTSxHQUFDLGFBQWEsQ0FBQTtBQUMxQixPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsd0JBQXdCO0FBRTlEOzs7Ozs7Ozs7O3NEQVVzRDtBQUVsRCxTQUFTLFNBQVMsQ0FBQyxDQUFTLEVBQUUsTUFBMEIsSUFBSSxHQUFHLEVBQUU7SUFDL0QsSUFBRyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxLQUFLLFNBQVM7UUFBRSxPQUFPLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFXLENBQUE7SUFDeEQsSUFBRyxDQUFDLEtBQUssRUFBRTtRQUFFLE9BQU8sRUFBRSxDQUFBO0lBQ3RCLElBQUcsQ0FBQyxLQUFLLEVBQUU7UUFBRSxPQUFPLEVBQUUsQ0FBQTtJQUNwQixNQUFNLE1BQU0sR0FBRyxTQUFTLENBQUMsQ0FBQyxHQUFDLEVBQUUsRUFBRSxHQUFHLENBQUMsR0FBRyxTQUFTLENBQUMsQ0FBQyxHQUFDLEVBQUUsRUFBRSxHQUFHLENBQUMsQ0FBQTtJQUMxRCxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQTtJQUNsQixPQUFPLE1BQU0sQ0FBQTtBQUVqQixDQUFDO0FBSUQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyJ9