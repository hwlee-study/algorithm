let n = 45;

//https://programmers.co.kr/learn/courses/30/lessons/68935
function ternaryFlip(n) {
  let flip = parseInt(n, 10).toString(3).split("").reverse().join("");
  return parseInt(flip, 3);
}

ternaryFlip(n);
