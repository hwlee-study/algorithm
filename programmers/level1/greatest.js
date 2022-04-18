//https://programmers.co.kr/learn/courses/30/lessons/12940
function greatest(n, m) {
  const gcd = (a, b) => (a % b === 0 ? b : gcd(b, a % b));
  const lcm = (a, b) => (a * b) / gcd(a, b);
  return [gcd(n, m), lcm(n, m)];
}

console.log(greatest(3, 12));
console.log(greatest(2, 5));

//https://velog.io/@devjade/JavaScript로-최대공약수GCD-최소공배수LCM-구하기
