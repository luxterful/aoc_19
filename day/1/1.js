var fs = require("fs");
fs.readFile("input", { encoding: "utf-8" }, function(err, data) {
  const arr = data.split(/\r?\n/);
  let sum = 0;
  arr.forEach(el => {
    if (el) {
      sum += Math.floor(el / 3) - 2;
    }
  });
  console.log(sum);
});
