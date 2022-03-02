let absolutes = [4, 7, 12];
let signs = [true, false, true];

function addNegativePositiveNumbers(absolutes, signs) {
  let result = 0;
  let arr = [];
  for (let i = 0; i < signs.length; i++) {
    signs[i] ? arr.push(absolutes[i]) : arr.push(absolutes[i] * -1);
  }
  result = arr.reduce((acc, cur) => {
    return acc + cur;
  }, 0);
  return result;
}

addNegativePositiveNumbers(absolutes, signs);
