function paveBox(boxes) {
  //TODO : 통틀어 최대 몇 명이 한꺼번에 나가는가?
  //TODO : 앞사람이 끝내면 뒤에 포장이 마친 사람은 한꺼번에 나갈 수 있다.
  let boxQueue = new Queue();
  let current = boxes[0];
  let max = 0;

  boxes.forEach((n) => {
    if (current >= n) boxQueue.enqueue(n);
    else if (current < n) {
      max = Object.keys(boxQueue.storage).length;
      boxQueue = new Queue();
      current = n;
      boxQueue.enqueue(n);
    }
  });
  let compare = Object.keys(boxQueue.storage);
  if (compare && max < compare.length) {
    max = compare.length;
  }
  return max;
}

class Queue {
  constructor() {
    this.storage = {};
    this.front = 0;
    this.rear = 0;
  }

  enqueue(element) {
    this.storage[this.rear] = element;
    this.rear += 1;
  }
}
