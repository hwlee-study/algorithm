//https://programmers.co.kr/learn/courses/30/lessons/12933
function descOrderOfIntegers(n) {
  let numArr = n
    .toString()
    .split("")
    .map((el) => Number(el));
  return Number(numArr.sort((a, b) => b - a).join(""));
}
console.log(descOrderOfIntegers(118372));
