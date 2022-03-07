let a = [1, 2, 3, 4];
let b = [-3, -1, 0, 2];

function dotProduct(a, b) {
  let result = 0;
  a.map((num, idx) => {
    result += num * b[idx];
  });

  return result;
}

dotProduct(a, b);
