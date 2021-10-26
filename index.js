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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQVMsRUFBRSxFQUFFLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDO0FBQ2pELE1BQU0sSUFBSSxHQUFHLENBQUMsR0FBRyxFQUFFO0lBQ2pCLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQztJQUNaLE9BQU8sR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLGtCQUFrQixHQUFHLEVBQUUsaUJBQWlCLENBQUMsQ0FBQztBQUMzRCxDQUFDLENBQUMsRUFBRSxDQUFDO0FBRUw7Ozs7OztrQ0FNa0M7QUFFbEMsU0FBUyxTQUFTLENBQUMsQ0FBUztJQUMxQixJQUFHLENBQUMsS0FBSyxDQUFDO1FBQUUsT0FBTyxDQUFDLENBQUE7SUFDcEIsT0FBTyxDQUFDLEdBQUcsU0FBUyxDQUFDLENBQUMsR0FBQyxDQUFDLENBQUMsQ0FBQTtBQUMzQixDQUFDO0FBRUQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyJ9