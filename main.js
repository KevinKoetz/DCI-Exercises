//Function Scope
//1. Print Exponential Values
//Write a function that accepts two numbers and validate that they are numbers.
let isNumber = (a) => !Number.isNaN(a) && typeof a === "number"
//After that, the function should print y exponential values starting from x.
//For example if we have function(3, 5) The function should print 3 9 27 81 243. Prints 5 exponential values of 3.
//function(2, 8) The function prints 2 4 8 16 32 64 128 256. Prints 8 exponential values of 2.
let exponentials = (a,b) => {
    if(!(isNumber(a) && isNumber(b))) return NaN
    for(let i = 1; i <= b; i++){
        console.log(a**i);
    }
}
exponentials(2,8)
//2. Fruits
//Create a function named printFavoriteFruit. Declare a variable outside of the function and store your favorite fruit as a value. Reassign the variable within the function and print "My favorite fruit is: x".
let fruit = "papaya"
let printFavoriteFruit = (fruit) => {
    fruit = "banana"
    console.log(`My favorite fruit is: ${fruit}`);
}

printFavoriteFruit(fruit);
console.log(fruit);
//3. Multiply a Number by Itself
//Create a function named exponent that takes two numbers as parameters. The second parameter defines how many times the first number should be multiplied by itself. Save the output in a variable named result.
//Then, try to access the variable result outside of the exponent function. Is this possible? Why/Why not? Comment your answer in the index.js file.
let exponent = (a,b) => {
    let result = a ** b
}
//console.log(result); not possible because result has only function scope