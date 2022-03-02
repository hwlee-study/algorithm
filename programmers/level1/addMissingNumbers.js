let numbers = [1, 2, 3, 4, 6, 7, 8, 0];

solution(numbers);

function solution(numbers) {
  var answer = -1;
  if (numbers.length > 0) {
    let tmp = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    let result = tmp.filter((el) => !numbers.includes(el));
    answer = result.reduce((acc, cur) => {
      return acc + cur;
    }, 0);
  }

  return answer;
}
