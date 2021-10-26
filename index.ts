const l = (...args: any) => console.log(...args);
const line = (() => {
  let num = 1;
  return () => l(`_______________${num++}_______________`);
})();

/* Calculate the sum of natural number up to n
Write a JavaScript program to compute the sum of an array of integers
    const array = [1, 2, 3, 4, 5, 6]
    sum(array)  // return 21 */

function sum(arr: number[]): number{
  if(arr.length === 1){
    return arr[0]
  }else{
    return arr[0] + sum(arr.slice(1))
  }
}

console.log(sum([1, 2, 3, 4, 5, 6]));

/**
 * Fibonacci with Map
 */

function Fibonacci(n: bigint, map: Map<bigint,bigint> = new Map()): bigint{
  if(map.get(n) !== undefined) return map.get(n) as bigint
  if(n === 0n) return 0n
  if(n === 1n) return 1n
    const nthFib = Fibonacci(n-1n, map) + Fibonacci(n-2n, map)
    map.set(n, nthFib)
    return nthFib
  
}
 


console.log(Fibonacci(800n));
