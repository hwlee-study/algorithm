let boxes = [5, 1, 4, 6];

function prevBox(boxes) {
  //TODO: 최대 몇 명이 한꺼번에 나가는지 알 수 있도록 함수
  let queue = [];

  while (boxes.length > 0) {
    let withOutIndex = boxes.findIndex((fi) => fi > boxes[0]);

    if (withOutIndex === -1) {
      queue.push(boxes.length);
      boxes.splice(0, boxes.length);
    } else {
      queue.push(withOutIndex);
      boxes.splice(0, withOutIndex);
    }
  }

  return Math.max(...queue);
}

console.log(prevBox(boxes));
