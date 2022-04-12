//https://programmers.co.kr/learn/courses/30/lessons/12928
function sumOfFactors(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      sum += i;
    }
  }
  return sum;
}

console.log(sumOfFactors(12)); //28
console.log(sumOfFactors(5)); //6
