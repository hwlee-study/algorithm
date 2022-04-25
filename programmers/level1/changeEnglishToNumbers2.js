//https://programmers.co.kr/learn/courses/30/lessons/81301

function changeEnglishToNumbers(s) {
  const numbers = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  let answer = s;
  for (let i = 0; i < numbers.length; i++) {
    let arr = answer.split(numbers[i]);
    answer = arr.join(i);
  }
  return answer;
}

console.log(changeEnglishToNumbers("one4seveneight")); //1478
console.log(changeEnglishToNumbers("23four5six7")); //234567
console.log(changeEnglishToNumbers("2three45sixseven")); //234567
console.log(changeEnglishToNumbers("123")); //123
