/**
 * Transmission-Error
 * Your company needs to transmit a String over the Internet. For some reason you receive the wrong string sometimes.
 * It seems like the connection is unstable and changes one of the letters in your string randomly.
 * Your task is to implement a sender(sentString) and receiver(transmittedString) function that can correct this error.
 * The input of the sender function will be the String that your company wants to send. The input of the receiver function will 
 * be what was transmitted over the internet (with one letter changed).
 * 
 * For example:
 * The string i want to send "Hello World"
 * sender("Hello World") -> returns "Hello World + something that helps to detect and correct the error"
 * receiver("Xello World + something that helps to detect and correct the error") -> returns "Hello World"
 * 
 * Assumptions:
 * The length of the transmitted String does not change (so characters are only changed, not removed).
 * No matter how long the transmitted String is, only one character is going to change.
 * 
 * You can use this code to test your functions:
 * 
//Changes one letter of the input string and returns the changed string
function scrambler(str){
    let arr = str.split("")
    arr[Math.floor(Math.random()*str.length)] = String.fromCharCode(Math.floor(Math.random()*(0x7E - 0x41) + 0x41))
    return arr.join("")
}

//Creates a random string of length 0 - 20
function createRandomString(){
    let length = Math.floor(Math.random()*20)
    let arr = []
    for(let i = 0; i < length; i++){
        arr.push(String.fromCharCode(Math.floor(Math.random()*(0x7E - 0x41) + 0x41)))
    }
    return arr.join("");
}

//Tests the sender() and receiver() function for 10000 random strings.
for (let index = 0; index < 10000; index++) {
    let sentString = createRandomString()
    let transmittedString = scrambler(sender(sentString))
    let receivedString = receiver(transmittedString)
    if (sentString !== receivedString) {
        console.log("Sent String different from received  String");
        console.log("Sent String:",sentString);
        console.log("TransmittedString String:",transmittedString);
        console.log("Received String:",receivedString);
        break;
    } else {
        console.log("OK");
    }
}
 * 
 */



function sender(str){
    return str + str + str;
}

function receiver(str) {
    let str1 = str.slice(0, str.length / 3);
    let str2 = str.slice(str.length / 3, 2 * str.length / 3);
    let str3 = str.slice(2 * str.length / 3, str.length);
    return str1 === str2 ? str1 : str3;
}

function scrambler(str){
    let arr = str.split("")
    arr[Math.floor(Math.random()*str.length)] = String.fromCharCode(Math.floor(Math.random()*(0x7E - 0x41) + 0x41))
    return arr.join("")
}

function createRandomString(){
    let length = Math.floor(Math.random()*20)
    let arr = []
    for(let i = 0; i < length; i++){
        arr.push(String.fromCharCode(Math.floor(Math.random()*(0x7E - 0x41) + 0x41)))
    }
    return arr.join("");
}

for (let index = 0; index < 10000; index++) {
    let sentString = createRandomString()
    let transmittedString = scrambler(sender(sentString))
    let receivedString = receiver(transmittedString)
    if (sentString !== receivedString) {
        console.log("Sent String different from received  String");
        console.log("Sent String:",sentString);
        console.log("TransmittedString String:",transmittedString);
        console.log("Received String:",receivedString);
        break;
    } else {
        console.log("OK");
    }
}

