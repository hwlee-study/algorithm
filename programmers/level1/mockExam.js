function mockExam(answers) {
  let first = [1, 2, 3, 4, 5];
  let second = [2, 1, 2, 3, 2, 4, 2, 5];
  let third = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  let score = [0, 0, 0];
  let result = [];

  for (let i = 0; i < answers.length; i++) {
    if (answers[i] === first[i % first.length]) score[0]++;
    if (answers[i] === second[i % second.length]) score[1]++;
    if (answers[i] === third[i % third.length]) score[2]++;
  }

  let maxScore = Math.max(...score);

  if (maxScore === score[0]) result.push(1);
  if (maxScore === score[1]) result.push(2);
  if (maxScore === score[2]) result.push(3);

  return result;
}

let answers = [1, 2, 3, 4, 5];
mockExam(answers);
answers = [1, 3, 2, 4, 2];
mockExam(answers);
