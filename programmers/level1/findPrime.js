//https://programmers.co.kr/learn/courses/30/lessons/12921
function findPrime(n) {
  let result = [];
  for (let i = 2; i <= n; i++) {
    if (isPrime(i)) result.push(i);
  }
  return result.length;
}

function isPrime(num) {
  for (let i = 2; i <= Math.floor(Math.sqrt(num)); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

let n = 10;
console.log(findPrime(n));
