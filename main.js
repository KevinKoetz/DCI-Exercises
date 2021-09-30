//Programming Basics: Conditionals Part 3
//Attempt this exercise using only simple "if" conditionals (and only what you have learnt this far into the course, so no loops, functions or arrays just yet!)

//Print your results to the console

//Aleeza and Lis both play basketball in different teams. In the latest 3 games, Aleeza's team scored 89, 120 and 103 points, while Lis's team scored 116, 94 and 123 points.
//1a) Calculate the average score for each team.
let aleezaAverage = (89 + 120 + 103) / 3
let lisAverage = (116 + 94 + 123) /3 

//1b) Decide which teams wins in average (highest average score), and print the winner to the console, including their average score in the output.
if(aleezaAverage > lisAverage) {
    console.log("Aleeza's Team has the higher average");
} else if(lisAverage > aleezaAverage) {
    console.log("Liz's Team has the higher average");
} else {
    console.log("It's a draw");
}

//1c) Then change the scores to show different winners. Don't forget to take into account there might be a draw (the same average score).

aleezaAverage = (130 + 120 + 103) / 3
lisAverage = (116 + 94 + 123) /3 

if(aleezaAverage > lisAverage) {
    console.log("Aleeza's Team has the higher average");
} else if(aleezaAverage < lisAverage) {
    console.log("Liz's Team has the higher average");
} else {
    console.log("It's a draw");
}

//1d) Mary also plays basketball, and her team scored 97, 134 and 105 points. Like before, log the average winner to the console.
let maryAverage = (140 + 150 + 99) /3 

if(aleezaAverage > lisAverage && aleezaAverage > maryAverage) {
    console.log("Aleeza's Team has the higher average");
} else if(lisAverage > aleezaAverage && lisAverage > maryAverage) {
    console.log("Liz's Team has the higher average");
} else if(maryAverage > aleezaAverage && maryAverage > lisAverage) {
    console.log("Mary's Team has the higher average");
}else{
    console.log("It's a draw");
}

//1e) Like before, change the scores to generate different winners, keeping in mind that there might be draws.

maryAverage = 180
aleezaAverage = 190
lisAverage = 1990

if(aleezaAverage > lisAverage && aleezaAverage > maryAverage) {
    console.log("Aleeza's Team has the higher average");
} else if(lisAverage > aleezaAverage && lisAverage > maryAverage) {
    console.log("Liz's Team has the higher average");
} else if(maryAverage > aleezaAverage && maryAverage > lisAverage) {
    console.log("Mary's Team has the higher average");
}else{
    console.log("It's a draw");
}