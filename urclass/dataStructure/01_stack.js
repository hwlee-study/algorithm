class Stack {
  constructor() {
    this.storage = {}; //데이터 저장
    this.top = 0; // 마지막에 들어온 데이터 가르키는 포인터
  }

  size() {
    return this.top;
  }

  push(element) {
    this.storage[this.top] = element;
    this.top += 1;
  }

  pop() {
    if (this.size() <= 0) {
      return;
    }

    const result = this.storage[this.top - 1];
    delete this.storage[this.top - 1];
    this.top -= 1;

    return result;
  }
}
const stack = new Stack();

stack.size();
for (let i = 1; i < 10; i++) {
  stack.push(i);
}
stack.pop(); // 9
stack.pop(); // 8
stack.size(); // 7
stack.push(8);
stack.size(); // 8
console.log(stack);
