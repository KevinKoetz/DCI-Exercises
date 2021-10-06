const l = (...paras) => console.log(...paras);

const line = (()=>{
    let num = 1;

    return () => {
        l(`_________________${num++}_________________`)
    }
})()


/* Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string.
Note : As the letter 'y' can be regarded as both a vowel and a consonant, we do not count 'y' as vowel here.
    Example string : 'The quick brown fox'
    Expected Output : 5  */
line()
const vowels = string => string.match(/[aeiou]/g)?.length ?? 0

l(vowels('The quick brown fox'))
l(vowels(''))

/* Write a JavaScript function that generates a string id (specified length) of random characters.
    Sample character list : ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789 */
line()
const stringId = (length=5) => {
    const charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
    let id = ""
    for(let i = 0; i < length; i++){
        id += charset[Math.floor(Math.random()*charset.length)]
    }
    return id;
}

l(stringId(125))
