//https://programmers.co.kr/learn/courses/30/lessons/87389
let n = 10;
function restOne(n) {
  let result = 0;

  for (let i = n; i > 0; i--) {
    if (n % i === 1) result = i;
  }
  return result;
}

restOne(n);
