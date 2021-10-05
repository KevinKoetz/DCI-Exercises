const perf_hooks = require("perf_hooks");
let arr = Array(100000000)
  .fill(null)
  .map(() => Math.random() * 100);
let start, end;
start = perf_hooks.performance.now();
arr.forEach((el)=>{let a = el*2})
end = perf_hooks.performance.now();
console.log(end-start);

start = perf_hooks.performance.now();
for (let el of arr) {
  let a = el*2
}
end = perf_hooks.performance.now();
console.log(end-start);
