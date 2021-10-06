const l = (...paras) => console.log(...paras);

const line = (()=>{
    let num = 1;

    return () => {
        l(`_________________${num++}_________________`)
    }
})()

//1. Add Up. Create a function that takes an integer as an argument. 
//Add up all the integers from 1 to the integer you passed to the function. 
//For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.
/*
Examples:
sumIntFrom1ToN(4) ➞ 10
sumIntFrom1ToN(13) ➞ 91
sumIntFrom1ToN(600) ➞ 180300
*/
line()
const sumIntFrom1ToN = (num) => {
    if(num === 1) return 1;
    return sumIntFrom1ToN(num-1)+num
}

l(sumIntFrom1ToN(3))

//2. Cubed. Create a function that takes in three numbers and returns the sum of its cubes.
/*
Examples:
sumOfCubes(1, 5, 9) ➞ 855 // Since 1^3 + 5^3 + 9^3 = 1 + 125 + 729 = 855
sumOfCubes(2) ➞ 8
sumOfCubes() ➞ 0
*/
line()
const sumOfCubes = (a=0,b=0,c=0) => {
    return a**3 + b**3 + c**3
}
l(sumOfCubes(1, 5, 9))
l(sumOfCubes(2))
l(sumOfCubes())

//3. String Check. Create a function that takes a string and a word, and then returns true or false depending on whether the word starts with the initial string.
/* 
Examples:
isStrStartOfWord("bu", "button") ➞ true
isStrStartOfWord("tri", "triplet") ➞ true
isStrStartOfWord("beau", "pastry") ➞ false */
line()
const isStrStartOfWord = (start, string) => string.indexOf(start) === 0 

l(isStrStartOfWord("bu", "button"))
l(isStrStartOfWord("tri", "triplet"))
l(isStrStartOfWord("beau", "pastry"))

/* 4. Less Than or Equal to Zero? Create a function that takes a number as its only argument and returns true if it's less than or equal to zero, otherwise return false.
Examples:
isLEQZero(3) ➞ false
isLEQZero(0) ➞ true
isLEQZero(-4) ➞ true
isLEQZero(10) ➞ false */
line()
const isLEQZero = n => n<=0;

l(isLEQZero(3))
l(isLEQZero(0))
l(isLEQZero(-4) )
l(isLEQZero(10))

/* 5. Count Occurrences. Create a function that accepts two arguments: a string and a letter. The function should count the number of occurrences of that letter in the string.
Example:
countOccurrences("this is a string", "i") ➞ 3 */
line()
const countOccurrences = (str, check) => str.match(new RegExp(`${check}`,"g"))?.length ?? 0; 
l(countOccurrences("this is a string", "x"))

/* 6. X To The Power of X. Create a function that takes a base number and an exponent number and returns the calculation. NB: All test inputs will be positive integers.
Examples:
calcBaseToExponent(5, 5) ➞ 3125
calcBaseToExponent(10, 10) ➞ 10000000000
calcBaseToExponent(3, 3) ➞ 27 */
line()
const calcBaseToExponent = (base, exponent) => base ** exponent;
l(calcBaseToExponent(5, 5) )
l(calcBaseToExponent(10, 10)) 
l(calcBaseToExponent(3, 3) )

/* 7. Dog Years. Create a function which calculates how old a dog is in dog years. 
The function should accept one argument that is the dog's age in human years. 
Calculate the dog's age in dog years based on the calculation of 1 human year = 7 dog years.
Example:
dogAge(4) ➞ "Your doggo is 28 years old in dog years!" */
line()
const dogAge = age => age * 7
l(dogAge(4))

/* 
8. A Lifetime Supply... You just won a lifetime supply of your favourite snack! 
The snack company needs to calculate what that actually means and how much they need to give you over your "lifetime". 
Create a function to help you calculate that amount for yourself. The function should accept two arguments: age and amount per day. 
The function should calculate the amount that will be consumed for the rest of your life given a constant maximum age of 100.

Examples:
calcLifetimeSupply(25, 2) ➞ "The snack company should provide you with 54,788 units, until you are a ripe old age of 100. Happy snacking!"
calcLifetimeSupply(40, 3) ➞ "The snack company should provide you with 65,745 units, until you are a ripe old age of 100. Happy snacking!"

Bonus:
Accept a third argument for maximum age (just in case the snack company has a particular maximum age cut off).
Accept floating point values for amount per day and round the result (in case the snack company has some weird average calculation for amount per day).

calcLifetimeSupply(32, 0.58, 65) ➞ "The snack company should provide you with 6991 units, until you are a ripe old age of 65. Happy snacking!" */
line()
const calcLifetimeSupply = (age, amountPerDay, maxAge=100) => Math.round((maxAge-age)*365.25*amountPerDay)
l(calcLifetimeSupply(25, 2))
l(calcLifetimeSupply(40, 3))
l(calcLifetimeSupply(25, 2, 50))
l(calcLifetimeSupply(32, 0.58, 65))

/* 9. Where's Waldo? Create a function that takes a string and returns true if Waldo is found, and false if he's not.

Examples:

isWaldoHere("is there a wal here?") ➞ false
isWaldoHere("I found you Waldo!") ➞ true
isWaldoHere("Wait, don't you mean Wally?") ➞ false
isWaldoHere("waldo is here") ➞ true */
line()

const isWaldoHere = str => str.toLowerCase().includes("waldo")

l(isWaldoHere("is there a wal here?"))
l(isWaldoHere("I found you Waldo!"))
l(isWaldoHere("Wait, don't you mean Wally?") )
l(isWaldoHere("waldo is here"))

/* 10. Pie. Create a function that determines whether or not it's possible to split a pie fairly given these three parameters:

Total number of slices.
Number of recipients.
How many slices each person gets.

Examples:
isEqualSlices(11, 5, 3) ➞ false // 5 people x 3 slices each = 15 slices > 11 slices
isEqualSlices(8, 3, 2) ➞ true
isEqualSlices(8, 3, 3) ➞ false
isEqualSlices(24, 12, 2) ➞ true */
line()
const isEqualSlices = (slices, people, perPerson) => people * perPerson <= slices

l(isEqualSlices(8, 3, 2))
l(isEqualSlices(8, 3, 3) )
l(isEqualSlices(24, 12, 2))

/* 11. XO Create a function that takes a string, checks if it has the same number of 'x's and 'o's and returns either true or false.

Notes:
Return a boolean value (true or false).
The string can contain any character.
When neither an x nor an o is in the string, return true.
Examples:

isEqualNumXandOs("ooxx") ➞ true
isEqualNumXandOs("xooxx") ➞ false
isEqualNumXandOs("ooxXm") ➞ true (case insensitive)
isEqualNumXandOs("zpzpzpp") ➞ true (returns true if no x and o)
isEqualNumXandOs("zzoo") ➞ false */
line()
const isEqualNumXandOs = str => str.toLowerCase().split("").reduce((prev,cur) => cur === "x" ? ++prev : cur === "o" ? --prev : prev, 0) === 0
l(isEqualNumXandOs("ooxx"))
l(isEqualNumXandOs("xooxx")) 
l(isEqualNumXandOs("ooxXm")) 
l(isEqualNumXandOs("zpzpzpp"))
l(isEqualNumXandOs("zzoo"))

/* 12. isPrime? Create a function that returns true if a number is a prime number, and false if it's not. 
NB: a prime number is any positive integer greater than 1, which is only evenly divisible by two divisors: itself and 1. 
The first ten prime numbers are 2, 3, 5, 7, 11, 13, 17, 19, 23 and 29.

Examples:
isPrime(7) ➞ true
isPrime(9) ➞ false
isPrime(10) ➞ false */
line()

const isPrime = n => {
    if(n <=1 )return false;
    for(let i = Math.ceil(n/2); i > 1; i--){
        if(n % i === 0)return false;
    }
    return true
}

l(isPrime(29) )
l(isPrime(9) )
l(isPrime(10) )

/* 13. Validate Email. Create a function that takes a string, checks for valid email address syntax, and then returns either true or false accordingly.

NOTE: email syntax is more complicated than you might think (see https://en.wikipedia.org/wiki/Email_address#Syntax), so we do not expect you to cover all cases! Just work your way through the below simplified validation criteria:

The string must contain exactly one "@" character
The string must contain at least one "." character
The "." and the "@" must be in the appropriate places:
neither "." nor "@" can be the last character
"." can neither be directly before, nor directly after, "@"
there cannot be consecutive "." characters
"@" must have at least one character in front of it
Examples:

"j@example.com" is valid while "@example.com" is invalid
e.g. "john.smith@com" is invalid while "john.smith@email.com" is valid
e.g. "john..smith@email.com" and "john.@email.com" and "john@.email.com" are all invalid */
line()
const isEmail = (str) => {
    //The string must contain exactly one "@" character
    if(!(str.lastIndexOf("@") === str.indexOf("@") && str.includes("@"))) return false;
    
    //The string must contain at least one "." character
    if(!str.includes("."))return false;

    //The "." and the "@" must be in the appropriate places:
    if(str.lastIndexOf(".") < str.lastIndexOf("@")) return false;

    //neither "." nor "@" can be the last character
    if(str.lastIndexOf(".") === str.length - 1 || str.lastIndexOf("@") === str.length - 1) return false;

    //"." can neither be directly before, nor directly after, "@"
    if("." === str[str.lastIndexOf("@")+1] || "." === str[str.lastIndexOf("@")-1] ) return false;

    //there cannot be consecutive "." characters
    for(let i = 0; i < str.length; i++){

        if(str[i] === "." && str[i+1] === ".") return false;

    }

    //"@" must have at least one character in front of it
    if(str.indexOf("@") === 0) return false;

    //If none of the above returns false, it is a email
    return true;
}


l(isEmail("j@example.com") === true) 
l(isEmail("@example.com") === false) //false
l(isEmail("john.smith@com") === false) //false
l(isEmail("john.smith@email.com") === true) //true
l(isEmail("john..smith@email.com") === false) //false
l(isEmail("john.@email.com") === false) //false
l(isEmail("john@.email.com") === false) //false

//Test for "The string must contain exactly one "@" character"
l(isEmail("j@example.com") === true) //true
l(isEmail("jexample.com")=== false) //false
l(isEmail("j@@example.com") === false) //false

//Test for "The string must contain at least one "." character"
l(isEmail("j@example.com") === true) //true
l(isEmail("j@exa.mple.com") === true) //true
l(isEmail("j@examplecom") === false) //false

//Test for "The "." and the "@" must be in the appropriate places:"
l(isEmail("j@example.com") === true) //true
l(isEmail("j.example@com") === false) //false

//Test for "neither "." nor "@" can be the last character"
l(isEmail("j@examplecom.") === false) //false
l(isEmail("jexamplecom.@") === false) //false

//Test for ""." can neither be directly before, nor directly after, "@""
l(isEmail("j@.example.com") === false) //false
l(isEmail("j.@example.com") === false) //false
l(isEmail("j.@.example.com") === false) //false

//Test for "there cannot be consecutive "." characters"
l(isEmail("a..j@example.com") === false) //false

//Test for ""@" must have at least one character in front of it"
l(isEmail("@example.com") === false) //false