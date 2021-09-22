let s1 = "I can walk in the park all day!";
console.log(s1.slice(s1.indexOf("p"),s1.indexOf("p")+4));

let s2 = "Hello World";
console.log(s2.toUpperCase());

let s3 = "Hello Earthling";
console.log(s3.toLowerCase());

let s4 = "JavaScript";
console.log(s4.slice(3,6));

let s5 = "nice shoes";
console.log(s5.includes("l") ? true : s5.includes("n"));

let s6 = "Bananas";
console.log(s6[0]+s6+s6[0]);

let s7 = "Scritch";
console.log(s7.slice(-3) + s7 + s7.slice(-3));

let s8 = "BoogieWoogie";
console.log(s8[s8.length-1] + s8.slice(1, s8.length-1) + s8[0]);

let firstName = "Kevin";
let lastName = "Kötz";
let city = "Halle";

console.log(`I am ${firstName} ${lastName} and i live in ${city}`);

let s9 = "the quick brown fox";
console.log(s9[0].toUpperCase() + s9.slice(1));