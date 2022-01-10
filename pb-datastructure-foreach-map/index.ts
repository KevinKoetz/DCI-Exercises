const l = (...args: any) => console.log(...args);
const line = (() => {
  let num = 1;
  return () => l(`_______________${num++}_______________`);
})();

/* 1. Write a function called doubleValues which accepts an array and returns a new array with all the values in the array passed to the function doubled

Examples:

doubleValues([1,2,3]) // [2,4,6]
doubleValues([5,1,2,3,10]) // [10,2,4,6,20] */
line();

const doubleValues = (nums: number[]) => nums.map((item) => item * 2);

l(doubleValues([1, 2, 3]));
l(doubleValues([5, 1, 2, 3, 10]));

/* 2. Write a function called onlyEvenValues which accepts an array and returns a new array with only the even values in the array passed to the function

Examples:

onlyEvenValues([1,2,3]) // [2]
onlyEvenValues([5,1,2,3,10]) // [2,10] */
line();

const onlyEvenValues = (nums: number[]) =>
  nums.filter((item) => item % 2 === 0);

l(onlyEvenValues([1, 2, 3]));
l(onlyEvenValues([5, 1, 2, 3, 10]));

/* 3. Write a function called showFirstAndLast which accepts an array of strings and returns a new array with only the first and last character of each string

Examples:

showFirstAndLast(['colt','matt', 'tim', 'udemy']) // ["ct", "mt", "tm", "uy"]
showFirstAndLast(['hi', 'goodbye', 'smile']) // ['hi', 'ge', 'se'] */
line();

const showFirstAndLast = (words: string[]) =>
  words.map((word) => word[0] + word[word.length - 1]);

l(showFirstAndLast(["colt", "matt", "tim", "udemy"]));
l(showFirstAndLast(["hi", "goodbye", "smile"]));

/* 4. Write a function called addKeyAndValue which accepts an array of objects, a key, and a value and then returns the array passed to the function with the new key and value added for each object

Examples:

addKeyAndValue([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'title', 'instructor') 

// [{name: 'Elie', title:'instructor'}, {name: 'Tim', title:'instructor'}, {name: 'Matt',  */

const addKeyAndValue = (persons: object[], key: string, value: string) =>
  persons.map((person) => {
    type PersonCopy = {
      key: string;
    };
    const personCopy = Object.assign({ key }, person);
    personCopy[key as keyof PersonCopy] = value;
    return personCopy;
  });

l(
  addKeyAndValue(
    [{ name: "Elie" }, { name: "Tim" }, { name: "Matt" }, { name: "Colt" }],
    "title",
    "instructor"
  )
);

/* 5. Write a function called vowelCount which accepts a string and returns an object with the keys as the vowel and the values as the number of times the vowel appears in the string. This function should be case insensitive so that both lowercase and uppercase letters should be counted

Examples:

vowelCount('Elie') // {e:2,i:1};
vowelCount('Tim') // {i:1};
vowelCount('Matt') // {a:1})
vowelCount('hmmm') // {};
vowelCount('I Am awesome and so are you') // {i: 1, a: 4, e: 3, o: 3, u: 1}; */
type Vowels = {
  a: number;
  e: number;
  i: number;
  o: number;
  u: number;
};
const vowelCount = (str: string) =>
  str.split("").reduce((vowels, char) => {
    const lowerCase = char.toLowerCase();
    if (["a", "e", "i", "o", "u"].includes(lowerCase)) {
      if (lowerCase in vowels) {
        vowels[lowerCase as keyof Vowels]++;
      } else {
        vowels[lowerCase as keyof Vowels] = 1;
      }
    }
    return vowels;
  }, {} as Vowels);

l(vowelCount("Elie")); // {e:2,i:1};
l(vowelCount("Tim")); // {i:1};
l(vowelCount("Matt")); // {a:1})
l(vowelCount("hmmm")); // {};
l(vowelCount("I Am awesome and so are you")); // {i: 1, a: 4, e: 3, o: 3, u: 1}; */

function unique(array: number[]) {
  for (let i = 0; i < array.length; i++) {
    if (
      array.indexOf(array[i], i + 1) === -1 &&
      (i - 1 < 0 || array.lastIndexOf(array[i], i - 1) === -1)
    ) {
      return array[i];
    }
  }
}
console.log("--------------------------------------");
console.log("hellooo", unique([3, 3, 3, 5, 3, 3]));
