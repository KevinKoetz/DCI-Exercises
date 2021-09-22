function vowels(str) {
    let vowels = "";
    for (const char of str) {
       vowels = char === "a" || char === "e" || char === "i" || char === "o" || char === "u" ? vowels + char : vowels;
    }
    return vowels;
}



function vowelsRegEx(str) {
    return  str.match(/[aeiou]/g)?.join("") ?? "" ;
}

console.log(vowels("aeiou"));
console.log(vowels(""));
console.log(vowels("ZZZazzz"));
console.log(vowels("ZZZ"));
console.log(vowels("This is a test string"));

console.log(vowelsRegEx("aeiou"));
console.log(vowelsRegEx(""));
console.log(vowelsRegEx("ZZZazzz"));
console.log(vowelsRegEx("ZZZ"));
console.log(vowelsRegEx("This is a test string"));