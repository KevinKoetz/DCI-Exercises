const l = (...para) => console.log(...para);
const line = (str) => l(str + "___________________________");

//Write a function that takes in one parameter and logs that parameter 3 times into the console.
line("1.");
const log3 = (para) => {
  for (let index = 0; index < 3; index++) {
    l(para);
  }
};
log3("Test");

//Write a function that takes in one parameter and returns that parameter repeated five times. For the input "Cat" it would return "CatCatCatCatCat"
line("2.");
const repeat5 = (para) => {
  let result = "";
  for (let index = 0; index < 5; index++) {
    result += para;
  }
  return result;
};
l(repeat5("Cat"))

/*Write a function that takes in two parameters, the first one should be a number and the 2nd one should be a string. 
The functions returns the 2nd argument repeated as many times as the 1st argument defins. 
For the inputs 3 and "Woah" it should return WoahWoahWoah*/
line("3.");
const repeat = (times, str, spacer) => {
    spacer = spacer ?? ""
    let result = "";
  for (let index = 0; index < times; index++) {
    result += str + spacer;
  }
  return result;
}
l(repeat(3, "Woah"))

//Write a function that takes in an array of numbers as a parameter. 
//It should return the largest number in the array. For the input [1,6,83,91,0,-4,1337,5] it should return 1337
line("4.")
const max = (arr) => {
    let max = null;
    arr.forEach(element => {
        max = max === null ? element : element > max ? element : max;
    });
    return max;
}
l(max([1,6,83,91,0,-4,1337,5]))

//This question has 2 parts
//Part a) write a function that takes in a number and does a console.log("Even 10!") if the number is evenly divisable by 10.
line("5")
const printIfDivisibleByTen = num => {if(num % 10 === 0) l("Even 10!")}
for (let index = 0; index < 125; index++) {
    const element = index;
    printIfDivisibleByTen(element);
}

//Write an arrow function that takes in 5 numbers as its parameters and returns the largest one
line("6")
const largest = (n1, n2,n3,n4,n5) => max([n1,n2,n3,n4,n5]);
l(largest(1,6,83,91,0))

//Write an arrow function that takes in one parameter and returns true if that parameter is a string.
line("7")
const isString = para => typeof para === "string"
l(isString("Test"))
l(isString(""))
l(isString(2))

//Write an arrow function that takes in two parameters and returns true if both of them are strings.
line("8")
const areStrings = (p1, p2) => isString(p1) && isString(p2);
l(areStrings("Test", ""))
l(areStrings(1, ""))

//Write an arrow function that takes in one string. The function should return the first word in the string that was given to it.
line("9")
const firstWord = str => str.split(" ")[0]
l(firstWord("Hello World"))
l(firstWord("Hello"))
l(firstWord(""))

//HARD Write an arrow function that takes in one string. 
//The function should return a new string that where each word in the input string is repeated by the amount of words in the input string. 
line(10)
const wordRepeater = str => {
    let result = "";
    let words = str.split(" ");

    words.forEach((word)=>{
        result = result + repeat(words.length,word, " ")
    })

    return result;
}

l(wordRepeater("bunny"))
l(wordRepeater("Cat food"))
l(wordRepeater("I am groot"))
l(wordRepeater("O M G ?"))

//Write a short (single line) arrow function that takes in one string and returns the first character of that string.
line(11)
const firstChar = str => str[0]
l(firstChar("lol"))

//Write an arrow function that takes in one string and returns a new string. The new string needs to be made from the first letter of each of the words in the input. 
line(12)
const abbreviation = str => str.split(" ").reduce((prev, curr)=>prev + firstChar(curr), "")
l(abbreviation("cat"))
l(abbreviation("What the fruit"))
l(abbreviation("MongoDB Express Node React"))
l(abbreviation("What You See Is What You Get"))

//Write an arrow function that takes in one variable. 
//If that variables is a string, it will return the length of the string. 
//If that variable is an array, it returns the length of the array. 
//If it is something else, it will return null. 
//You might need to search Google to find out how can you identify if the parameter is an array - but there are other ways to solve this too!
line(13)
const length = para => isString(para) ? para.length : Array.isArray(para) ? para.length : null;
l(length("123"))
l(length([1,2,3]))
l(length(123))

//Write an arrow function that takes in one variable. 
//If the variable is not a string, return null. 
//If it is a string, return an array where each of the characters of that string is in individual array entry.
line(14)
const split = str => isString(str) ? str.split("") : null;
l(split("Hello"))
l(split("R & D"))

//Reverse engineering challenge 1. Write a function that does this (BONUS: write it as a short (one line) arrow function):
/*
foo("") -> false
foo("a") -> false
foo("o") -> true
foo("Cat") -> false
foo("Tomato") -> true
foo("Potato") -> true
foo("Blanket") -> false
foo("1") -> false
*/
line(15)
const foo = para => para.includes("o")
l(foo(""))
l(foo("a"))
l(foo("o"))
l(foo("Cat")) 
l(foo("Tomato")) 
l(foo("Potato")) 
l(foo("Blanket")) 
l(foo("1"))

//Reverse engineering challenge 2. Write a function that does this (BONUS: write it as a short (one line) arrow function):
/*
bar("") --> "Cat"
bar("x") --> "Cat"
bar("Cat") --> "Catt"
bar("Foobar") --> "Catobar"
bar("Potato") --> "Cattato"
bar("Tomato") --> "Catmato"
bar("International Space Station") --> "Catternational Space Station"
 */
line(16)
const bar = str => "Cat" + str.slice(2)

l(bar("") )
l(bar("x") )
l(bar("Cat") )
l(bar("Foobar") )
l(bar("Potato") )
l(bar("Tomato") )
l(bar("International Space Station"))