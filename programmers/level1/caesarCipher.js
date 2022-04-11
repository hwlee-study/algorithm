//https://programmers.co.kr/learn/courses/30/lessons/12926
function caesarCipher(s, n) {
  let lower = "abcdefghijklmnopqrstuvwxynz";
  let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYNZ";
  let answer = "";

  for (let i = 0; i < s.length; i++) {
    const str = s[i];
    if (str == " ") {
      answer += " ";
      continue;
    }
    let standardTxts = lower.includes(str) ? lower : upper;
    let idx = standardTxts.indexOf(str) + n;
    if (idx >= standardTxts.length) idx -= standardTxts.length;
    answer += standardTxts[idx];
  }
  return answer;
}

console.log(caesarCipher("AB", 1));
console.log(caesarCipher("z", 1));
console.log(caesarCipher("a B z", 4));
