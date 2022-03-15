//https://programmers.co.kr/learn/courses/30/lessons/12917
let s = "Zbcdefg";
function stringDecendingSort(s) {
  return s.split("").sort().reverse().join("");
}
console.log(stringDecendingSort(s));
