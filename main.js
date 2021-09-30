//Programming Basics: For Loops
//These exercises are designed for practising "for" loops. Print all your results to the console.

//Addition. Write a program to add up the numbers 1 to 20.
{
  let sum = 0;
  for (let index = 1; index <= 20; index++) {
    sum += index;
  }
  console.log(sum);
}

//There are i bottles of beer on the wall. Write a program that will output, "There is one bottle of beer on the wall."
//"There are two bottles of beer on the wall" up until there are five bottles.
for (let i = 1; i <= 5; i++) {
  let bottle = i > 1 ? "bottles" : "bottle";
  let are = i > 1 ? "are" : "is";
  console.log(`There ${are} ${numberToString(i)} ${bottle} of beer on the wall.` );
}

function numberToString(number){
  switch (number) {
    case 1: return "one";
    case 2: return "two";
    case 3: return "three";
    case 4: return "four";
    case 5: return "five";
    default: return `${number}`
  }
}

//The odd/even reporter. Write a program that will iterate from 0 to 20. For each iteration, it will check if the current number is even or odd, and report that to the screen (e.g. "2 is even").
for (let i = 0; i <= 20; i++)
  console.log(i % 2 == 0 ? `${i} is even` : `${i} is odd`);
//Multiplication Tables. Write a program that will iterate from 0 to 10. For each iteration of the for loop, it will multiply the number by 9 and log the result (e.g. "2 * 9 = 18"). Bonus: Use a nested for loop to show the tables for every multiplier from 1 to 10 (100 results total).
for (let i = 0; i <= 10; i++) {
  for (let j = 0; j <= 10; j++) console.log(`${i} * ${j} = ${i * j}`);
}
//Fizz Buzz Write a program which iterates the integers from 1 to 100. But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz". For numbers which are multiples of both three and five print "FizzBuzz".
for (let i = 1; i <= 100; i++)
  console.log(
    i % 3 === 0 && i % 5 === 0
      ? "FizzBuZZ"
      : i % 3 === 0
      ? "Fizz"
      : i % 5 === 0
      ? "Buzz"
      : i
  );

//Sum of Multiples Write a program to add the multiples of 3 and 5 under 1000.
{
  let sum = 0;
  for (let i = 0; i <= 1000; i++)
    sum = i % 3 === 0 || i % 5 === 0 ? sum + i : sum;
  console.log(sum);
}

//Bonus

//Write programs that produce the following outputs:
//100 200 300 400 500 600 700 800 900 1000
for(let i = 100; i <= 1000; i+=100) console.log(i);

//0 2 4 6 8 10
for(let i = 0; i <= 10; i+=2) console.log(i);

//3 6 9 12 15
for(let i = 3; i <= 15; i+=3) console.log(i);

//9 8 7 6 5 4 3 2 1 0
for(let i = 9; i >= 0 ; i--) console.log(i);

//1 1 1 2 2 2 3 3 3 4 4 4
for(let i = 1; i <= 4; i++){
    for(let j = 0; j < 3; j++)console.log(i);
}

//0 1 2 3 4 0 1 2 3 4 0 1 2 3 4
for(let i = 1; i <= 3; i++){
    for(let j = 0; j <= 4; j++)console.log(j);
}


//isPalindrome. Write a program to check whether a word is a palindrome or not.
//Note: a palindrome is a word, phrase, or sequence that reads the same backwards as forwards, e.g. madam or tarrattarrat

function isPalindrome(str){
    for (let index = 0; index < str.length / 2; index++) {
        const left = str[index];
        const right = str[str.length - 1 - index];
        if(left !== right) return false
    }
    return true;
}

console.log(isPalindrome("tarrattarrat"));
