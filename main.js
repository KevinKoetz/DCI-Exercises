let a = false;
let b = true;

console.log(a&&b); //returns false because not both are true
console.log(a||b); //returns true because one is true
console.log(!(a&&b)); //returns true because a&&b is false

let atoms = 560089414684654679, sandGrains = 61064810321, starsInSky = 64096413

console.log(atoms > starsInSky && atoms > sandGrains); //returns true because atoms are bigger than the other numbers
console.log(atoms !== sandGrains); // returns true because atoms is not equal to sandGrains
console.log(starsInSky < sandGrains || starsInSky > atoms); // retungs true because sandGrains is bigger than starsInSky
console.log(atoms === starsInSky ||atoms !== sandGrains); // returns  true because atoms is not equal to sandGrains
console.log(atoms >= 10 && sandGrains <= 10); // returns false because sandGrains is bigger than 10
console.log(atoms * starsInSky < 100 || atoms * starsInSky > 100); // returns true because the rhs expression is true

