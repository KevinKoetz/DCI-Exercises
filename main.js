//Repeat
//1. Run Along
//Create a while loop that runs as long as the variable i is less than 15. Print i.
{
    let i = 0;
    while(i < 15){
        console.log(i++);
    }
}

//2. Add it up
//Create a function which sums up numbers from 1-20 using a while loop.
{
    let sum = 0;
    let i = 1;
    while(i <= 20){
        sum += i++;
    }
    console.log(sum);
}

//3. Do this while i...
//Use a do, while loop to print The number is [i] while i is less than 20.

{
    let i = 0;
    do {
        console.log(`The number is ${i++}`);
    }
    while(i < 20)
}