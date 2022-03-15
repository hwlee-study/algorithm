let actions = ["B", "C", -1, "D", "A", -1, 1, -1, -1],
  start = "A";
function browserStack(actions, start) {
  //TODO: 마지막에 접속해 있는 페이지와 방문했던 페이지들이 담긴 스택을 반환
  if (typeof start !== "string") return false;

  let prev = [],
    next = [],
    now = start;

  actions.forEach((el, idx) => {
    if (typeof el === "string") {
      //TODO: 새로운 페이지로 접속할 경우 next 스택은 모두 비워져야 합니다
      next = [];
      prev.push(now);
      now = el;
    } else {
      //TODO: prev, next의 배열값이 있을 경우에만 이동 가능
      if (el === -1 && prev.length !== 0) {
        next.push(now);
        now = prev.pop();
      } else if (el === 1 && next.length !== 0) {
        prev.push(now);
        now = next.pop();
      }
    }
  });

  return [prev, now, next];
}

console.log(browserStack(actions, start));
