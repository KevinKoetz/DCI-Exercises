const rndNum = Math.floor(Math.random()*10 + 1)
let hasWon = false;

for (let guessCount = 1; guessCount <= 3; guessCount++) {
    const guess = prompt("Guess a number between 1 - 10")
    if(guess !== null && Number.parseInt(guess) === rndNum){
        alert(`Success, the number was ${rndNum}! Attempts: ${guessCount}`)
        hasWon = true;
    }
}

if(!hasWon) alert(`Sorry, you failed to guess the number in three attempts. The number was ${rndNum}!`)