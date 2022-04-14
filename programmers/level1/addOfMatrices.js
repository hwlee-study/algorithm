//https://programmers.co.kr/learn/courses/30/lessons/12950
function addOfMatrices(arr1, arr2) {
  return arr1.map((el, i) => arr2[i].map((num, j) => arr1[i][j] + arr2[i][j]));
}
// function addOfMatrices(arr1, arr2) {
//   return arr1
//     .map((el, idx) => [el[0] + arr2[idx][0], el[1] + arr2[idx][1]])
//     .map((el) => el.filter((num) => !isNaN(num)));
// }

console.log(
  addOfMatrices(
    [
      [1, 2],
      [2, 3],
    ],
    [
      [3, 4],
      [5, 6],
    ]
  )
);
console.log(addOfMatrices([[1], [2]], [[3], [4]]));
