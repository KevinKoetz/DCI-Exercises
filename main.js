"use strict";

/**
 * Julius Caesar protected his confidential information by encrypting it using a cipher.
 * Caesar's cipher shifts each letter by a number of letters.
 * If the shift takes you past the end of the alphabet,
 * just rotate back to the front of the alphabet.
 * In the case of a rotation by 3, w, x, y and z would map to z, a, b and c
 * Examples:
 * caesarCipher('middle-Outz',2) -> okffng-Qwvb
 * caesarCipher('Always-Look-on-the-Bright-Side-of-Life', 5) -> Fqbfdx-Qttp-ts-ymj-Gwnlmy-Xnij-tk-Qnkj
 * caesarCipher('www.abc.xy', 87) -> fff.jkl.gh
 * the rotation can be any integer between 1 and 100
 */

const caesarCipher = (str, shift) => {
  let abc = shift >= 0 ? "abcdefghijklmnopqrstuvwxyz" : "abcdefghijklmnopqrstuvwxyz".split("").reverse().join("");
  let arr = str.split("");
  shift = Math.abs(shift)

  return arr
    .map((item) => {
      if (abc.includes(item.toLowerCase())) {
        if (item.toLowerCase() === item) {
          return abc[(abc.indexOf(item) + shift) % abc.length];
        } else {
          return abc.toUpperCase()[
            (abc.toUpperCase().indexOf(item) + shift) % abc.length
          ];
        }
      } else {
        return item;
      }
    })
    .join("");
};

console.log(caesarCipher("middle-Outz", 2) === "okffng-Qwvb");
console.log(
  caesarCipher("Always-Look-on-the-Bright-Side-of-Life", 5) ===
    "Fqbfdx-Qttp-ts-ymj-Gwnlmy-Xnij-tk-Qnkj"
);
console.log(caesarCipher("www.abc.xy", 87) === "fff.jkl.gh");

console.log(caesarCipher(caesarCipher("Always-Look-on-the-Bright-Side-of-Life", 5),-5));
