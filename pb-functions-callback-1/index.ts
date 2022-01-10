const l = (...args: any) => console.log(...args);
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

function greetMessage(name: string): void {
  l(`Good Morning, ${name}`);
}

const greetUsers = (users: string[], fn: (name: string) => void) =>
  users.forEach(fn);

greetUsers(["John", "Peter", "Mark"], greetMessage);

/* Number Sqaure
Write a function which will return sqaure of given number
Write a function which will return sqaure of every number in array
    const array = [1, 2, 3, 4, 5, 6]
    sqaure(array,squareNumber)  // return [1,4,9,16,25] */

const squareNumber = (n: number) => n * n;
const square = (nums: number[], fn: (n: number) => number) => nums.map(fn);

const array = [1, 2, 3, 4, 5, 6];
l(square(array, squareNumber)); // return [1,4,9,16,25]
