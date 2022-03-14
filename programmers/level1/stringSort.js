//https://programmers.co.kr/learn/courses/30/lessons/12915
let strings = ["abce", "abcd", "cdx"],
  n = 2;
function stringSort(strings, n) {
  return strings.sort((a, b) => {
    if (a[n] === b[n]) {
      if (a > b) return 1;
      else return -1;
    }
    return a[n] < b[n] ? -1 : 1;
  });
}
console.log(stringSort(strings, n));
