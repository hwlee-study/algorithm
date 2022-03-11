let s = "abcde";
function getMiddleText(s) {
  let middle = Math.floor(s.length / 2);
  return s.length % 2 === 0 ? s[middle - 1] + s[middle] : s[middle];
}
// function getMiddleText(s) {
//   let arr = s.split("");
//   let middle = Math.floor(arr.length / 2);
//   let result = [];
//   if (arr.length % 2 === 0) {
//     result.push(arr[middle - 1]);
//     result.push(arr[middle]);
//   } else {
//     result.push(arr[middle]);
//   }
//   return result.join("");
// }

getMiddleText(s);
