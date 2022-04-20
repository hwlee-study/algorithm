//https://programmers.co.kr/learn/courses/30/lessons/64061
function cramePuppet(board, moves) {
  let bucket = [];
  let count = 0;
  moves.forEach((m) => {
    let doll = pickUp(m - 1, board);
    if (doll) {
      if (bucket[bucket.length - 1] === doll) {
        bucket.pop();
        count += 2;
      } else {
        bucket.push(doll);
      }
    }
    // if (bucket.length === 0) {
    //   bucket.push(doll);
    // } else {
    //   if (bucket[bucket.length - 1] === doll) {
    //     bucket.pop();
    //     count += 2;
    //   } else {
    //     bucket.push(doll);
    //   }
    // }
  });
  return count;
}

function pickUp(m, board) {
  for (let i = 0; i < board.length; i++) {
    if (board[i][m] !== 0) {
      let doll = board[i][m];
      board[i][m] = 0;
      return doll;
    }
  }
}

let board = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 3],
  [0, 2, 5, 0, 1],
  [4, 2, 4, 4, 2],
  [3, 5, 1, 3, 1],
];
let moves = [1, 5, 3, 5, 1, 2, 1, 4];
// let board = [
//   [0, 0, 0, 0, 0],
//   [0, 0, 1, 0, 3],
//   [0, 2, 1, 0, 1],
//   [4, 2, 1, 4, 2],
//   [3, 5, 1, 3, 1],
// ];
// let moves = [3, 3, 3, 3];

console.log(cramePuppet(board, moves));
