//https://programmers.co.kr/learn/courses/30/lessons/12918
let s = "a234";

function isString(s) {
  return s.length === 4 || s.length === 6 ? !isNaN(s) : false;
}

console.log(isString(s));
// function isString(s) {
//   return parseInt(s) ? true : false;
// }
// function isString(s) {
//   if (!(s.length === 4 || s.length === 6)) {
//     return false;
//   } else {
//     let arr = s.split("");
//     for (let i = 0; i < arr.length; i++) {
//       if (isNaN(arr[i])) return false;
//     }
//   }
//   return true;
// }
