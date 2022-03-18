function findKim(seoul) {
  let result = seoul.indexOf("Kim");
  return `김서방은 ${result}에 있다`;
}

let seoul = ["Jane", "Kim"];
console.log(findKim(seoul));
