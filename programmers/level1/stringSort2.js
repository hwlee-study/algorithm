//https://programmers.co.kr/learn/courses/30/lessons/12915
//TODO: localeCompare함수 이용
let strings = ["abce", "abcd", "cdx"],
  n = 2;
function stringSort(strings, n) {
  return strings.sort((a, b) => {
    return a[n] === b[n] ? a.localeCompare(b) : a[n].localeCompare(b[n]);
  });
}
console.log(stringSort(strings, n));
