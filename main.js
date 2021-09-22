function vowels(str) {
    let vowels = "";
    for (const char of str) {
       vowels = char === "a" || char === "e" || char === "i" || char === "o" || char === "u" ? vowels + char : vowels;
    }
    return vowels;
}


console.log(vowels("aeiou"));
console.log(vowels(""));
console.log(vowels("ZZZazzz"));
console.log(vowels("ZZZ"));
console.log(vowels("This is a test string"));
