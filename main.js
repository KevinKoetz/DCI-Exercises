function fibonacciRec(n) {
  if (n === 1) return 0;
  if (n === 2) return 1;
  return fibonacciRec(n - 1) + fibonacciRec(n - 2);
}

function fibonacci(n) {
  if (n === 1) return 0;
  if (n === 2) return 1;
  let n1 = 0;
  let n2 = 1;
  let result = n1 + n2;
  for (let i = 3; i <= n; i++) {
    result = n1 + n2;
    n1 = n2;
    n2 = result;
  }
  return result;
}

function xbonacci(signature, n) {
  let sequence = [];
  for (let i = 0; i < n; i++) {
    if (i < signature.length) {
      sequence.push(signature[i]);
    } else {
      sequence.push(
        sequence.slice(-signature.length).reduce((prev, cur) => prev + cur)
      );
    }
  }
  return sequence;
}

for (let i = 1; i <= 20; i++) console.log(fibonacci(i));
for (let i = 1; i <= 20; i++) console.log(fibonacciRec(i));

console.log(xbonacci([1, 1, 1],20));
