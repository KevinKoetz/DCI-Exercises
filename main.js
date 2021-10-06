const l = (...paras) => console.log(...paras);

const line = (()=>{
    let num = 1;

    return () => {
        l(`_________________${num++}_________________`)
    }
})()

/* 
Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case.
    Example string : 'the quick brown fox'
    Expected Output : 'The Quick Brown Fox ' */
line()
const capitalize = str => str.split(" ").map(el => el[0].toUpperCase() + el.slice(1)).join(" ")

l(capitalize('the quick brown fox'))

/* Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.
    Example string : 'Web Development Tutorial'
    Expected Output : 'Development' */
line()
const longestWord = words => words.split(" ").reduce((prev, curr)=> curr.length > prev.length ? curr : prev)

l(longestWord("Web Development Tutorial"))

/* Write a JavaScript function that accept a list of country names as input and returns the longest country name as output.
    Longest_Country_Name(
        ["Australia", 
        "Germany", 
        "United States of America"]
        )
    Expected output : "United States of America" */

line()
const longestCountryName = countries => countries.reduce((prev, curr)=> curr.length > prev.length ? curr : prev)
l(longestCountryName(["Australia", 
"Germany", 
"United States of America"]))
