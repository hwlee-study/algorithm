//https://programmers.co.kr/learn/courses/30/lessons/12943
function collatzGuess(num) {
  let count = 0;
  while (num >= 1) {
    if (count >= 500 && num !== 1) {
      count = -1;
      break;
    }
    if (num === 1) break;
    num % 2 === 0 ? (num = num / 2) : (num = num * 3 + 1);
    count++;
  }
  return count;
}

console.log(collatzGuess(6));
console.log(collatzGuess(16));
console.log(collatzGuess(626331));
