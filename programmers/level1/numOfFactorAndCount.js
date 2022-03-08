let left = 13;
let right = 17;

function numOfFactorAndCount(left, right) {
  let numbers = makeNums(left, right);

  let factors = numbers.map((el) => isFactor(el));

  return isSum(numbers, factors);
}

function makeNums(left, right) {
  let nums = [];
  for (let i = left; i <= right; i++) {
    nums.push(i);
  }
  return nums;
}

function isFactor(num) {
  let count = 0;
  if (num <= 2) return num;

  for (let i = 0; i <= num; i++) {
    if (num % i === 0) count++;
  }
  return count;
}

function isSum(numbers, factors) {
  let sum = 0;
  factors.map((el, idx) => {
    el % 2 === 0 ? (sum += numbers[idx]) : (sum -= numbers[idx]);
  });
  return sum;
}

numOfFactorAndCount(left, right);
//TIP 제곱근이 정수면 홀수다.
