let a = 5;
let b = 24;
function dayOfTheWeek(a, b) {
  //https://programmers.co.kr/learn/courses/30/lessons/12901
  let year = 2016,
    week = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  return week[new Date(year + "-" + a + "-" + b).getDay()];
}

dayOfTheWeek(a, b);
