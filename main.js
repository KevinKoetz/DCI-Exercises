//Switch if...
//1. Color Analyzer
//Create a switch statement that prints a different statement for each color possibility (red, blue, green, yellow).
let color = "red";
switch (color) {
  case "red":
    console.log(`${color} is a nice color`);
    break;
  case "blue":
    console.log(`${color} is a nice color`);
    break;
  case "green":
    console.log(`${color} is a nice color`);
    break;
  case "yellow":
    console.log(`${color} is a nice color`);
    break;
  default:
    console.log(`I don't know ${color}?!`);
    break;
}

//2. Grading
//Create a switch statement that prints different comments depending on a grade.
let grade = "A";
switch (grade) {
  case "A":
    console.log(`Perfect Score well done! Can you keep it up like that?`);
    break;
  case "B":
    console.log(`Almost perfect! Next time you get it.`);
    break;
  case "C":
    console.log(`Well done! You are better than most!`);
    break;
  case "D":
    console.log(`Whatever`);
    break;
  case "E":
    console.log(`You gave it your best! Try to improve.`);
    break;
  case "F":
    console.log(`Next time will be better, for sure!`);
    break;
  default:
    console.log(`${grade} is not a grade.`);
    break;
}

//3. Fruits
//Create a switch statement that prints different statement for various fruit (e.g. banana, orange, strawberry, apple).
let fruit = "banana";
switch (fruit) {
  case "banana":
    console.log(`Banana!`);
    break;
  case "orange":
    console.log(`I am not creative`);
    break;
  case "strawberry":
    console.log(`Yo Strawberry`);
    break;
  case "apple":
    console.log(`Whatever`);
    break;
  default:
    console.log(`${grade} is not a fruit.`);
    break;
}

/*
4. Percentage Complete.
If percentageComplete is below 30, print "Still a long way to go".
If the percentageComplete is between 30 and 50, print "Slowly getting there".
If percentageComplete is between 51 and 80, print "You can do it!".
If percentageComplete is between 81 and 99, print "This is the last push!".
If percentageComplete is 100, print "You're there. Well done!".
*/

let  percentageComplete = 100;
switch (true) {
  case percentageComplete < 30:
    console.log(`Still a long way to go`);
    break;
  case percentageComplete <= 50:
    console.log(`Slowly getting there`);
    break;
  case percentageComplete <= 80:
    console.log(`You can do it!`);
    break;
  case percentageComplete <= 99:
    console.log(`This is the last push!`);
    break;
    case percentageComplete == 100:
    console.log(`You're there. Well done!`);
    break;
}


//5. Differences
//When should you use a switch statement versus an if else statement. Comment your answer in your js file.
//Switch statement can be more readable if i need to check many conditions
//With the falltrough trough the cases (when no break is used) it can reduce code size / simplify code in certain cases
