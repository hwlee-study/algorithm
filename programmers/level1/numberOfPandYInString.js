let s = "Pyy";
function numberOfPandYInString(s) {
  s = s.toLowerCase();
  let arr = s.split("");
  let pLength = isLength(arr, "p");
  let yLength = isLength(arr, "y");
  return pLength === yLength ? true : false;
}

function isLength(arr, string) {
  return arr.filter((el) => el === string).length;
}
console.log(numberOfPandYInString(s));
