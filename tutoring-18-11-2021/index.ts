type GuessingFunction = (
  lastGuess: { guess: string; bulls: number; cows: number },
  memory: any
) => { guess: string; memory: any };

function createGuessFunction(guessFunctionBody: string) {
  return (
    lastGuess: { guess: string; bulls: number; cows: number },
    memory: any
  ) => {
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
    } else {
      const removeDigitFromPositions = (num, positions) => {
        for (const position of positions) {
          const index = memory.possibleDigits[position].indexOf(num);
          if (index !== -1) memory.possibleDigits[position].splice(index, 1);
        }
      };

      const nextGuessFromPossibleDigits = () => {
        const positionIndex = memory.possibleDigits.findIndex(
          (item) => item.length > 1
        );
        if (positionIndex > -1) {
          const position = memory.possibleDigits[positionIndex];
          const guess = new Array(4).fill(memory.impossibleDigit);
          guess[positionIndex] = position[0];
          return guess.join("");
        }else {
            return memory.possibleDigits.flat().join("")
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
            result.memory = {
              ...memory,
              ...result.memory,
              ...{ state: "then" },
            };
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
          for (const impossibleDigit of memory.possibleDigits[index].filter(
            (item) => item !== num
          ))
            removeDigitFromPositions(impossibleDigit, [index]);
        }
        result.guess = nextGuessFromPossibleDigits();
      }

      result.memory = { ...memory, ...result.memory };
    }

    return result;
  };
}

function runGuessingFunction(
  guessingFunction: GuessingFunction,
  number: string
):
  | {
      type: "success";
      foundNumber: boolean;
      numGuesses: number;
    }
  | { type: "error"; error: any } {
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
      if (lastGuess.guess === number) break;
      i++;
    }
    return {
      type: "success",
      foundNumber: lastGuess.guess === number,
      numGuesses: i,
    };
  } catch (error: any) {
    return { type: "error", error };
  }
}

function getNumberOfBulls(number: string, guess: string) {
  let result = 0;
  for (let i = 0; i < guess.length; i++) {
    const digit = guess[i];
    if (digit === number[i]) result++;
  }
  return result;
}

function getNumberOfCows(number: string, guess: string) {
  let result = 0;
  for (let i = 0; i < guess.length; i++) {
    const digit = guess[i];
    if (number.includes(digit) && digit !== number[i]) result++;
  }
  return result;
}

function generateNumber() {
  const digits: number[] = [];
  while (digits.length < 4) {
    const digit = Math.floor(Math.random() * 10);
    digits.push(digit);
  }
  return digits.join("");
}

const guessingFunction = createGuessFunction("");
const number = generateNumber()
console.log(runGuessingFunction(guessingFunction, number));
