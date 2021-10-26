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

/* 
Write a function which can reverse string
Write a JavaScript function that reverse a string. Sample Data and output: Example reverse("hello world") Expected Output: dlrow olleh
    const string="hello world"
    reverse(string)  // return dlrow olleh */

function reverseString(str: string): string{
  if(str.length <= 1) return str
  return str[str.length - 1] + reverseString(str.slice(1,str.length - 1)) + str[0]
}

const string="hello world"
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

    function Fibonacci(n: bigint, map: Map<bigint,bigint> = new Map()): bigint{
      if(map.get(n) !== undefined) return map.get(n) as bigint
      if(n === 0n) return 0n
      if(n === 1n) return 1n
        const nthFib = Fibonacci(n-1n, map) + Fibonacci(n-2n, map)
        map.set(n, nthFib)
        return nthFib
      
    }
     
    
    
    console.log(Fibonacci(800n));