function anagram(s1,s2) {
    //Make it Case insensitive   
    s1 = s1.toLowerCase();
    s2 = s2.toLowerCase();

    //Remove all non-letter characters
    s1 = s1.match(/[a-z]+/g)?.join("") ?? null;
    s2 = s2.match(/[a-z]+/g)?.join("") ?? null;

    //Return false if any of the Strings contains only non-letter characters
    if(!(s1 && s2)) return false;

    //Shortcut, return false if both strings have different length (they can not be anagrams)
    if(s1.length !== s2.length) return false;

    //Count the occourence of each different letter in s1 and store them in an object.
    let letterCount = Array.from(s1).reduce((prev, curr)=>{
        prev[curr] === undefined ? prev[curr] = 1 : prev[curr]++;
        return prev;
    }, {}) 
    console.log(letterCount);
    //Count the occourence of each different letter in s2 by substracting them from the respective key of the object created above
    let difference = Array.from(s2).reduce((prev, curr)=>{
        prev[curr] === undefined ? prev[curr] = -1 : prev[curr]--;
        return prev;
    }, letterCount) 
    console.log(difference);
    //Compare if s2 and s1 contain the same amount of each letter counted. All keys in this object should be 0 if this is the case.
    for (const key in difference) {
        //0 is a falsy value, so we should never enter this if statement if all are 0.
        if(difference[key]) return false;
    }
    return true;
}




//Testcases:
//Same Letter should be an anagram
console.log("Expected true:",anagram("s","s"));

//different Letter should not be an anagram
console.log("Expected false:",anagram("s","x"));

//Casing should not matter
console.log("Expected true:",anagram("S","s"));

//consider only characters, not spaces or punctuation.
console.log("Expected true:",anagram(" s","s."));
console.log("Expected false:",anagram("",""));
console.log("Expected false:",anagram(" "," "));

//Some random anagrams
console.log("Expected true:",anagram("sdqqsag","sgasqqd"));
console.log("Expected true:",anagram("xwWSfFF","sffXwwF"));

//Some random not-anagrams
console.log("Expected false:",anagram("awdasf","a2fasg"));
console.log("Expected false:",anagram("aawfawt","gawsdax"));

