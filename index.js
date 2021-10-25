"use strict";
var l = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return console.log.apply(console, args);
};
var line = (function () {
    var num = 1;
    return function () { return l("_______________" + num++ + "_______________"); };
})();
/*1. isPlainObject - Write a method that verifies an argument is a plain object, not an array or null
Task description: Write a method that verifies an argument is a plain object, not an array or null
Expected Result: True if object is plain, false otherwise.
({ a: 1 }) => true,
([1, 2, 3]) => false
   const data = { a: 1 };
   console.log(isPlainObject(data)); // true */
line();
function isPlainObject(data) {
    if (data === null)
        return false;
    if (Array.isArray(data))
        return false;
    if (typeof data !== "object")
        return false;
    return true;
}
console.log(isPlainObject({ a: 1 }));
console.log(isPlainObject([1, 2, 3]));
console.log(isPlainObject(null));
line();
line();
/*4. IsEmpty - Write a method that makes a shallow check is object empty
Task description: Write a method that makes a shallow check is object empty

Expected Result: ({}) => true, ({ a: undefined }) => true,
({ a: 1 }) => false

    const data = { a: 1, b: undefined };
    const data2 = { a:undefined };
    console.log(isEmpty(data)); // false
    console.log(isEmpty(data2)); // true  */
line();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsSUFBTSxDQUFDLEdBQUc7SUFBQyxjQUFZO1NBQVosVUFBWSxFQUFaLHFCQUFZLEVBQVosSUFBWTtRQUFaLHlCQUFZOztJQUFLLE9BQUEsT0FBTyxDQUFDLEdBQUcsT0FBWCxPQUFPLEVBQVEsSUFBSTtBQUFuQixDQUFvQixDQUFDO0FBQ2pELElBQU0sSUFBSSxHQUFHLENBQUM7SUFDWixJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUM7SUFDWixPQUFPLGNBQU0sT0FBQSxDQUFDLENBQUMsb0JBQWtCLEdBQUcsRUFBRSxvQkFBaUIsQ0FBQyxFQUEzQyxDQUEyQyxDQUFDO0FBQzNELENBQUMsQ0FBQyxFQUFFLENBQUM7QUFFTDs7Ozs7OytDQU0rQztBQUM1QyxJQUFJLEVBQUUsQ0FBQTtBQUNOLFNBQVMsYUFBYSxDQUFDLElBQUk7SUFDekIsSUFBRyxJQUFJLEtBQUssSUFBSTtRQUFFLE9BQU8sS0FBSyxDQUFBO0lBQzlCLElBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUM7UUFBRSxPQUFPLEtBQUssQ0FBQztJQUNyQyxJQUFHLE9BQU8sSUFBSSxLQUFLLFFBQVE7UUFBRSxPQUFPLEtBQUssQ0FBQztJQUMxQyxPQUFPLElBQUksQ0FBQTtBQUNiLENBQUM7QUFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDckMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUN0QyxPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0FBRXBDLElBQUksRUFBRSxDQUFBO0FBQ04sSUFBSSxFQUFFLENBQUE7QUFFTjs7Ozs7Ozs7OzRDQVM0QztBQUN4QyxJQUFJLEVBQUUsQ0FBQSJ9