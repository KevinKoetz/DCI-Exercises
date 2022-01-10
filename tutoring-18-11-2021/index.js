function createGuessFunction(guessFunctionBody) {
    return (lastGuess, memory) => {
        const result = { guess: "", memory: undefined };
        // eslint-disable-next-line no-eval
        const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
        if (!memory) {
            result.memory = {
                possibleDigits: [[...digits], [...digits], [...digits], [...digits]],
                impossibleDigit: null,
                state: "first",
            };
            result.guess = "0000";
        }
        else {
            const removeDigitFromPositions = (num, positions) => {
                for (const position of positions) {
                    const index = memory.possibleDigits[position].indexOf(num);
                    if (index !== -1)
                        memory.possibleDigits[position].splice(index, 1);
                }
            };
            const nextGuessFromPossibleDigits = () => {
                const positionIndex = memory.possibleDigits.findIndex((item) => item.length > 1);
                if (positionIndex > -1) {
                    const position = memory.possibleDigits[positionIndex];
                    const guess = new Array(4).fill(memory.impossibleDigit);
                    guess[positionIndex] = position[0];
                    return guess.join("");
                }
                else {
                    return memory.possibleDigits.flat().join("");
                }
            };
            if (memory.state === "first") {
                switch (lastGuess.guess) {
                    case "":
                        result.guess = "0000";
                        break;
                    case "0000":
                        if (lastGuess.bulls === 0 && lastGuess.cows === 0) {
                            removeDigitFromPositions(0, [0, 1, 2, 3]);
                            memory.impossibleDigit = 0;
                        }
                        result.guess = "1111";
                        break;
                    case "1111":
                        if (lastGuess.bulls === 0 && lastGuess.cows === 0) {
                            removeDigitFromPositions(1, [0, 1, 2, 3]);
                            memory.impossibleDigit = 1;
                        }
                        result.guess = "2222";
                        break;
                    case "2222":
                        if (lastGuess.bulls === 0 && lastGuess.cows === 0) {
                            removeDigitFromPositions(2, [0, 1, 2, 3]);
                            memory.impossibleDigit = 2;
                        }
                        result.guess = "3333";
                        break;
                    case "3333":
                        if (lastGuess.bulls === 0 && lastGuess.cows === 0) {
                            removeDigitFromPositions(3, [0, 1, 2, 3]);
                            memory.impossibleDigit = 3;
                        }
                        result.guess = "4444";
                        break;
                    case "4444":
                        if (lastGuess.bulls === 0 && lastGuess.cows === 0) {
                            removeDigitFromPositions(4, [0, 1, 2, 3]);
                            memory.impossibleDigit = 4;
                        }
                        result.guess = "5555";
                        break;
                    case "5555":
                        if (lastGuess.bulls === 0 && lastGuess.cows === 0) {
                            removeDigitFromPositions(5, [0, 1, 2, 3]);
                            memory.impossibleDigit = 5;
                        }
                        result.guess = "6666";
                        break;
                    case "6666":
                        if (lastGuess.bulls === 0 && lastGuess.cows === 0) {
                            removeDigitFromPositions(6, [0, 1, 2, 3]);
                            memory.impossibleDigit = 6;
                        }
                        result.guess = "7777";
                        break;
                    case "7777":
                        if (lastGuess.bulls === 0 && lastGuess.cows === 0) {
                            removeDigitFromPositions(7, [0, 1, 2, 3]);
                            memory.impossibleDigit = 7;
                        }
                        result.guess = "8888";
                        break;
                    case "8888":
                        if (lastGuess.bulls === 0 && lastGuess.cows === 0) {
                            removeDigitFromPositions(8, [0, 1, 2, 3]);
                            memory.impossibleDigit = 8;
                        }
                        result.guess = "9999";
                        break;
                    case "9999":
                        if (lastGuess.bulls === 0 && lastGuess.cows === 0) {
                            removeDigitFromPositions(9, [0, 1, 2, 3]);
                            memory.impossibleDigit = 9;
                        }
                        result.guess = nextGuessFromPossibleDigits();
                        result.memory = Object.assign(Object.assign(Object.assign({}, memory), result.memory), { state: "then" });
                        break;
                }
            }
            if (memory.state === "then") {
                const positions = [0, 1, 2, 3];
                const index = lastGuess.guess
                    .split("")
                    .findIndex((item) => item != memory.impossibleDigit);
                const num = Number(lastGuess.guess[index]);
                if (lastGuess.bulls === 0) {
                    removeDigitFromPositions(num, [index]);
                }
                if (lastGuess.bulls === 1) {
                    for (const impossibleDigit of memory.possibleDigits[index].filter((item) => item !== num))
                        removeDigitFromPositions(impossibleDigit, [index]);
                }
                result.guess = nextGuessFromPossibleDigits();
            }
            result.memory = Object.assign(Object.assign({}, memory), result.memory);
        }
        return result;
    };
}
function runGuessingFunction(guessingFunction, number) {
    try {
        const maxIterations = 10000;
        let i = 1;
        const lastGuess = { guess: "", bulls: 0, cows: 0 };
        let oldMemory = null;
        while (i <= maxIterations) {
            const { guess, memory } = guessingFunction(lastGuess, oldMemory);
            oldMemory = memory;
            lastGuess.guess = guess;
            lastGuess.bulls = getNumberOfBulls(number, guess);
            lastGuess.cows = getNumberOfCows(number, guess);
            if (lastGuess.guess === number)
                break;
            i++;
        }
        return {
            type: "success",
            foundNumber: lastGuess.guess === number,
            numGuesses: i,
        };
    }
    catch (error) {
        return { type: "error", error };
    }
}
function getNumberOfBulls(number, guess) {
    let result = 0;
    for (let i = 0; i < guess.length; i++) {
        const digit = guess[i];
        if (digit === number[i])
            result++;
    }
    return result;
}
function getNumberOfCows(number, guess) {
    let result = 0;
    for (let i = 0; i < guess.length; i++) {
        const digit = guess[i];
        if (number.includes(digit) && digit !== number[i])
            result++;
    }
    return result;
}
function generateNumber() {
    const digits = [];
    while (digits.length < 4) {
        const digit = Math.floor(Math.random() * 10);
        digits.push(digit);
    }
    return digits.join("");
}
const guessingFunction = createGuessFunction("");
const number = generateNumber();
console.log(runGuessingFunction(guessingFunction, number));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLQSxTQUFTLG1CQUFtQixDQUFDLGlCQUF5QjtJQUNwRCxPQUFPLENBQ0wsU0FBeUQsRUFDekQsTUFBVyxFQUNYLEVBQUU7UUFDRixNQUFNLE1BQU0sR0FBRyxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxDQUFDO1FBQ2hELG1DQUFtQztRQUNuQyxNQUFNLE1BQU0sR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBRTlDLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDWCxNQUFNLENBQUMsTUFBTSxHQUFHO2dCQUNkLGNBQWMsRUFBRSxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsRUFBRSxDQUFDLEdBQUcsTUFBTSxDQUFDLEVBQUUsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxFQUFFLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQztnQkFDcEUsZUFBZSxFQUFFLElBQUk7Z0JBQ3JCLEtBQUssRUFBRSxPQUFPO2FBQ2YsQ0FBQztZQUNGLE1BQU0sQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDO1NBQ3ZCO2FBQU07WUFDTCxNQUFNLHdCQUF3QixHQUFHLENBQUMsR0FBRyxFQUFFLFNBQVMsRUFBRSxFQUFFO2dCQUNsRCxLQUFLLE1BQU0sUUFBUSxJQUFJLFNBQVMsRUFBRTtvQkFDaEMsTUFBTSxLQUFLLEdBQUcsTUFBTSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQzNELElBQUksS0FBSyxLQUFLLENBQUMsQ0FBQzt3QkFBRSxNQUFNLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDLE1BQU0s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