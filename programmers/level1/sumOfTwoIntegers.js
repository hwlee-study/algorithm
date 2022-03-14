//https://programmers.co.kr/learn/courses/30/lessons/12912
let a = 3,
  b = 3;
function sumOfTwoIntegers(a, b) {
  let sum = 0;
  if (a == b) return a;
  if (a > b) {
    tmp = a;
    a = b;
    b = tmp;
  }
  for (let i = a; i <= b; i++) {
    sum += i;
  }
  return sum;
}
sumOfTwoIntegers(a, b);
