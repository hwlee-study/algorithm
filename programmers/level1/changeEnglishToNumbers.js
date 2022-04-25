//https://programmers.co.kr/learn/courses/30/lessons/81301

const changedNum = (s) => {
  s = s.replace(/zero/g, "0");
  s = s.replace(/one/g, "1");
  s = s.replace(/two/g, "2");
  s = s.replace(/three/g, "3");
  s = s.replace(/four/g, "4");
  s = s.replace(/five/g, "5");
  s = s.replace(/six/g, "6");
  s = s.replace(/seven/g, "7");
  s = s.replace(/eight/g, "8");
  s = s.replace(/nine/g, "9");

  return Number(s);
};

function changeEnglishToNumbers(s) {
  const numberCheck = /^[0-9]$/g;
  return numberCheck.test(s) ? Number(s) : changedNum(s);
}

console.log(changeEnglishToNumbers("one4seveneight")); //1478
console.log(changeEnglishToNumbers("23four5six7")); //234567
console.log(changeEnglishToNumbers("2three45sixseven")); //234567
console.log(changeEnglishToNumbers("123")); //123
