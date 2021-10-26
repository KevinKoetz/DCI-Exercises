const l = (...args: any) => console.log(...args);
const line = (() => {
  let num = 1;
  return () => l(`_______________${num++}_______________`);
})();

/* Recursion
Calculate factorial of n. Reminder n! = 1 * 2 * ... * n
Write a JavaScript program to calculate the factorial of a number.

In mathematics, the factorial of a non-negative integer n, denoted by n!, is the product of all positive integers less than or equal to n. For example, 5! = 5 x 4 x 3 x 2 x 1 = 120

    factorial(5)  // return 120 */

function factorial(n: number) : number {
  if(n === 0) return 1
  return n * factorial(n-1)
}

console.log(factorial(5));
