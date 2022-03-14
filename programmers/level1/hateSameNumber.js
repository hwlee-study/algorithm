//https://programmers.co.kr/learn/courses/30/lessons/12906
let arr = [4, 4, 4, 3, 3];
function hateSameNumber(arr) {
  return arr.filter((el, idx) => el !== arr[idx + 1]);
}

hateSameNumber(arr);
