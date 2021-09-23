// NaN = Not a Number

console.log('isNaN("")',isNaN(""));
console.log('isNaN("a")',isNaN("a"));
console.log('isNaN("2")',isNaN("2"));
console.log('isNaN(undefined)',isNaN(undefined));
console.log('isNaN(null)',isNaN(null));
console.log('isNaN(3)',isNaN(3));
console.log('isNaN(NaN)',isNaN(NaN));


console.log('Number.isNaN("")',Number.isNaN(""));
console.log('Number.isNaN("a")',Number.isNaN("a"));
console.log('Number.isNaN("2")',Number.isNaN("2"));
console.log('Number.isNaN(undefined)',Number.isNaN(undefined));
console.log('Number.isNaN(null)',Number.isNaN(null));
console.log('Number.isNaN(3)',Number.isNaN(3));
console.log('Number.isNaN(NaN)',Number.isNaN(NaN));


function isNumber(para) {
  return !Number.isNaN(para) && typeof para === "number";
}

console.log("NaN isNumber:", isNumber(NaN));
console.log("NaN isNumber:", isNumber(undefined));
console.log("NaN isNumber:", isNumber(null));
console.log("NaN isNumber:", isNumber(true));
console.log("NaN isNumber:", isNumber(false));
console.log("NaN isNumber:", isNumber(""));
console.log("NaN isNumber:", isNumber("a"));
console.log("NaN isNumber:", isNumber("2"));
console.log("NaN isNumber:", isNumber(2));
console.log("NaN isNumber:", isNumber(2e2));
console.log("NaN isNumber:", isNumber(0x1));

console.log(0.1 * 0.2);
console.log((0.1 *0.2).toFixed(2));

console.log(Infinity / 0);
console.log(Infinity / Infinity);
console.log(1/0);