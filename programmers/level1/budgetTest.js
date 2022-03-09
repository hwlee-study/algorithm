let d = [1, 3, 2, 5, 4],
  budget = 9;
//https://programmers.co.kr/learn/courses/30/lessons/12982
function budgetTest(d, budget) {
  let maxD = 0,
    count = 0;
  d.sort((a, b) => a - b);
  for (let i = 0; i < d.length; i++) {
    count++;
    maxD += d[i];
    if (maxD > budget) {
      count--;
      break;
    }
  }
  return count;
}
budgetTest(d, budget);
