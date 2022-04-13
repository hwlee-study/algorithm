//https://programmers.co.kr/learn/courses/30/lessons/12932
function flipNaturalNumbers(n) {
  let arr = n.toString().split("").reverse();
  return arr.map((el) => Number(el));
}

console.log(flipNaturalNumbers(12345));
