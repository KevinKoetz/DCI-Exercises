const quotes = Array(10).fill("").map(item => generateGibberish(5,20))

function generateGibberish(minLength: number, maxLength: number) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz"
    const length = Math.floor(Math.random() * (maxLength - minLength) + minLength)
    let result = ""
    for(let i = 0; i < length; i++){
        result += alphabet[Math.floor(Math.random()*alphabet.length)]
    }
    return result
}

console.log(quotes);

function displayRandomQuote(quotes: string[]){
    const quote = document.getElementById("quote")
    if(!quote) return;
    quote.innerText = quotes[Math.floor(Math.random() * quotes.length)]   
}

displayRandomQuote(quotes)

const btn = document.getElementById("randomQuote")
if(btn) btn.addEventListener("click", displayRandomQuote.bind(this, quotes))

