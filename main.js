//1. Updater
//Create a new variable and call it determiner
let determiner;
//Give determiner a random value between -100 and 100 (change it to experiment)
determiner = Math.random() * 200 - 100;
//Create a 2nd variable called x
let x;
//Depending on the value of determiner, assign a value to x.
//If determiner is less than 0, x's value should be "Less than 0"
//If determiner is greater or equal 0, x's value should "Greater or equal to 0".
x = determiner < 0 ? "Less than 0" : "Greater or equal to 0";
console.log(determiner);
console.log(x);

//2. New Variables
//Create a new variable called updater
let updater;

//Depending on the value of determiner

//If determiner is greater of equal to 0

if (determiner >= 0) {
  //set updater to "Greater or equal to 0"
  updater = "Greater or equal to 0";
  //create another variable called message
  //assign a value of "Positive Integer" to message
  let message = "Positive Integer";
  //print out message.
  console.log(message);
}

//If determiner is less than 0, assign updater' the value "Less than 0".
if (determiner < 0) {
  updater = "Greater or equal to 0";
  console.log(updater);
}
//Print out the value of updater

//Question: What would happen if we tried to print "message" outside of the if statement? Comment your answer in the js file.
//Would always print, even on negative values of determiner

//3. Ternary v.s. If statement
//When do you use a ternary v.s. an if statement? Give an example.
//You use if, if you need to execute more than one command (a block of code)
