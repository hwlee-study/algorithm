//https://programmers.co.kr/learn/courses/30/lessons/67256
function keypadPress(numbers, hand) {
  let answer = "";

  let left = [1, 4, 7];
  let right = [3, 6, 9];
  let center = [2, 5, 8, 0];

  let leftPos = [3, 0];
  let rightPos = [3, 2];
  numbers.forEach((el) => {
    if (left.includes(el)) {
      answer += "L";
      leftPos = [left.indexOf(el), 0];
    } else if (right.includes(el)) {
      answer += "R";
      rightPos = [right.indexOf(el), 2];
    } else {
      let pressPos = [center.indexOf(el), 1];

      let LDis = getDistance(leftPos, pressPos);
      let RDis = getDistance(rightPos, pressPos);

      if (LDis > RDis) {
        answer += "R";
        rightPos = pressPos;
      } else if (LDis < RDis) {
        answer += "L";
        leftPos = pressPos;
      } else {
        if (hand === "right") {
          answer += "R";
          rightPos = pressPos;
        } else {
          answer += "L";
          leftPos = pressPos;
        }
      }
    }
  });

  return answer;
}

function getDistance(pos, pressPos) {
  return Math.abs(pos[0] - pressPos[0]) + Math.abs(pos[1] - pressPos[1]);
}
console.log(keypadPress([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], "right")); //"LRLLLRLLRRL"
console.log(keypadPress([7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2], "left")); //"LRLLRRLLLRR"
console.log(keypadPress([1, 2, 3, 4, 5, 6, 7, 8, 9, 0], "right")); //"LLRLLRLLRL"
