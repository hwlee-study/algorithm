//https://programmers.co.kr/learn/courses/30/lessons/86491

let sizes = [
  [14, 4],
  [19, 6],
  [6, 16],
  [18, 7],
  [7, 11],
];
function mininumRectangle(sizes) {
  //TODO: 최소 길이중에 최대값, 최대길이중에 최대값 구하기
  let w = sizes.map((el) => el[0]);
  let h = sizes.map((el) => el[1]);

  for (let i = 0; i < sizes.length; i++) {
    if (w[i] < h[i]) {
      let tmp = w[i];
      w[i] = h[i];
      h[i] = tmp;
    }
  }

  return Math.max(...w) * Math.max(...h);
}

mininumRectangle(sizes);

// function mininumRectangle(sizes) {
//   let arr = [...new Set(sizes.flat())].sort((a, b) => a - b);
//   let tenBelows = arr.filter((num) => num < 10);

//   if (tenBelows.length <= 0) {
//     return arr[arr.length / 2 - 1] * arr[arr.length - 1];
//   } else {
//     return tenBelows[tenBelows.length - 1] * arr[arr.length - 1];
//   }
// }
