//Declaring Functions
//1. Multiply - Function Declaration
//Create a function that multiples a number by another number.
function mul(a,b){
    return a*b
}
//2. Multiply - Function Declarations as Values
//Rework the syntax of the above function so that the function declaration is stored as a value.
let mulExpr = function (a,b){ return a*b}
//3. Multiply - Arrow Function
//Rework the syntax of the function declaration so that is uses the arrow function shorthand.
let mulArrow = (a,b) => a*b;
//4. Declarations
//Create functions (using all three declarations) to check the remainder of division given two numbers.

function remainder(a,b){
    return a%b;
}

let remainderExpr = function (a,b){return a % b}

let remainderArrow = (a,b) => a % b