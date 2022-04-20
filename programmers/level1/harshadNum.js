//https://programmers.co.kr/learn/courses/30/lessons/12947
function isharshad(x) {
  let sum = x
    .toString()
    .split("")
    .reduce((acc, cur) => acc + Number(cur), 0);
  return x % sum === 0 ? true : false;
}

console.log(isharshad(10));
console.log(isharshad(12));
console.log(isharshad(11));
console.log(isharshad(13));
