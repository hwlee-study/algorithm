//https://programmers.co.kr/learn/courses/30/lessons/12931
function addDigits(n) {
  return n
    .toString()
    .split("")
    .reduce((acc, cur) => acc + Number(cur), 0);
}

console.log(addDigits(123));
console.log(addDigits(987));
