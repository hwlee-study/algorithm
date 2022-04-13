//https://programmers.co.kr/learn/courses/30/lessons/77484
function highestLowestRankOfLotto(lottos, win_nums) {
  let intersection = win_nums.filter((el) => lottos.includes(el));
  let findZero = lottos.filter((el) => el === 0);

  return [
    rankCheck(intersection.length + findZero.length),
    rankCheck(intersection.length),
  ];
}

function rankCheck(cnt) {
  switch (cnt) {
    case 6:
      return 1;
    case 5:
      return 2;
    case 4:
      return 3;
    case 3:
      return 4;
    case 2:
      return 5;
    default:
      return 6;
  }
}

console.log(
  highestLowestRankOfLotto([44, 1, 0, 0, 31, 25], [31, 10, 45, 1, 6, 19])
);
console.log(
  highestLowestRankOfLotto([0, 0, 0, 0, 0, 0], [38, 19, 20, 40, 15, 25])
);
console.log(
  highestLowestRankOfLotto([45, 4, 35, 20, 3, 9], [20, 9, 3, 45, 4, 35])
);
