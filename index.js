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
    return (str[str.length - 1] + reverseString(str.slice(1, str.length - 1)) + str[0]);
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
function isObject(obj) {
    return typeof obj === "object" && obj !== null;
}
function sum2(n) {
    function recur(n, acc) {
        if (n == 0n) {
            return acc;
        }
        else {
            return recur.bind(null, n - 1n, n + acc);
        }
    }
    return trampoline(recur.bind(null, n, 1n));
}
function trampoline(f) {
    while (f && f instanceof Function) {
        f = f();
    }
    return f;
}
console.log(sum2(5000000n));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQVMsRUFBRSxFQUFFLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDO0FBQ2pELE1BQU0sSUFBSSxHQUFHLENBQUMsR0FBRyxFQUFFO0lBQ2pCLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQztJQUNaLE9BQU8sR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLGtCQUFrQixHQUFHLEVBQUUsaUJBQWlCLENBQUMsQ0FBQztBQUMzRCxDQUFDLENBQUMsRUFBRSxDQUFDO0FBRUw7Ozs7OztrQ0FNa0M7QUFFbEMsU0FBUyxTQUFTLENBQUMsQ0FBUztJQUMxQixJQUFJLENBQUMsS0FBSyxDQUFDO1FBQUUsT0FBTyxDQUFDLENBQUM7SUFDdEIsT0FBTyxDQUFDLEdBQUcsU0FBUyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztBQUM5QixDQUFDO0FBRUQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUUxQjs7Ozs2Q0FJNkM7QUFFN0MsU0FBUyxhQUFhLENBQUMsR0FBVztJQUNoQyxJQUFJLEdBQUcsQ0FBQyxNQUFNLElBQUksQ0FBQztRQUFFLE9BQU8sR0FBRyxDQUFDO0lBQ2hDLE9BQU8sQ0FDTCxHQUFHLENBQUMsR0FBRyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsR0FBRyxhQUFhLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FDM0UsQ0FBQztBQUNKLENBQUM7QUFFRCxNQUFNLE1BQU0sR0FBRyxhQUFhLENBQUM7QUFDN0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLHdCQUF3QjtBQUU5RDs7Ozs7Ozs7OztzREFVc0Q7QUFFdEQsU0FBUyxTQUFTLENBQUMsQ0FBUyxFQUFFLE1BQTJCLElBQUksR0FBRyxFQUFFO0lBQ2hFLElBQUksR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsS0FBSyxTQUFTO1FBQUUsT0FBTyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBVyxDQUFDO0lBQzFELElBQUksQ0FBQyxLQUFLLEVBQUU7UUFBRSxPQUFPLEVBQUUsQ0FBQztJQUN4QixJQUFJLENBQUMsS0FBSyxFQUFFO1FBQUUsT0FBTyxFQUFFLENBQUM7SUFDeEIsTUFBTSxNQUFNLEdBQUcsU0FBUyxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUUsR0FBRyxDQUFDLEdBQUcsU0FBUyxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDL0QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDbkIsT0FBTyxNQUFNLENBQUM7QUFDaEIsQ0FBQztBQUVELE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7QUFHN0IsU0FBUyxRQUFRLENBQUksR0FBTTtJQUN6QixPQUFPLE9BQU8sR0FBRyxLQUFLLFFBQVEsSUFBSSxHQUFHLEtBQUssSUFBSSxDQUFDO0FBQ2pELENBQUM7QUFHRCxTQUFTLElBQUksQ0FBQyxDQUFTO0lBQ3JCLFNBQVMsS0FBSyxDQUFDLENBQVMsRUFBRSxHQUFXO1FBQ2pDLElBQUksQ0FBQyxJQUFJLEVBQUUsRUFBRTtZQUNULE9BQU8sR0FBRyxDQUFDO1NBQ2Q7YUFBTTtZQUNILE9BQU8sS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxHQUFDLEVBQUUsRUFBRSxDQUFDLEdBQUMsR0FBRyxDQUFDLENBQUM7U0FDeEM7SUFDTCxDQUFDO0lBQ0QsT0FBTyxVQUFVLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDN0MsQ0FBQztBQUdELFNBQVMsVUFBVSxDQUFDLENBQVc7SUFDN0IsT0FBTSxDQUFDLElBQUksQ0FBQyxZQUFZLFFBQVEsRUFBQztRQUMvQixDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUE7S0FDUjtJQUNELE9BQU8sQ0FBQyxDQUFBO0FBQ1YsQ0FBQztBQUVELE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMifQ==