const l = (...p) => console.log(...p);

const line = (() => {
  let n = 1;
  return () => l(`__________________${n++}__________________`);
})();

/*
Credit Card Validation
You're starting your own credit card business. You need to come up with a new way to validate credit cards with a simple function called validateCreditCard that returns true or false.

Here are the rules for a valid number:

Number must be 16 digits, all of them must be numbers
You must have at least two different digits represented (all of the digits cannot be the same)
The final digit must be even
The sum of all the digits must be greater than 16
The following credit card numbers are valid:

9999777788880000
6666666666661666
The following credit card numbers are invalid:

a92332119c011112 invalid characters
4444444444444444 only one type of number
1111111111111110 sum less than 16
6666666666666661 odd final number
Bonus #1: A valid credit card number may also contain dashes, to make a card number easier to read. For example, the following credit card numbers are now also valid:

9999-7777-8888-0000
6666-6666-6666-1666
Update your program to allow such numbers. (Hint: Remove the dashes from the input string before checking if the input credit card number is valid.)

Bonus #2: Return an object indicating whether the credit card is valid, and if not, what the error is
{ valid: true, number: '9923-3211-9c01-1112' }
{ valid: false, number: '9923-3211-9c01-1112', error: ‘wrong_length’ }

Bonus #3: Make your credit card scheme even more advanced! What are the rules, and what are some numbers that pass or fail? Ideas: check expiration date! Check out the Luhn Algorithm for inspiration.
*/

const validateCreditCard = (str) => {
  const arr = str.split("").filter((item) => item !== "-");
  const result = {
    valid: true,
    number: str,
  };

  if (arr.length < 16) {
    result.valid = false;
    result.error = "wrong_length";
    return result;
  }
  if (arr[arr.length - 1] % 2 !== 0) {
    result.valid = false;
    result.error = "Last Digit not even";
    return result;
  }

  const sum = arr.reduce((prev, cur) => Number(prev) + Number(cur));
  if (sum < 16) {
    result.valid = false;
    result.error = "Sum Less than 16";
    return result;
  }

  if (Number.isNaN(sum)) {
    result.valid = false;
    result.error = "Invalid Characters";
    return result;
  }

  if (!arr.some(el => el !== arr[0])  ) {
    result.valid = false;
    result.error = "All Digits are the same";
    return result;
  }

  return result;
};

l(validateCreditCard("9999777788880000"));
l(validateCreditCard("6666666666661666"));
l(validateCreditCard("9999-7777-8888-0000"));
l(validateCreditCard("6666-6666-6666-1666"));
l(validateCreditCard("a92332119c011112"));
l(validateCreditCard("4444444444444444"));
l(validateCreditCard("1111111111111110"));
l(validateCreditCard("6666666666666661"));
