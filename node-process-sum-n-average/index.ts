const func = process.argv[2];
const args = process.argv.slice(3);
const nums = parseNumbers(args);

switch (func) {
  case "sum":
    console.log(sum(nums));
    break;
  case "avg":
    console.log(avg(nums));
    break;
  default:
    console.error(
      `I cannot calculate that, please type either "sum" (to calculate the sum) or "avg" (To calculate the Average)`
    );
}

function sum(nums: number[]) {
  return nums.reduce((n1, n2) => n1 + n2);
}

function avg(nums: number[]) {
  return sum(nums) / nums.length;
}

function parseNumbers(any: string[]) {
  return any.map((el) => {
    const num = Number.parseFloat(el);
    if (Number.isNaN(num)) {
      console.error(
        `Sorry, the argument '${el}' is not a number, please try again`
      );
      process.exit(1)
    }
    return num;
  });
}
