//3개의 수를 더했을 때 소수가 되는 경우의 수
let nums = [1, 2, 3, 4];

function makeDecimals(nums) {
  var answer = -1;

  if (nums.length > 0) {
    answer = 0;
    let arr = [];
    //3개의 조합으로 만들기
    for (let i = 0; i < nums.length; i++) {
      for (let j = i + 1; j < nums.length; j++) {
        for (let w = j + 1; w < nums.length; w++) {
          arr.push(nums[i] + nums[j] + nums[w]);
        }
      }
    }

    //합이 소수인지 확인
    arr.map((el) => {
      if (isDecimal(el)) answer++;
    });
  }

  return answer;
}

function isDecimal(num) {
  if (num === 2) return true;

  for (let i = 2; i <= Math.floor(Math.sqrt(num)); i++) {
    if (num % i === 0) return false;
  }

  return true;
}
makeDecimals(nums);
