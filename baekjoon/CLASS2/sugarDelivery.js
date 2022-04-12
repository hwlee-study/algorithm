//https://www.acmicpc.net/problem/2839
let input = require("fs")
  .readFileSync(`${__dirname}/TestCase/sugarDelivery`)
  .toString()
  .trim()
  .split("\n");

function solution(num) {
  let result = 0;

  while (num > 0) {
    if (num % 5 === 0) {
      num -= 5;
    } else {
      num -= 3;
    }
    result++;
  }
  return num === 0 ? result : -1;
}

input.map((el) => {
  console.log(solution(Number(el)));
});
