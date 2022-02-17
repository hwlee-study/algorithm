var fs = require("fs");
var input = fs
  .readFileSync(`${__dirname}/TestCase/palindrome`)
  .toString()
  .trim()
  .split("\n");

input.map((str) => {
  if (str === "0") return;
  else {
    let compareStr = str.split("").reverse().join("");
    return str === compareStr ? console.log("yes") : console.log("no");
  }
});
