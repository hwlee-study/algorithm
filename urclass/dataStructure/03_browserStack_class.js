function browserStack(actions, start) {
  let stacks = new Stack();
  actions.forEach((n) => {
    if (typeof n === "string") {
      stacks.add(start);
      start = n;
    } else {
      if (n < 0) {
        start = stacks.prev(start);
      } else {
        start = stacks.next(start);
      }
    }
  });
  return [stacks.prevStack, start, stacks.nextStack];
}

class Stack {
  constructor() {
    this.prevStack = [];
    this.nextStack = [];
    this.prevTop = 0;
    this.nextTop = 0;
  }

  prev(el) {
    //TODO : 뒤로가기 > 원래페이지 next스택에 넣고, prev top에 있는 페이지 start로 변경, prev top 제거
    if (this.prevTop === 0 && this.nextTop === 0) return [];
    let result = "";
    this.nextStack.push(el);
    this.nextTop++;
    result = this.prevStack.pop();
    this.prevTop--;
    return result;
  }
  add(el) {
    //TODO : 새로운 페이지로 접속할 경우 prev 스택에 원래 있던 페이지를 넣고 next 스택을 비웁니다.
    this.prevStack.push(el);
    this.prevTop++;
    this.nextStack = [];
  }

  next(el) {
    //TODO : 앞으로가기 > 원래페이지 prev스택에 넣고, next top에 있는 페이지 start로 변경, next top 제거
    if (this.prevTop === 0 && this.nextTop === 0) return [];
    let result = "";
    this.prevStack.push(el);
    this.prevTop++;
    result = this.nextStack.pop();
    this.nextTop--;
    return result;
  }
}
