//We are declaring
function functionName(parameter, parameter2, ...otherParameters){
    //---code---
    let something = "Hello World";
    //At some point most functions want to return something:
    return something;
}

//How to run (how to "call") a function?
let result = functionName(5, 2, 3); //Calls the function with parameters 5,2,3
console.log(result); //should give me hello world
console.log(functionName()) //also possible to call the function directly inside another function


//Function that adds numbers together
function add(a, b){
    return (a + b) //Returns the result of the expression a + b
}

console.log(add(5,6));
result = add(5,6);
result = add(result, 5);
console.log(result);

//Function that take many paramets and you dont know exactly how many
function takesMany(a,b,...remainingParameters){
    console.log(a);
    console.log(b);
    console.log(remainingParameters);
}

takesMany(2,4,5,6) //2 and 4 will be directly assigned to a and b. [5,6] will be the remainingParameters


//Function do have their own scope. 
//While they can access variable that have been declared in the parent scope, 
//they can also re-declare them inside the function

result = 5;

function scopeExample(){
    let result = "Hello function Scope!"; //This only works because functions create their own scope (their own lexical context)
    console.log(result);
}

console.log(result); //logging 5
scopeExample();

//Functions are hoisted - you can call the function before it's declaration (function declaration is automatically moved to the top)
console.log(mulitply(5,6)); //called before the declaration

function mulitply(a,b){ //just now declared the function
    return a*b;
}


//about loops
let numOfPotatoes = 10;
let choppedPotatoes = 0;

//while(expression) {code} will run if the expression is true.
while(numOfPotatoes > 0){
    //do something
    console.log("Number of Potatoes: ", numOfPotatoes);
    choppedPotatoes++; //choppedPotatoes = choppedPotatoes + 1
    numOfPotatoes--; //numOfPotatoes = numOfPotatoes - 1   
    console.log("after: ", numOfPotatoes);
}

//The below is very common to do
let i = 0;
while(i < 10){
    console.log(i);
    i++; //VERY last statement of the loop
}

//This why the for() loop was added
//for(variable declaration; condition; VERY last statement of the loop) {--code--}
for(let i = 0; i < 10; i++){
    console.log(i);
}


//do{--code--}while(condition) is always going to execute the code at least once before checking the condition
do{
    console.log("Inside do...while");
}while(false) //even though the condition is false it will be executed


let array = ['a',"b","c","d","e"]
//for...of loop -> for(const iterator of iterable) iterator = something that can be incremented/where you can get a next "thing"
//iterable for example is and array or a string
for (const element of array) {
    console.log(element); //First iteration, element will be "a" -> 2nd it will be "b" -> 3rd it will be "c" .... 
}

//is equivalent to
for (let i = 0; i < array.length; i++) {
    let element = array[i];
    console.log(element); 
}









