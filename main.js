//Rewrite this if using the conditional operator '?':
/*
 let result;
    let a=3;
    let b=6;
    if (a + b < 4) {
    result = 'Below';
    } else {
    result = 'Over';
    }

    console.log(result)
*/

let a = 3;
let b = 6;
let result = a + b < 4 ? "Below" : "Over";
console.log(result);

//Rewrite the code below to use the ternary operator (?:) (you should be able to condense the if-else logic into one line).
/*
let score = 42;
    let msg = "";

    if (score > 1337)
    {
        msg = "This is a new highscore!";
    }
    else
    {
        msg = "You need more points to beat the highscore!";
    }
    console.log(msg)
*/

let score = 42;
let msg =
  score > 1337
    ? "This is a new highscore!"
    : "You need more points to beat the highscore!";
console.log(msg);

//Rewrite if..else using multiple ternary operators '?'.
/*
 let message;
    let login="Employee"
    if (login == 'Employee') {
    message = 'Hello';
    } else if (login == 'Director') {
    message = 'Greetings';
    } else if (login == '') {
    message = 'No login';
    } else {
    message = '';
    }
    console.log(message)
*/
let login = "Employee";
let message =
  login == "Employee"
    ? "Hello"
    : login == "Director"
    ? "Greetings"
    : login == ""
    ? "No login"
    : "";
console.log(message);
