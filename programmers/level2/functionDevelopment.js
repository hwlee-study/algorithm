let progresses = [95, 90, 99, 99, 80, 99],
  speeds = [1, 1, 1, 1, 1, 1];

function functionDevelopment(progresses, speeds) {
  let result = [0];
  let date = progresses.map((el, idx) => {
    return Math.ceil((100 - el) / speeds[idx]);
  });
  let maxNum = date[0];

  for (let i = 0, j = 0; i < date.length; i++) {
    if (maxNum >= date[i]) {
      result[j] += 1;
    } else {
      maxNum = date[i];
      result[++j] = 1;
    }
  }

  return result;
}

// function solution(progresses, speeds) {
//   let date = [];

//   date = progresses.map((el, idx) => {
//       return Math.ceil((100 - el) / speeds[idx]);
//   });

//   return queue(date);
// }

// function queue(date) {
//   let result = [];
//   let count = 0;

//   while (date.length > 0) {
//   let first = date.shift();
//   count++;

//   if (first < date[0] || date.length === 0) {
//         result.push(count);
//         count = 0;
//       } else {
//         first = date.shift();
//         count++;
//         if (date.length >= 0 && (first > date[0] || date.length === 0)) {
//           result.push(count);
//           count = 0;
//         }
//       }
//   }

//   return result;
// }

functionDevelopment(progresses, speeds);
