"use strict";
const l = (...args) => console.log(...args);
const line = (() => {
    let num = 1;
    return () => l(`_______________${num++}_______________`);
})();
/* Calculate the sum of natural number up to n
Write a JavaScript program to compute the sum of an array of integers
    const array = [1, 2, 3, 4, 5, 6]
    sum(array)  // return 21 */
function sum(arr) {
    if (arr.length === 1) {
        return arr[0];
    }
    else {
        return arr[0] + sum(arr.slice(1));
    }
}
console.log(sum([1, 2, 3, 4, 5, 6]));
/**
 * Fibonacci with Map
 */
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQVMsRUFBRSxFQUFFLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDO0FBQ2pELE1BQU0sSUFBSSxHQUFHLENBQUMsR0FBRyxFQUFFO0lBQ2pCLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQztJQUNaLE9BQU8sR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLGtCQUFrQixHQUFHLEVBQUUsaUJBQWlCLENBQUMsQ0FBQztBQUMzRCxDQUFDLENBQUMsRUFBRSxDQUFDO0FBRUw7OzsrQkFHK0I7QUFFL0IsU0FBUyxHQUFHLENBQUMsR0FBYTtJQUN4QixJQUFHLEdBQUcsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFDO1FBQ2xCLE9BQU8sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFBO0tBQ2Q7U0FBSTtRQUNILE9BQU8sR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7S0FDbEM7QUFDSCxDQUFDO0FBRUQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUVyQzs7R0FFRztBQUVILFNBQVMsU0FBUyxDQUFDLENBQVMsRUFBRSxNQUEwQixJQUFJLEdBQUcsRUFBRTtJQUMvRCxJQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEtBQUssU0FBUztRQUFFLE9BQU8sR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQVcsQ0FBQTtJQUN4RCxJQUFHLENBQUMsS0FBSyxFQUFFO1FBQUUsT0FBTyxFQUFFLENBQUE7SUFDdEIsSUFBRyxDQUFDLEtBQUssRUFBRTtRQUFFLE9BQU8sRUFBRSxDQUFBO0lBQ3BCLE1BQU0sTUFBTSxHQUFHLFNBQVMsQ0FBQyxDQUFDLEdBQUMsRUFBRSxFQUFFLEdBQUcsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxDQUFDLEdBQUMsRUFBRSxFQUFFLEdBQUcsQ0FBQyxDQUFBO0lBQzFELEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFBO0lBQ2xCLE9BQU8sTUFBTSxDQUFBO0FBRWpCLENBQUM7QUFJRCxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDIn0=