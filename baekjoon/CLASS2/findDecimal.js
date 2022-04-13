//https://www.acmicpc.net/problem/1978
let input = require("fs")
  .readFileSync(`${__dirname}/TestCase/findDecimal`)
  .toString()
  .split("\n");
const N = Number(input.shift());

const isDecimal = (num) => {
  if (num === 2 || num === 3) return true;
  if (num <= 1 || num % 2 === 0) return false;

  for (let i = 3; i <= Math.floor(Math.sqrt(num)); i += 2) {
    if (num % i === 0) return false;
  }

  return true;
};

const nums = input[0].split(" ").map((el) => Number(el));
let cnt = 0;

for (let i = 0; i < N; i++) {
  if (isDecimal(nums[i])) cnt++;
}

console.log(cnt);
