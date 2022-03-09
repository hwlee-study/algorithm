//https://programmers.co.kr/learn/courses/30/lessons/1845
let nums = [3, 1, 2, 3];

function pocketMon(nums) {
  //TODO : 최대한 많은 종류의 폰켓몬을 포함해서 N/2마리를 선택
  let maxChoice = nums.length / 2;
  let overlapRemove = [...new Set(nums)];
  return maxChoice <= overlapRemove.length ? maxChoice : overlapRemove.length;
}

pocketMon(nums);
