// 1. We want to have function that takes a Name and return "Hello ${name}"
// name = "kevin" -> func(name) == "Hello kevin"

let name = 'Igor';

function greet(name) {
    let returnValue = "Hello " + name;
    return returnValue;
}

//console.log(greet(name));


// 2. Write a function that takes an Array of Names and for each name writes "Hello ${name}" to the console.
// names = ["Igor", "Tanya"] -> func(names) //Logs "Hello Igor" "Hello Tanya"



function result(persons){

    for(let i = 0; i < persons.length; i++){
        console.log("Hello " + persons[i]);
    }

    /* for(let person of persons){
        console.log("Hello " + person);
    } */
    //console.log("Hello " + persons[0]);
}

let classList = ["Igor", 'Tanya', 'Kevin', "Peter", "Paul"];
result(classList);

// 3. Write a function that returns true if the input string contains "@" and false otherwise
// func("@") -> true, func("name@example.com") -> true, func("noMail") -> false

let email = "namegmail@.com";

function isEmail(address) {
    //Return true if address contains "@"
    let hasAt = false;
    for(let i = 0; i < address.length; i++){
        if(address[i] === "@") {
            hasAt = true;
        } 
    }

    //Return false otherwise
    if(hasAt === true) {
        return true;
    } else {
        return false;
    }
}

console.log(isEmail(email));