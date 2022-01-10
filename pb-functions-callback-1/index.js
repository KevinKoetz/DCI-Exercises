"use strict";
const l = (...args) => console.log(...args);
const line = (() => {
    let num = 1;
    return () => l(`_______________${num++}_______________`);
})();
/* Greet Users
Create a function which will print greeting message
Create a function which will receives array of different users and greet each user.
    greetMessage("John") // print "Good Morning, John"

    greetUsers(["John","Peter","Mark"], greetMessage)
    // "Good Morning, John"
    // "Good Morning, Peter"
    // "Good Morning, Mark" */
function greetMessage(name) {
    l(`Good Morning, ${name}`);
}
const greetUsers = (users, fn) => users.forEach(fn);
greetUsers(["John", "Peter", "Mark"], greetMessage);
/* Number Sqaure
Write a function which will return sqaure of given number
Write a function which will return sqaure of every number in array
    const array = [1, 2, 3, 4, 5, 6]
    sqaure(array,squareNumber)  // return [1,4,9,16,25] */
const squareNumber = (n) => n * n;
const square = (nums, fn) => nums.map(fn);
const array = [1, 2, 3, 4, 5, 6];
l(square(array, squareNumber)); // return [1,4,9,16,25]
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQVMsRUFBRSxFQUFFLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDO0FBQ2pELE1BQU0sSUFBSSxHQUFHLENBQUMsR0FBRyxFQUFFO0lBQ2pCLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQztJQUNaLE9BQU8sR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLGtCQUFrQixHQUFHLEVBQUUsaUJBQWlCLENBQUMsQ0FBQztBQUMzRCxDQUFDLENBQUMsRUFBRSxDQUFDO0FBRUw7Ozs7Ozs7OzhCQVE4QjtBQUU5QixTQUFTLFlBQVksQ0FBQyxJQUFZO0lBQ2hDLENBQUMsQ0FBQyxpQkFBaUIsSUFBSSxFQUFFLENBQUMsQ0FBQztBQUM3QixDQUFDO0FBRUQsTUFBTSxVQUFVLEdBQUcsQ0FBQyxLQUFlLEVBQUUsRUFBMEIsRUFBRSxFQUFFLENBQ2pFLEtBQUssQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUM7QUFFcEIsVUFBVSxDQUFDLENBQUMsTUFBTSxFQUFFLE9BQU8sRUFBRSxNQUFNLENBQUMsRUFBRSxZQUFZLENBQUMsQ0FBQztBQUVwRDs7OzswREFJMEQ7QUFFMUQsTUFBTSxZQUFZLEdBQUcsQ0FBQyxDQUFTLEVBQUUsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDMUMsTUFBTSxNQUFNLEdBQUcsQ0FBQyxJQUFjLEVBQUUsRUFBeUIsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUUzRSxNQUFNLEtBQUssR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDakMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLHVCQUF1QiJ9