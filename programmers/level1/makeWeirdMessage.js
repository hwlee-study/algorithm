function makeWeirdMessage(s) {
  return s
    .split(" ")
    .map((str) => {
      let result = "";
      str.split("").forEach((el, idx) => {
        idx % 2 === 0
          ? (result += el.toUpperCase())
          : (result += el.toLowerCase());
      });
      return result;
    })
    .join(" ");
}

console.log(makeWeirdMessage("try hello world "));
