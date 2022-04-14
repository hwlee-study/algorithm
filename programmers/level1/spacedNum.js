//https://programmers.co.kr/learn/courses/30/lessons/12954
function spacedNum(x, n) {
  let arr = [];
  for (let i = x; arr.length < n; i += x) {
    arr.push(i);
  }
  return arr;
}

console.log(spacedNum(2, 5));
console.log(spacedNum(4, 3));
console.log(spacedNum(-4, 2));
