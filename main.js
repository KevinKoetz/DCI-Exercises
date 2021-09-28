//Declare a variable named "euroCities" and assign an array to the variable e.g. ["Paris", "London", "Valletta", "Prague", "Rome"]. Declare another variable and assign the second item of the array as a value.
let euroCities = ["Paris", "London", "Valletta", "Prague", "Rome"];
let second = euroCities[1];
//Change the first item in the array to "Berlin".
euroCities[0] = "Berlin";
//Print the length of the array "euroCities".
console.log(euroCities.length);
//Remove the last item of the array "euroCities".
euroCities.pop();
//Use an array method to add "Budapest" to the euroCities array.
euroCities.push("Budapest")
//Bonus: Remove the second and third items from the euroCities array.
euroCities.splice(1,2); //starting index, how many elements to remove
console.log(euroCities);
//Create another variable named asianCities and assign an array of at least 5 cities to the variable.
let asianCities = ["Hongkong", "Wuhan", "Tokyo", "Bejing", "Dubai"]
//Bonus: Use an array method to select items 2-4 from the array of asianCities and store this in another variable.
let citySlice = asianCities.slice(1,4)
console.log(citySlice);
//Bonus: Use a method to concat euroCities with asianCities. Store the result in a variable (eg. worldCities).
let worldCities = euroCities.concat(asianCities);
console.log(worldCities);
//Reverse the order of worldCities.
worldCities.reverse();
console.log(worldCities);
//Bonus: Replace the 3rd item in the array of worldCities with "Toronto".
worldCities[2] = "Toronto"
console.log(worldCities);
//Bonus: Remove no elements from the array of worldCities, but insert "Washington" at the 2nd position.
worldCities.splice(1,0,"Washington")
console.log(worldCities);

/**
 Bonus Write a program to join all elements of the result (worldCities) into a string. 
 Example: worldCities = ["Berlin", "London", "Bangkok", "Phnom Penh"]; Expected Outputs: "Berlin , London, Bangkok, Phnom Penh" "Berlin+London+Bangkok+Phnom Penh"
 */
let cityString = worldCities.join("+");
console.log(cityString);

//Write a program to reverse the string: "Hello World".
let reversed = "Hello World".split("").reverse().join("");
console.log(reversed);

//Extra Practice
let characters = ["Cpt. America", "Black Widow", "Spider Man", "Iron Man"]
console.log(characters);
let parents = ["Margit Kötz", "Frank Kötz"]
console.log(parents);
let combined = characters.concat(parents);
console.log(combined);
combined.push("Mausi")
console.log(combined);
combined.reverse();
console.log(combined);
let father = combined[1];
console.log(father);
combined[1] = "Frank Wolfram Kötz"
console.log(combined[1]);

