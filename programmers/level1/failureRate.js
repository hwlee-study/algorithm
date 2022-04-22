//https://programmers.co.kr/learn/courses/30/lessons/42889
function failureRate(N, stages) {
  //실패율 : 스테이지에 도달했으나 아직 클리어 하지 못한 플레이어의 수 / 스테이지에 도달한 플레이어수
  // N: 스테이지의 개수
  // stages: 게임을 이용하는 사용자가 현재 멈춰 있는 스테이지의 번호가 담긴 배열
  //TODO : 실패율이 높은 스테이지부터 내림차순으로 스테이지의 번호가 담겨있는 배열을 return
  let player = stages.length,
    totalStages = new Array(N).fill(0),
    failRates = new Array(N).fill(0);

  stages.sort((a, b) => a - b);

  stages.forEach((el) => {
    totalStages[el - 1] += 1;
  });

  totalStages = totalStages.filter((el) => !isNaN(el));

  for (let i = 0; i < N; i++) {
    //failRates[i] = [Math.floor((totalStages[i] / player) * 100), i + 1]; //시간복잡도 높아짐
    failRates[i] = [totalStages[i] / player, i + 1];
    player -= totalStages[i];
  }

  return failRates.sort((a, b) => b[0] - a[0]).map((el) => el[1]);
}
console.log(failureRate(5, [2, 1, 2, 6, 2, 4, 3, 3])); //[3,4,2,1,5]
console.log(failureRate(4, [4, 4, 4, 4, 4])); //[4,1,2,3]
